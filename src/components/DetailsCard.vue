<template>
    <div>

      <q-card  >
  <q-img :src= "getImage" style="width:560px; height: 350px"/>
  <q-card-section class="text-subtitle1">
    <div class="row justify-center">
      <div class="col">
        <q-item-label class="text-h6">
          {{ details.name }}
        </q-item-label>
        <br>
        <q-item-label class="text-tertiary" v-if="details.address">
          <q-icon name="location_on" size="20px" />
          {{details.address}} 
        </q-item-label>
        
        <q-item-label class="text-tertiary">
          <q-icon name="phone" size="20px" />
          {{details.phone}}
        </q-item-label>
        <br>
      </div>
      <q-separator></q-separator>
      <div class="col-auto">
        <div class="row items-center">
          <q-rating class="text-tertiary" v-model="rating" :max="5" :readonly="true" />
          <q-item-label class="text-caption ml-1">
            {{ details.rating }}
          </q-item-label>
        </div>
      </div>
    </div>
    <q-item-label class="text-body1 mt-4" >
      {{details.name}} has been serving the {{ details.location }} area for a long time now, providing high-quality products and services to their valued customers.
    </q-item-label>
  </q-card-section>

  <q-card-actions align="right">
    <q-btn label="Go Back" color="primary" class="mr-2" to="/services"/>
    <q-btn label="Directions" color="primary" @click="openDirections" v-if="details.address"/>
  </q-card-actions>
</q-card>

    </div>
</template>

<script>
    export default {
        props: {
            details: {
                type: Object,
                
            },
        },
        methods: {
            openDirections() {
      const address = encodeURIComponent(this.details.address);
      const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
      window.open(url, '_blank');
    },


        },
      computed: {
        getImage() {
          try {
            return require(`../assets/${this.details.service.toLowerCase()}.jpg`)
            
          } catch (error) {
            return require(`../assets/user.png`)
            
          }
        
        
      }

      },

        
    }
</script>

<style lang="scss" scoped>

</style>