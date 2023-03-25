<template>
    <q-page>
        <div class="text-h4 q-pa-md">Search results for "{{ area }}"</div>
        <q-separator/>
        <div v-if="results.length>0">
            <div class="row inline " v-for="(result,index) in results" :key="index">
            <ResultCard class= "q-pa-lg"  :result="result"/>
            </div>

        </div>
        <div v-else class="text-h6 absolute-center">
            <q-banner class="bg-primary text-white q-pa-lg" rounded>
      No search results found for "{{ area }}". Check your spelling and try again.
      <template v-slot:action>
        
        <q-btn flat color="white" label="Go back" to="services"/>
      </template>
    </q-banner>
        </div>
        
            

            

       


    </q-page>
</template>

<script>
import ResultCard from 'src/components/ResultCard.vue';
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
                name: 'Hi',
                rating:4.5,
                location: 'Nande',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },
            {
                service:'grocery',
                name: 'Helu',
                rating:4.5,
                location: 'Wakad',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },

            {
                service:'grocery',
                name: 'hehe',
                rating:4.5,
                location: 'Chinchwad',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },
            {
                service:'grocery',
                name: 'yeye',
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
                name: 'Balaji',
                rating:4.5,
                location: 'Sus',
                phone: 1234567890,
                address: "parkhe vasti opposite oxford paradise sus"
            },

            ],
            area:'',
            results:[],

            }
            
        },
         created () {
            
        this.area=this.$route.query.area;
        this.results=this.services.filter((service)=>service.location.toLowerCase()==this.area);
        console.log(this.results)
        
        
        },
        components: {
            ResultCard,
        },
        
    }
</script>

<style lang="scss" scoped>

</style>