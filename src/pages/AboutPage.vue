<template>
    <q-page class="bg-secondary flex flex-center">
      <section class="about q-mb-xl q-py-xl">
        <div class="container">
          <div class="row">
            <div class="col-0 col-md-6">
              <img
                :style="($q.screen.md || $q.screen.lg || $q.screen.xl) ? 'width: 600px; max-width: fit-content;' : 'width: 100%; max-width: 100%;'"
                class="responsive" src="../assets/about.svg">
            </div>
            <div class="col-12 col-md-6 self-center text-right q-pa-xl">
              <h2 class="text-h3 text-weight-thin fredoka">About us</h2>
              <p class="text-subtitle1 text-justify">
                When college students first go out into the real world once their time in school ends, they not only face the academic challenges, but also have to face many real world challenges for the first time. Starting from renting an apartment or joining a hostel, buying groceries, getting a healthy diet of food from the mess on a daily basis, arranging a maid and buying furniture to the small but essential things such as buying household items, renting transportation for daily travel and calling a handyperson to fix things in the house.<br><br>

SimplServ. is a one stop for all the problems faced on a daily basis. Although SimplServ. is aimed towards college students, it will be free to use by everyone, starting from a family to office goers just moving in to a new place. All they have to do is enter basic details and their location, and we will provide them with the contact details of their required services around their vicinity.</p>
            </div>
          </div>
        </div>
      </section> 


  
        
 
          <div class="row" id="id_team">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-h3 text-weight-thin fredoka q-ma-none">Our Team</h5> <br><br>
                <div class="text-h6 text-weight-light">
                  Sreeman Repaka <br> 
                  Sneh Patel <br>
                  Sukhmeet Singh Bawa <br>
                  <br><br>
                </div>
               
              </div>
            </div>        
           
                    
            
 
          

       
    

  </q-page>

</template>

<script>
    export default {
        name:'AboutPage',
    }
</script>

<style lang="scss" scoped>

</style>