<template>
    <div>
        <br><br><br><div class="flex flex-center">
            
    <q-card style="width: 500px; max-width: 40vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          Reset Password
        </div>
        <q-space />
        
      </q-card-section>
      <q-card-section class="q-pt-md">
        <q-form ref="resetPasswordForm">
          <q-input
            type="email"
            v-model="email"
            label="Email *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type your email']"
          />
        </q-form>
        <q-card-actions align="right">
          <div class="row q-mt-xs">
            <q-btn
              class="q-pl-md q-pr-md q-mr-md text-capitalize rounded-borders"
              label="Submit"
              color="primary"
              @click="resetPassword"
            />
          </div>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>


    </div>
</template>

<script>
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from 'src/firebase'

export default {
    name: "ForgotPassword",
    data (){
        return {
        
            email: '',
        
        }
    },
  methods: {
    resetPassword () {


        sendPasswordResetEmail(auth, this.email)
    .then(() => {
      
      
    })
    .catch(error => console.log(error))

    this.email ="";

      
    }
  }

        
    }

  
</script>

<style lang="scss" scoped>

</style>