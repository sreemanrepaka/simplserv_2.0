import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory, } from 'vue-router'
import routes from './routes'
import {auth} from '../firebase/index.js'
import { onAuthStateChanged } from 'firebase/auth'


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  function getCurrentUser(){
    return new Promise(function(resolve, reject){
      const removeListener = onAuthStateChanged(
        auth,
        (user)=>{
          removeListener();
          resolve(user);
        },
        reject
      )

    })
  }

  Router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
      if (await getCurrentUser()) {
        next();
      } else {
        alert("Login/Register to gain access!");
        next("/login");
      }
    } else {
      next();
    }
  });

  return Router
})

