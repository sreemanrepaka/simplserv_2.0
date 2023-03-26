<template>
  <div>
    <q-card class="my-card fixed-center" style="width: 400px" >
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Enter Login Details</div>

      </q-card-section>

      <q-separator />
      <q-card-section>
        <div class="q-pa-md" style="max-width: 400px">

<q-form

  class="q-gutter-md"
  @submit="Validate()" 
  
  
>
  <q-input
    filled
    v-model="email"
    label="Email ID"
    type="email"

  />

  <q-input
    filled
    v-model="password"
    label="Password"
    type="password"

  />
          
<br><br><br>
  <q-card-section >
    <q-btn label="Submit" type="submit" color="primary" class="absolute-center" />
    
  </q-card-section>

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

</q-form>

</div>
        
  </q-card-section>

  
  </q-card>
  
  

  </div>

    

</template>

<script>
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
      
      
      
      if (this.email=="sreemanrepaka@gmail.com" && this.password=="test123"){
        this.$router.push({path:'/services'})
      }

      else{
        this.val=true
      }


      
    }
  },

})
</script>
