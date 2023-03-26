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
    <transition appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut">
    <q-banner class="bg-grey-3 absolute-top" v-if="val">
      <template v-slot:avatar>
        <q-icon name="fa-solid fa-user" color="primary" />
      </template>
      <div class="text-h6 ">Signed in successfully!</div>
      <template v-slot:action>
        <q-btn flat color="primary" label="Close" @click="val=!val"/>
      </template>
    </q-banner>
    </transition>
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



<div v-for="item in types" :key="item.id" class="q-pa-md row inline" >

  

  <q-card class="my-card cursor-pointer flat q-ma-none " @click="selectType(item.name)">
<q-card-section>
<q-icon :name="item.icon" class="q-pa-lg" size="lg"></q-icon>
</q-card-section>
<q-separator></q-separator>
<q-card-section >
<div class="text-subtitle2 text-center">{{item.name}}</div>
</q-card-section>
</q-card>


</div>
</div>

  
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
                val:true,
                types:[
                  {
                    id:1,
                    name:"grocery",
                    icon:"fa-solid fa-shopping-cart"
                  },
                  {
                  id:2,
                  name:"tiffin",
                  icon:"fa-solid fa-utensils"
                  },
                  {
                  id:3,
                  name:"maid",
                  icon:"fa-solid fa-broom"
                  },
                  {
                  id:4,
                  name:"cook",
                  icon:"fa-solid fa-kitchen-set"
                  },
                  {
                  id:5,
                  name:"carpenter",
                  icon:"fa-solid fa-helmet-safety"
                  },
                  {
                  id:6,
                  name:"electrician",
                  icon:"fa-solid fa-plug-circle-exclamation"
                  },
                  {
                  id:7,
                  name:"plumber",
                  icon:"fa-solid fa-faucet-drip"
                  },
                  {
                  id:8,
                  name:"repair",
                  icon:"fa-solid fa-screwdriver-wrench"
                  },
                  {
                  id:9,
                  name:"barber",
                  icon:"fa-solid fa-scissors"
                  },
                  {
                  id:10,
                  name:"laundry",
                  icon:"fa-solid fa-shirt"
                  },

                
                ]
            }
        },
        methods: {
          OnSubmit(e) {
            e.preventDefault();
            
            this.$router.push({path:'searchresult', query:{area:this.area}})

          },
          selectType(type){
            this.$router.push({path:'searchresult', query:{type:type}})

            

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