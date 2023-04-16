<template>
    <q-layout view="lHh lpr lFf">
      
      <q-page-container>
        <q-page>
          
          <q-carousel
            
            v-model="slide"
            navigation
            infinite
            control-color="white"
            height="639px"
          >
            <q-carousel-slide class="q-pa-none" :name="1" >
  <div class="full-height full-width bg-primary q-pa-xl " >

    <br><br><br><br>
    
    <div class="row">
    <div class="col offset-1" >

      <div class="custom-caption">
                <div class="text-h2 main_line animation_2 text-weight-bold text-center" style="color:white;">WELCOME TO <span id="animated-text">Simplserv.</span></div><br><br><br>
                <div class="text-h4 animation_1 text-center" style="color:white">Your one-stop-shop for all your household needs! </div><br><br><br>
      </div>
        

  <div class="animation_2 flex flex-center">
    
      <q-btn :style="'color:'+ theme_color +'; background: white; width:200px'" label="Login" to="/login"  rounded class="q-ma-md q-pa-sm" />
      <q-btn :style="'color:'+ theme_color +'; background: white; width:200px'" label="Signup" to="/register"  rounded class="q-pa-sm"/>

  </div>
      
    </div>
    <div class="col"> Pic</div>
    </div>


  
  </div>

 
            </q-carousel-slide>

            
            
          </q-carousel>
          <div class="quote">
            <div class="q-pt-xl full-width full-height flex flex-center" style="background-color: white !important;">
              <q-card class="my-card q-ma-lg q-pa-md">
              <q-card-section>
              <h4 class="text-black text-center">Get things done with ease, <br>Effortlessly find reliable service providers for your everyday needs!
 
              </h4>

        
              </q-card-section>
              </q-card>
              
              
            </div>
          </div>
          <div class="text-center text-h4 q-pa-lg text-white bg-primary" >Our Services</div>
          <div class="row bg-primary" >
    
            <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
              
              <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
  
  
                <q-card-section>
                  <q-icon size="110px" name="ballot" :style="'color:'+theme_color"/>
                  <div class="text-h6">Household Services</div>
  
                </q-card-section>
  
                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
              <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
  
  
                <q-card-section>
                  <q-icon size="110px" name="view_comfy" :style="'color:'+theme_color"/>
                  <div class="text-h6">Maintenance Services</div>
  
                </q-card-section>
  
                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
              <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
  
  
                <q-card-section>
                  <q-icon size="110px" name="people" :style="'color:'+theme_color"/>
                  <div class="text-h6">Grocery and Food services</div>
  
                </q-card-section>
  
                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </q-card-section>
              </q-card>
            </div>

            
  
            <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
              <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
  
  
                <q-card-section>
                  <q-icon size="110px" name="people" :style="'color:'+theme_color"/>
                  <div class="text-h6">Handymen</div>
  
                </q-card-section>
  
                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </q-card-section>
              </q-card>
            </div>
          </div>
          
          
          

          <q-toolbar class="flex flex-center text-white" style="background-color: #1c1b21;" :style="'border-top: 2px solid '+ theme_color">
             <div class="q-pa-sm q-gutter-sm">
          <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="fab fa-twitter" />
          <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="fab fa-github" />
              <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" icon="email" />
          <q-btn round type="a" href=""
                       :style="'background:'+ theme_color +'; color: white !important;'" glossy text-color="black" icon="fas fa-heart" />
        </div>
          </q-toolbar>
  
        </q-page>
      </q-page-container>
    </q-layout>
  </template>
  
  <style ></style>
  
  <script>

    import { VueTyper } from 'vue-typer'
    
    import { scroll } from 'quasar'
    const { getScrollTarget, setScrollPosition } = scroll
      
 
      export default {


          data() {
              return {
                  slide: 1,
                      review_slide: 'style',
                  selected_tab: 't_0',
                  team_slide: 1,
                  bg_color: 'bg-primary',
                  hover: false,
                  active: false,
                  theme_color: "primary",
                  background_style: 'background-color:rgba(0, 163, 82, 0.7);',
                  about_heading_1: [],
                  about_heading_2: [],
                  about_heading_3: [],
                  about_heading_color_1: '#424242',
                  about_heading_color_2: '#424242',
                  about_heading_color_3: '#424242'
              }
          },
          computed: {
              style() {
                  return {
                      width: '340px',
                      height: '263px',
                      backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
                      textAlign: 'center',
                      boxShadow: '1px 1px 2px #e6e6e6',
                      display: 'inline-block'
                  }
              },
              team_style() {
                  return {
                      width: '260px',
                      height: '263px',
                      backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
                      textAlign: 'center',
                      boxShadow: '1px 1px 2px #e6e6e6',
                      display: 'inline-block'
                  }
              }
          },
          methods: {
            scrollToElement (id) {
              let el = document.getElementById(id)
              const target = getScrollTarget(el)
              const offset = el.offsetTop + 3
              const duration = 900
              setScrollPosition(target, offset, duration)
            },
              changeBgColor() {
                  this.theme_color = this.bg_color;
                  this.background_style = 'background-color:' + this.bg_color.split(')')[0] + ',0.7)';
              },
              hoverOver: function(index) {
                this['about_heading_color_' + index] = this.theme_color;
                this['about_heading_' + index] = ['animated', 'bounceIn'];              
              },
              hoverOutTimeout: function(index) {
                this['about_heading_color_' + index] = '#424242';
                setTimeout(() => {
                  this['about_heading_' + index] = [];                
                }, 1000);              
              },
          }
      }
  </script>
  
  <style  scoped>

  #animated-text {
    position: relative;
  }

  #animated-text:after{
    content:"";
    position: absolute;
    left: 0;
    height: 100%;
    border-left: 2px solid white;
    right: -2px;
    background-color: #2e3a4f;
    animation: 3s textType;
    animation-iteration-count: infinite;
    animation-timing-function: steps(10);
    animation-fill-mode: backwards;


  }

  @keyframes textType{
    0%{
      left: 0;
    }
    50%{
      left: 100%;
    }
    100%{
      left: 0; 
    }

  
  }

 
  </style>