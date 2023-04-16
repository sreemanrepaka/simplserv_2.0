<template>
    <q-page class="bg-secondary flex flex-center">
        <div>
            <div class="row" id="id_about_us">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center">About Us
                <br>
                <span
                  class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </h5>
            </div>
          </div>
          <div class="row text-center flex flex-center">
            <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
              <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
                <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                  <q-img
                    src="/statics/images/about_1.jpg"
                  />
  
                  <q-card-section>
                    <div class="text-overline text-orange-9">Overline</div>
                    <div :class="about_heading_1" :style="'color: ' + about_heading_color_1" class="about_heading_1 text-h6 q-mt-sm q-mb-xs">OFFICE PHILOSOPHY</div>
                    <div class="text-caption text-grey-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
                <q-card @mouseover="hoverOver(2)" @mouseout="hoverOutTimeout(2)" :style="'color: ' + about_heading_color_2" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                  <q-img
                    src="/statics/images/about_2.jpg"
                  />
  
                  <q-card-section>
                    <div class="text-overline text-orange-9">Overline</div>
                    <div :class="about_heading_2" :style="'color: ' + about_heading_color_2" class="text-h6 q-mt-sm q-mb-xs">OFFICE MISSION</div>
                    <div class="text-caption text-grey-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
                <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                  <q-img
                    src="/statics/images/about_3.jpg"
                  />
  
                  <q-card-section>
                    <div class="text-overline text-orange-9">Overline</div>
                    <div :class="about_heading_3" :style="'color: ' + about_heading_color_3" class="text-h6 q-mt-sm q-mb-xs">OFFICE VALUE & RULES</div>
                    <div class="text-caption text-grey-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <br>
          <br>
          <div style="background: #f7f7f7" id="id_services">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center">Our Services
                  <br>
                  <span
                    class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </h5>
              </div>
            </div> 
            <div class="q-pa-xl">       
              <div class="row q-col-gutter-sm ">
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <q-item class="box-shadow q-pa-none q-ml-xs ">
                    <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                      <q-icon name="compare_arrows" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label class="text-h6 text-grey-9 text-uppercase">Blockchain</q-item-label>
                      <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <q-item class="box-shadow q-pa-none q-ml-xs">
                    <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                      <q-icon name="web" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label class="text-h6 text-grey-9 text-uppercase">Web Design</q-item-label>
                      <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                    <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                      <q-icon name="fab fa-wordpress" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label class="text-h6 text-grey-9 text-uppercase">Wordpress</q-item-label>
                      <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div class="row q-col-gutter-sm q-mt-lg">
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <q-item class="box-shadow q-pa-none q-ml-xs ">
                    <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                      <q-icon name="settings" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label class="text-h6 text-grey-9 text-uppercase">DevOps</q-item-label>
                      <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <q-item class="box-shadow q-pa-none q-ml-xs">
                    <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                      <q-icon name="fas fa-database" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label class="text-h6 text-grey-9 text-uppercase">Big Data</q-item-label>
                      <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                    <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                      <q-icon name="dynamic_feed" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label class="text-h6 text-grey-9 text-uppercase">AI</q-item-label>
                      <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </div>          
          </div>
  <div class="quote" id="id_testimonial">
  <div style="background-color: #000000ad !important;">
  <q-carousel
        v-model="review_slide"
        swipeable
        animated
        infinite
        autoplay
        arrows
        navigation
        padding
        navigation-position="bottom"
        class="text-white full-height bg-transparent q-mx-xl"
      >
        <q-carousel-slide style="padding-bottom: 140px" name="style" class="column no-wrap flex-center">
          <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color" src="/statics/images/team_1.jpg" width=150 height=150>
      <div class="q-mt-md text-h6 text-center">
         <span :style="'color:'+theme_color">John Doe</span><br><span class="text-overline">Organization Founder</span>
      </div>
          <div class="q-mt-md text-h6 text-center">
            Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut<br>
  labore et dolore magna aliqua.
          </div>
        </q-carousel-slide>
        <q-carousel-slide style="padding-bottom: 140px" name="tv" class="column no-wrap flex-center">
          <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color" src="/statics/images/team_2.jpg" width=150 height=150>
      <div class="q-mt-md text-h6 text-center">
         <span :style="'color:'+theme_color">John Doe</span><br><span class="text-overline">Lead Developer</span>
      </div>
          <div class="q-mt-md text-h6 text-center">
            Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut<br>
  labore et dolore magna aliqua.
          </div>
        </q-carousel-slide>
        <q-carousel-slide style="padding-bottom: 140px" name="layers" class="column no-wrap flex-center">
          <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color" src="/statics/images/team_3.jpg" width=150 height=150>
      <div class="q-mt-md text-h6 text-center">
         <span :style="'color:'+theme_color">John Doe</span><br><span class="text-overline">Product Owner</span>
      </div>
          <div class="q-mt-md text-h6 text-center">
            Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut<br>
  labore et dolore magna aliqua.
          </div>
        </q-carousel-slide>
      </q-carousel>
  </div>
  </div>
          <div class="row" id="id_team">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center">Our Team
                  <br>
                  <span
                    class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </h5>
              </div>
            </div>        
            <div class="row text-center flex flex-center">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-px-xl" style="width:100%;overflow:auto;">
                <q-carousel
                v-model="team_slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
            infinite
                autoplay
                control-color="primary"
                navigation
                padding
                height="300px"
                class="rounded-borders"
              >
                <q-carousel-slide v-for="val in [1,2,3]" :key="val" :name="val" class="column no-wrap">
                  <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                    <span v-for="index in 4" :key="index">
                    <q-flashcard :no-hover="hover" :style="team_style">
                      <q-flashcard-section transition="['nudge-out', 'fade-out']" :active="active">
                        <img :src="'/statics/images/team_'+index+'.jpg'" width=260 height=263>
                      </q-flashcard-section>
                      <q-flashcard-section transition="fade-in" class="fit" :active="active">
                        <div class="fit" :style="background_style"></div>
                        <q-flashcard-section transition="shake-down" class="text-center team-header" :active="active">
                          JOHN DOE
                        </q-flashcard-section>
                        <q-flashcard-section transition="spin-in" class="team-text" :active="active">
                          Founder and Director
                        </q-flashcard-section>
                        <q-flashcard-section style="padding-bottom: 50px" transition="slide-up-in" class="fit flex justify-center items-end"
                                             :active="active">
                          <q-btn class="q-mr-md" :style="'color:'+theme_color" style="background-color:white" round
                                 icon="card_giftcard"/>
                          <q-btn :style="'color:'+theme_color" style="background-color:white" round icon="link"/>
                        </q-flashcard-section>
                      </q-flashcard-section>
                    </q-flashcard>
                    </span>
                  </div>
                </q-carousel-slide>
              </q-carousel>
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