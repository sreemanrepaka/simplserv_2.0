
<template>
    <q-layout view="hhh lpR fff" >
  
      <q-header reveal elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar >
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" @click="Home()" >
            </q-avatar>
            SimplServ.
          </q-toolbar-title>

  
 
        </q-toolbar>
  
        
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer >
        <q-toolbar class="flex flex-center text-white" style="background-color: #1c1b21;" :style="'border-top: 2px solid '+ theme_color">
             <div class="q-pa-sm q-gutter-sm">
          <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="fab fa-twitter" />
          <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="fab fa-github" />
              <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="email" />
          <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" glossy text-color="black" icon="fas fa-heart" />
        </div>
          </q-toolbar>
      </q-footer>
  
    </q-layout>
  </template>
  <script>
  import { defineComponent, ref } from 'vue'
  
  
  
  export default defineComponent({
    name: 'MainLayout',
  
    components: {
      
    },
    methods: {
      Home() {
        this.$router.push({path: "/"})
      
        
      }
    },
  
  
    setup () {
      const leftDrawerOpen = ref(false)
  
      return {
        
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
 
    }
  })
  </script>
  