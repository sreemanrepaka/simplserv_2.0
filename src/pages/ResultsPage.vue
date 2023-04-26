<template>
    <q-page>
        <div v-if="area">
            <div class="text-h4 q-pa-md">Search results for "{{ area }}"</div>
        </div>

        <div v-else-if="type">
            <div class="text-h4 q-pa-md">Search results for "{{ type }}"</div>
        </div>
        
        <q-separator/>
        <div v-if="!no_results" class="row q-ma-lg">
            <div class="row inline justify-center " v-for="(result,index) in results" :key="index">
            <ResultCard class= " q-ma-md"  :result="result" @click="showDialog(result)" />
            
            </div>

        </div>
        
        <div v-else class=" row ">
            
            <q-banner class="bg-primary text-white q-pa-lg col-md-6 offset-md-3 col-sm-10 offset-sm-1 q-ma-xl" rounded>
            <div v-if="area">
        No search results found for "{{ area }}". Check your spelling and try again.
            </div>
            <div v-if="type">
        No search results found for "{{ type }}". Check your spelling and try again.
            </div>
            
      <template v-slot:action>
        
        <q-btn flat color="white" label="Go back" to="services"/>
      </template>
    </q-banner>
        </div>
    
    
  <q-dialog v-model="showModal" class="my-dialog" transition-show="fade" transition-hide="fade">
    <details-card :details="details"></details-card>
    
  </q-dialog>


    </q-page>
</template>

<script>
import ResultCard from 'src/components/ResultCard.vue';
import DetailsCard from '../components/DetailsCard.vue';
import { collection,getDocs,addDoc,doc,deleteDoc } from 'firebase/firestore';
import { db } from 'src/firebase';

    export default {
        name:'ResultsPage',
        data() {
            return {
                 services: [
            ],
            area:'',
            type:'',
            results:[],
            
            showModal: false,
            details:{},
            no_results: false,

            }
            
        },


       async mounted(){
            const querySnapshot = await getDocs(collection(db, "Services"));
querySnapshot.forEach((doc) => {

  let service={
    service: doc.data().Service,
    name: doc.data().Name,
    rating: doc.data().Rating,
    location: doc.data().Location,
    phone: doc.data().Phone,
    address: doc.data().Address
  };


  
  this.services.push(service)
  
});

            if(this.$route.query.area){
        this.area=this.$route.query.area;
        this.results=this.services.filter((service)=>service.location.toLowerCase()==this.area);
        console.log(this.results)}
        
        else if (this.$route.query.type){
            this.type=this.$route.query.type;
            this.results=this.services.filter((service)=>service.service.toLowerCase()==this.type);
            console.log(this.results)
        }

        if (this.results.length==0){
            this.no_results=true;
        }

        },
        

        methods: {
            openDetails() {
                this.details=true;
                
            },

            showDialog(e) {
            this.showModal = true;
            this.details=e;
            
            
            },
            
        },
        components: {
            ResultCard,
            DetailsCard,
        },
        
    }
</script>

<style lang="scss" scoped>
.row.inline.justify-center {
  margin-bottom: 0px; /* Adjust the value as needed */
}

</style>