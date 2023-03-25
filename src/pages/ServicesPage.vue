<template>
    <q-page class="q-pa-md" >

      <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
      autoplay="true"
      infinite
      
      
      
    
    >
      <q-carousel-slide name="first" img-src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Grocery</div>
          
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Repair</div>

        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://images.unsplash.com/photo-1574538298279-26973f60efa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Laundry</div>

        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
      <div class="q-pa-md">
        <div class="text-h6 q-pa-md">Search by area</div>
        <form @submit="OnSubmit"  >
          <q-input rounded outlined v-model="area" style="max-width: 800px" >
        <template v-slot:append>
          <q-avatar>
            <q-icon name="search" size="sm"></q-icon>
          </q-avatar>
        </template>
      </q-input>
      
        </form>

        
      <br>
      </div>
        
        <q-separator></q-separator>
      
       <div class="q-pa-md"> 
        <div class="text-h6 q-pa-md">Search by service type</div>



<div class="q-pa-md row items-start q-gutter-lg">

<q-card class="my-card cursor-pointer ">
<q-card-section>
<q-icon name="fa-solid fa-shopping-cart" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Grocery</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-utensils" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Tiffin</div>
</q-card-section>
</q-card>

<q-card class="my-card cursor-pointer" >
<q-card-section>
<q-icon name="fa-solid fa-broom" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Maid</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-kitchen-set" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Cook</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-helmet-safety" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Carpenter</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-plug-circle-exclamation" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Electrician</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-faucet-drip" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Plumber</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-screwdriver-wrench" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Vehicle Repair</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-scissors" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Barber</div>
</q-card-section>
</q-card>
<q-card class="my-card cursor-pointer">
<q-card-section>
<q-icon name="fa-solid fa-shirt" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">Laundry</div>
</q-card-section>
</q-card>

</div></div>

  
    </q-page>

</template>

<script>
import router from 'src/router';
import { ref } from 'vue'
    export default {
        name:'ServicesPage',
    setup () {
    return {
      slide: ref('first')
    }
  },
        data() {
            return {
                
                area:'',
            }
        },
        methods: {
          OnSubmit(e) {
            e.preventDefault();
            
            this.$router.push({path:'searchresult', query:{area:this.area}})

          }
        },
    }
</script>

<style lang="scss" scoped>
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3)
}


.my-card:hover{
  background-color: rgb(212, 211, 211);
}
</style>