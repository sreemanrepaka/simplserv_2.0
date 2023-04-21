
  <template>

    <q-layout view="lHh lpr lFf">
    <q-page-container>
    <q-page style="margin-top: -60px">
      <section class="heroSection bg-primary">
        <div class="heroSection__content container q-mb-xl">
          <div class="row full-width q-mb-xl">
            <div class="col-12 col-md-6 vertical-middle self-center">
              <h2 class="text-h3 text-white text-weight-medium fredoka">WELCOME TO <span id="animated-text">Simplserv.</span></h2>
              <h4 class="text-h5 text-white">Your one-stop-shop for all your household needs!</h4>
              <q-btn
                class="text-black q-ma-md"
                unelevated
                color="white"
                label="Login"
                to="/login"
                
                
                
               
              />
              <q-btn
                class="text-black"
                unelevated
                color="white"
                label="Register"
                to="/register"
                
               
              />
              
            </div>
            <div class="col-0 col-md-6">
              <img
                :style="($q.screen.md || $q.screen.lg || $q.screen.xl) ? 'width: 550px; max-width: fit-content;' : 'width: 100%; max-width: 100%;'"
                class="responsive" src="../assets/simplserv_pic.jpeg">
            </div>
          </div>
        </div>
        
        <div class="waves">
          
          <svg class="waves__svg" preserveAspectRatio="none" shape-rendering="auto" viewBox="0 24 150 28"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g class="parallax">
              <use fill="rgba(255,255,255,0.7)" x="48" xlink:href="#gentle-wave" y="0"></use>
              <use fill="rgba(255,255,255,0.5)" x="48" xlink:href="#gentle-wave" y="3"></use>
              <use fill="rgba(255,255,255,0.3)" x="48" xlink:href="#gentle-wave" y="5"></use>
              <use fill="rgba(255,255,255,1)" x="48" xlink:href="#gentle-wave" y="7"></use>
            </g>
          </svg>
        </div>
      </section>
      <div class="text-center text-h4 q-pa-lg  " >Our Services</div>
          <div class="row " >
    
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

  
  <script setup>
  

  const features = [
    {
      icon: "fas fa-check",
      label: "Feature 1"
    },
    {
      icon: "fas fa-check",
      label: "Feature 2"
    },
    {
      icon: "fas fa-check",
      label: "Feature 3"
    }
  ];
  </script>
  
  <style scoped>
  .heroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    position: relative;
    overflow: hidden;
  }
  .waves {
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
  }
  .heroSection__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 1;
  }
  .heroSection__title {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

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