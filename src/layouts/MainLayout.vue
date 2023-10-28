
<template>
  <q-layout view="hhh lpR fff" >

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          
            
            <q-img id="logo" src="../assets/simplserv_logo2.jpeg.png" @click="Home()" style="width:80px"></q-img>

        </q-toolbar-title>
        <q-tabs align="right" class="gt-sm">
        <q-route-tab to="/services" label="Find a Service" />
        <q-route-tab to="/add" label="Add Service" />
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/contact" label="Contact" />
        <!-- <q-btn v-if="isLoggedIn" @click="handleSignOut"> Logout</q-btn> -->
        <q-btn-dropdown color="white" icon-right="fa-solid fa-user" flat v-if="isLoggedIn"  >
         <q-list>
          <q-item>
            <q-item-section>
            <q-item-label ><span class="text-h6">Welcome!</span><br>{{ email }}</q-item-label>
          </q-item-section>
          </q-item>
          <br>
          <q-separator></q-separator>
          <q-item clickable to="/forgotpassword" >
            <q-item-section>
            <q-item-label  >Change Password</q-item-label>
          </q-item-section>
          </q-item>
          <q-item clickable @click="handleSignOut">
            <q-item-section>
            <q-item-label >Logout</q-item-label>
          </q-item-section>
          </q-item>
         </q-list>
        </q-btn-dropdown>

      </q-tabs>


      <div class="q-pa-md">
        <q-btn-dropdown color="white" icon="menu" flat align="right" class="lt-md q-pa-none"  >
      <q-list>
        <q-item clickable v-close-popup to="/services" >
          <q-item-section>
            <q-item-label>Services</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup to="/add">
          <q-item-section>
            <q-item-label>Add Service</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/about" >
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/contact">
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
        <q-btn-dropdown color="white" icon-right="fa-solid fa-user" flat v-if="isLoggedIn" class="lt-md q-pa-none" no-caret  >
         <q-list>
          <q-item>
            <q-item-section>
            <q-item-label ><span class="text-h6">Welcome!</span><br>{{ email }}</q-item-label>
          </q-item-section>
          </q-item>
          <br>
          <q-separator></q-separator>
          <q-item clickable to="/forgotpassword" >
            <q-item-section>
            <q-item-label  >Change Password</q-item-label>
          </q-item-section>
          </q-item>
          <q-item clickable @click="handleSignOut">
            <q-item-section>
            <q-item-label >Logout</q-item-label>
          </q-item-section>
          </q-item>
         </q-list>
        </q-btn-dropdown>
    
    
  </div>
      </q-toolbar>

      
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      
      <q-toolbar class="flex justify-evenly text-white" style="background-color: #1c1b21;" :style="'border-top: 2px solid '+ theme_color">
             <div class="q-pa-sm q-gutter-xl ">
              <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" glossy text-color="black" icon="fas fa-home" to="/" />
          <q-btn round type="a" href="https://twitter.com/SreemanRepaka"
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="fab fa-twitter" />
          <q-btn round type="a" href="https://github.com/sreemanrepaka/simplserv_2.0"
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="fab fa-github" />
              <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="email" />
          
        </div>
          </q-toolbar>
    </q-footer>

  </q-layout>
</template>
<script>
import router from 'src/router'
import {auth} from "../firebase/index.js"
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { defineComponent, ref } from 'vue'



export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      isLoggedIn: false,
      email:"",
      
    }
  },

  mounted () {
    onAuthStateChanged(auth, (user)=>{
      if (user){
        this.email=user.email;
        this.isLoggedIn=true;
      }
      else{
        this.isLoggedIn=false;
      }
    })
  },


  setup () {
    const leftDrawerOpen = ref(false)

    return {
      
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    Home() {
      this.$router.push({path: "/"})
      
      
    },
    handleSignOut(){
      signOut(auth).then(()=>{
        this.$router.push({path: "/"})
      })
    }

  },
})
</script>

<style scoped>
#logo:hover{
  cursor: pointer;
  color: silver;
}

</style>