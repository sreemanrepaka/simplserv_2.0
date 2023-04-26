<template>

    
    <div>
        <!-- <div class="row">
            <div class="col-10 offset-1">
                <q-card>
            <div class="col-6 offset-3">
                
            </div>
            <q-form @submit.prevent="submitForm" class="q-gutter-lg">
    <q-input
                
      outlined
      v-model="service.Name"
      label="Service Name"
      required
    />
    <q-select
                
      outlined
      v-model="service.Service"
      label="Service Type"
      :options="serviceTypes"
      required
    />
    <q-input
      outlined
      v-model="service.Location"
      label="Service Location"
      required
    />
    <q-input
      outlined
      v-model="service.Address"
      label="Service Address"
      required
    />
    <q-input
      outlined
      v-model="service.Phone"
      label="Phone Number"
      required
    />
    <q-btn
      type="submit"
      color="primary"
      :disable="!isFormValid"
      label="Add Service"
    />
  </q-form>
        </q-card>
            </div>
        </div>
        

         -->

           
  <div class="row ">
    <div class="col-md-8 offset-md-2 col-xs-12 col-sm-6 "><br>
      <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-10"></div>
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div class="row q-ml-sm q-mt-sm">
          <div class="col-12 fredoka text-subtitle1">
            
          </div>
        </div>
        <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
          <div class="text-center">
            <div class="text-h6 text-uppercase text-white fredoka" style="min-width: 220px">Service Providers,</div>
            <div class="text-white q-my-sm text-subtitle1">Add your services here to reach a wider audience.</div>
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
                  <div class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka">Add Service</div>
                </div>
              </div>
              <q-form @submit.prevent="submitForm" class="q-gutter-lg">
    <q-input
                
      outlined
      v-model="service.Name"
      label="Service Name"
      required
    />
    <q-select
                
      outlined
      v-model="service.Service"
      label="Service Type"
      :options="serviceTypes"
      required
    />
    <q-input
      outlined
      v-model="service.Location"
      label="Service Location"
      required
    />
    <q-input
      outlined
      v-model="service.Address"
      label="Service Address"
      required
    />
    <q-input
      outlined
      v-model="service.Phone"
      label="Phone Number"
      required
    />
    <q-btn
    class="full-width fredoka"
      type="submit"
      color="primary"
      :disable="!isFormValid"
      label="Add Service"
    />
  </q-form>
  <transition appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut">
    <div v-if="val">
  <q-banner inline-actions class="text-white bg-primary q-ma-md ">
      Service added successfully!
      <template v-slot:action>
        <q-btn flat color="white" label="Close" @click="val=false"/>
      </template>
    </q-banner>
  </div>
  </transition>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>


  </q-card>

    </div>
    

  </div>

    </div>
</template>

<script>
import { db } from 'src/firebase';
import { collection,getDocs,addDoc,doc,deleteDoc } from 'firebase/firestore';
    export default {

        data() {
    return {
      service: {
        Name: '',
        Service: '',
        Location: '',
        Address: '',
        Phone: ''
      },
      val:false,
      serviceTypes: ['Grocery', 'Tiffin','Maid','Carpentry', 'Hardware', 'Vehicle Repair', 'Barber', 'Laundry', 'Tailor', 'Pharmacy']
    }
  },
  computed: {
    isFormValid() {
      return (
        this.service.Name &&
        this.service.Service &&
        this.service.Location &&
        this.service.Phone
      )
    }
  },
  methods: {
    async submitForm() {
      // Handle submitting the form data to your backend or store here
      console.log('Form submitted:', this.service)
      const docRef = await addDoc(collection(db, "Services"), this.service);
      // Clear the form after submission
      this.val=true;
      this.service = {
        Name: '',
        Service: '',
        Location: '',
        Address: '',
        Phone: ''
      }
    
    }
},
        
    }
</script>

<style lang="scss" scoped>

</style>