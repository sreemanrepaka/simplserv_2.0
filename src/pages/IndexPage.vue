<template>
  <q-page class="bg-secondary flex flex-center">
    

    <q-card class="my-card" style="width: 400px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Enter Login Details</div>

      </q-card-section>

      <q-separator />
      <q-card-section>
        <div class="q-pa-md" style="max-width: 400px">

<q-form

  class="q-gutter-md"
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
    <q-btn label="Submit" type="submit" color="primary" class="absolute-center"/>

  </q-card-section>
</q-form>

</div>
        
      </q-card-section>
      
    </q-card>

  


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      email: '',
      password:''
    }
  },
})
</script>
