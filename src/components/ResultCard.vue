<template>



        
        <q-card class="my-card" style="width:260px">
      <q-img :src="getImage" style="height:200px"/>


      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{result.name}}
          </div>
          
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{result.service.toUpperCase()}} Services
          <br>{{ result.location }} 
        </div>
        <div class="text-caption text-grey">
         click for more details 
        </div>
      </q-card-section>

      

      
    </q-card>
        


</template>

<script>
    export default {
        data() {
          return {
            stars: this.result.rating
          }
        },
        props: {
            result:{
                type: Object
            }
            

        },
        computed: {
          getImage() {
            try {
              return require(`../assets/${this.result.service.toLowerCase()}.jpg`)
              
            } catch (error) {
              return require(`../assets/user.png`)
              
              
              
            }


          }
        },
        
    }
</script>

<style lang="scss" scoped>

.my-card:hover{
  background-color:silver ;
  cursor: pointer;
}


</style>