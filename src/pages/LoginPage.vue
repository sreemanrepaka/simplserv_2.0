<template>
  
  <div class="row ">
    <div class="col-8 offset-2 "><br>
      <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-10"></div>
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div class="row q-ml-sm q-mt-sm">
          <div class="col-12 fredoka text-subtitle1">
            
          </div>
        </div>
        <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
          <div class="">
            <div class="text-h4 text-uppercase text-white fredoka" style="min-width: 220px">WELCOME!</div>
            <div class="text-white q-my-sm text-subtitle1">Enter your credentials to login</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
          <div class="col-12 fredoka text-subtitle1">
            
          </div>
        </div>
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-mb-xl">
                <div class="flex justify-center">
                  <div class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka">Login</div>
                </div>
              </div>
              <q-form class="q-gutter-md" @submit="Validate">
                <q-input   label="Email"
                         lazy-rules name="username" v-model="email" required/>
                <q-input   label="Password" lazy-rules
                         name="password" type="password" v-model="password" required/>
                <div><br><br>
                  <q-btn class="full-width fredoka" color="primary" label="Submit" rounded
                         type="submit"></q-btn> <br> <br>
                  <div class="q-mt-lg">
                    <div class="q-mt-sm">
                      Don't have an account yet? 
                      <router-link class="text-primary" to="/register">Register</router-link>
                    </div>
                    <div class="q-mt-sm">
                      Forgot password?
                      <router-link class="text-primary" to="/forgotpassword">Click here!</router-link>
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>

    <transition appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut">
    <div v-if="val">
  <q-banner inline-actions class="text-white bg-red ">
      The email/password you have entered is incorrect. Please try again!
      <template v-slot:action>
        <q-btn flat color="white" label="Close" @click="val=false"/>
      </template>
    </q-banner>
  </div>
  </transition>
  </q-card>

    </div>
    

  </div>


</template>

<script>
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/index.js"
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password:'',
      val:false
    }
    
  },
  methods: {
    Validate(e) {

      signInWithEmailAndPassword(auth,this.email, this.password)
      .then((data) =>{

        console.log("successfully signed in");
        this.$router.push({path:'/services',query:{val:true}})


      })

      .catch((error) =>{this.val=true})


      
      
      
      // if (this.email=="sreemanrepaka@gmail.com" && this.password=="test123"){
      //   this.$router.push({path:'/services',query:{val:true}})
      // }

      // else{
      //   this.val=true
      // }


      
    }
  },

})
</script>
