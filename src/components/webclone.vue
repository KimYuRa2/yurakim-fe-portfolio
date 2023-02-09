<template id="webclonepage">

  <bgImage/>

  <div class="webclone_wrap">
    <div class="webclone_left" >
      <div class="web_txt1">
            PORTFOLIO
          </div>
          <div class="web_txt2">
            WEB CLONE
          </div>
    </div>
  
    <div
      class="webclone_right"  
      @mouseover="hovermouse=true;" 
      @mouseleave="hovermouse=false;"
    >
      <swiper
        :slidesPerView="2"
         :navigation="false"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper3"
      >
        <swiper-slide>
          <div 
            class="webclone_sec webimg1" 
            @mouseover="webhover1=true" 
            @mouseleave="webhover1=false"
          >
            <a href="http://fronttest1.dothome.co.kr/sing.html" target="_blank">

              <div class="webclone_name">
                <div 
                  v-if="webhover1" 
                  class="webhover_img"
                >
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                </div>
                <p class="webname_txt1">싱그러운 집</p>
                <div 
                  class="webhover_txt" 
                  v-if="webhover1"
                >
                  HTML / CSS/ JS / jQuery<br>
                  싱그러운 집 반응형 홈페이지 웹클론
                </div>
                <p class="webname_txt2">PC & MOBILE WEB CLONE</p>
              </div>
            </a>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div 
            class="webclone_sec webimg2" 
            @mouseover="webhover2=true" 
            @mouseleave="webhover2=false"
          >
            <a href="http://fronttest1.dothome.co.kr/dae.html" target="_blank">
              <div class="webclone_name">
                <div 
                  v-if="webhover2" 
                  class="webhover_img"
                >
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                </div>
                <p class="webname_txt1">대전문화재단</p>
                <div class="webhover_txt" v-if="webhover2">
                  HTML / CSS/ JS / jQuery<br>
                  대전문화재단 반응형 홈페이지 웹클론
                </div>
                <p class="webname_txt2">PC & MOBILE WEB CLONE</p>
              </div>
            </a>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div 
            class="webclone_sec webimg3" 
            @mouseover="webhover3=true" 
            @mouseleave="webhover3=false"
          >
            <a href="http://fronttest1.dothome.co.kr/pollex.html" target="_blank">
              <div class="webclone_name">
                <div 
                  v-if="webhover3" 
                  class="webhover_img"
                >
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                </div>
                <p class="webname_txt1 white_txt">폴렉스존</p>
                <div 
                  class="webhover_txt  white_txt" 
                  v-if="webhover3"
                >
                  HTML / CSS/ JS / jQuery<br>
                  폴렉스존 반응형 홈페이지 웹클론
                </div>
                <p class="webname_txt2 white_txt">PC & MOBILE WEB CLONE</p>
              </div>
            </a>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </div>
    

  
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";
// import required modules
import { Pagination } from "swiper";
export default {
  name: 'webclone-page',
  data() {

    return {
      webhover1:false,
      webhover2:false,
      webhover3:false,
      hovermouse:false,
      isCursor:true,
      isHovered:true

    };
  },
  props: {
    msg: String
  },
   components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    return {
      modules: [Pagination,Navigation],

    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#webclonepage { height: 100% }
html,
body {
  position: relative;
  height: 100%;
  cursor:none !important;
  /* cursor:url("../assets/images/scrollmouse1.png"), auto; */
}
a{
  cursor: url("../assets/images/80-80.png") 20 30, pointer !important;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height:100%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.webclone_wrap{
  display:flex;
  width:100%;
  height:100%;
}
.webclone_left{
  width:33.333%;
  height:100%;
  background-color: rgba(68, 68, 68,0.4);
  margin:auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  color:#fff;
}
.webclone_right{
  width:66.666%;
  height:100%;
}
.web_txt1{
  font-size: 16px;
}
.web_txt2{
  font-size: 40px;
}
.webclone_sec{
  width:100%;
  height:100%;
 
}
.webimg1>a{
  display:block;
  width:100%;
  height:100%;
  background-image:url('../assets/images/220103_083058_257700p.jpg');
  background-position: 83% center;
  background-size: cover;
  position:relative;
}
.webimg2>a{
  display:block;
  background-image:url('../assets/images/382237 Clean iMac and green background.png');
  background-position: -15% center;
  background-size: cover;
  position:relative;
}
.webimg3>a{
  display:block;
  background-image:url('../assets/images/mc3_img2.jpg');
  background-position: center center;
  background-size: auto 100%;
  position:relative;
}
.webclone_sec>a{
  width:100%;
  height:100%;
  
}
.webclone_sec:hover{
  width:112%;
  height:112%;
  -webkit-transition:1s cubic-bezier(.19, 1, .22, 1);
  -moz-transition: 1s cubic-bezier(.19, 1, .22, 1);
  -ms-transition: 1s cubic-bezier(.19, 1, .22, 1);
  transition : 1s cubic-bezier(.19, 1, .22, 1);
}

.webclone_name{
  text-align:left;
  position:absolute;
  bottom:41px;
  left:57px;
  color:#353535;

  position:fixed;
}
.webclone_sec:hover .webhover_txt{
  transform: translateY(0);
}
.webhover_txt{
  font-size: 15px;
    overflow: hidden;
    -webkit-transition:1s cubic-bezier(.19, 1, .22, 1);
  -moz-transition: 1s cubic-bezier(.19, 1, .22, 1);
  -ms-transition: 1s cubic-bezier(.19, 1, .22, 1);
  transition : 1s cubic-bezier(.19, 1, .22, 1);
  margin-top:28px;
}


.webhover_img{
  width:140px;
  display:flex;
  flex-wrap:wrap;
  margin-bottom:13px;

}
.webhover_img img{
  width:30px;
  height:30px;
  margin : 5px 5px 0 0;
}
.webname_txt1{
  font-size: 40px;
  line-height: 40px;
}
.webname_txt2{
  font-size: 15px;
  margin-top:23px;
}
.white_txt{
  color:#fff;
}



/* cursor */
 /* body{
                cursor: none;
            }

            .cursor_item{
                width: 50px;
                height: 50px;
                background: red;
                position: absolute;
                left: 0;
                top: 0;
                margin-top: -25px;
                margin-left: -25px;
            } */


body { cursor: none !important; }
/* .cursor { 
 background: #639cff; width: 15px;
 height: 15px; border-radius: 100%;
 position: absolute;
                left: 0;
                top: 0;
   width: 15px;
  height: 15px;
   border-radius: 100%; 
   z-index: 20;
  pointer-events: none;

} */

/* .cursor.hovered {  -webkit-transform: scale(3); 
-ms-transform: scale(3); transform: scale(3); } */

.drag { 
  width: 100px;
   height: 100px;
  /*-webkit-transform: scale(6.66); -ms-transform: scale(6.66);
 transform: scale(6.66);  */
 /* background-image: url("../assets/images/scrollmouse1.png");
 background-repeat: no-repeat; background-size: cover; */
 }

</style>
