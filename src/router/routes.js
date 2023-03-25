
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/services', component: () => import('pages/ServicesPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
      { path: '/searchresult', component: () => import('pages/ResultsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
