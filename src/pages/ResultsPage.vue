<template>
    <q-page>
        <div v-if="area">
            <div class="text-h4 q-pa-md">Search results for "{{ area }}"</div>
        </div>

        <div v-else-if="type">
            <div class="text-h4 q-pa-md">Search results for "{{ type }}"</div>
        </div>
        
        <q-separator/>
        <div v-if="results.length>0" class="row justify-center">
            <div class="row inline justify-center " v-for="(result,index) in results" :key="index">
            <ResultCard class= "q-pa-lg"  :result="result" @click="showDialog(result)" />
            
            </div>

        </div>
        <div v-else class="text-h6 absolute-center">
           
                <q-banner class="bg-primary text-white q-pa-lg" rounded>
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

    export default {
        name:'ResultsPage',
        data() {
            return {
                services: [
            {   service:'grocery',
                name: 'Balaji',
                rating:5,
                location: 'Sus',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus",


            },
            {
                service:'grocery',
                name: 'RashanCart',
                rating:4.5,
                location: 'Nande',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },
            {
                service:'grocery',
                name: 'More',
                rating:4.5,
                location: 'Wakad',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },

            {
                service:'grocery',
                name: 'Pratham Shoppe',
                rating:4.5,
                location: 'Chinchwad',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },
            {
                service:'grocery',
                name: 'Kunal',
                rating:4.5,
                location: 'Baner',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },
            {
                service:'grocery',
                name: 'Balaji',
                rating:4.5,
                location: 'Sus',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },
            {
                service:'grocery',
                name: 'Hello',
                rating:4.5,
                location: 'Sus',
                phone: 1234567890,
                
            },

            ],
            area:'',
            type:'',
            results:[],
            
            showModal: false,
            details:{}

            }
            
        },
         created () {
        
        if(this.$route.query.area){
        this.area=this.$route.query.area;
        this.results=this.services.filter((service)=>service.location.toLowerCase()==this.area);
        console.log(this.results)}
        
        else if (this.$route.query.type){
            this.type=this.$route.query.type;
            this.results=this.services.filter((service)=>service.service==this.type);
            console.log(this.type)
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

</style>