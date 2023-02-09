<template id="projectpage">


<!-- <div :class="[{cursor2:isCursor}, {hovered2:isHovered}, {'drag': hovermouse2 === true}]"></div> -->
<div class="project_wrap">
    <div class="project_right"  @mouseover="hovermouse2=true;" @mouseleave="hovermouse2=false;">
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
            class="project_sec projectimg1" 
            @mouseover="projecthover1=true" 
            @mouseleave="projecthover1=false"
          >
            <a href="https://seomunapp.fly.dev/" target="_blank">

              <!--1229 깜빡임오류 해결-->
              <div class="project_name">
                <div 
                  v-if="projecthover1" 
                  class="projecthover_img"
                >
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                  <img src="../assets/images/node.png">
                  <img src="../assets/images/about7.png">
                  <img src="../assets/images/flyio.png">
                  <img src="../assets/images/about8.png">
                </div>
                <p class="projectname_txt1 white_txt">서문시장 야시장</p>
                <div class="projecthover_txt white_txt" v-if="projecthover1">
                  HTML / CSS / JS / jQuery<br>
                  node.js / mysql / fly.io / github <br>
                  서문시장 야시장 반응형 홈페이지 리뉴얼
                </div>
                <p class="projectname_txt2 white_txt">
                  PC & MOBILE WEBSITE RENEWAL<br>
                  ( DESIGN / DEVELOP )
                </p>
              </div>
            </a>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="project_sec projectimg2" @mouseover="projecthover2=true" @mouseleave="projecthover2=false">
            <a href="https://frontend-teamproject-heynature.fly.dev/" target="_blank">
              <div class="project_name">
                <div v-if="projecthover2" class="projecthover_img">
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                  <img src="../assets/images/node.png">
                  <img src="../assets/images/about7.png">
                  <img src="../assets/images/flyio.png">
                  <img src="../assets/images/about8.png">
                </div>
                <p class="projectname_txt1 white_txt">헤이네이처</p>
                <div class="projecthover_txt white_txt" v-if="projecthover2">
                  HTML / CSS/ JS / jQuery /<br>
                  node.js / mysql / fly.io / github<br>
                  팀프로젝트 - 헤이네이처 반응형 홈페이지 리뉴얼
                </div>
                <p class="projectname_txt2 white_txt">
                  PC & MOBILE WEBSITE RENEWAL<br>
                  ( DESIGN / DEVELOP )
                </p>
              </div>
            </a>
          </div>
        </swiper-slide>

<!-- 프로젝트 추가 - 헤이네이처ver2-->
        <swiper-slide>
          <div class="project_sec projectimg4" @mouseover="projecthover4=true" @mouseleave="projecthover4=false">
            <a href="https://heynature.fly.dev/" target="_blank">
              <div class="project_name">
                <div v-if="projecthover4" class="projecthover_img">
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                  <img src="../assets/images/node.png">
                  <img src="../assets/images/about7.png">
                  <img src="../assets/images/flyio.png">
                  <img src="../assets/images/about8.png">
                  <img src="../assets/images/s3.png">
                </div>
                <p class="projectname_txt1">헤이네이처 2.0</p>
                <div class="projecthover_txt" v-if="projecthover4">
                  HTML / CSS/ JS / jQuery /<br>
                  node.js / mysql / fly.io / github<br>
                  AWS S3<br>
                  개인프로젝트 - 헤이네이처 쇼핑몰 기능 구현<br>
                  
                </div>
                <p class="projectname_txt2">
                  Shopping Mall (PC & MOBILE) <br>
                  ( DESIGN / DEVELOP )
                </p>
              </div>
            </a>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="project_sec projectimg3" @mouseover="projecthover3=true" @mouseleave="projecthover3=false">
            <a href="" target="_blank">
              <div class="project_name">
                <div v-if="projecthover3" class="projecthover_img">
                  <img src="../assets/images/html.png">
                  <img src="../assets/images/css.png">
                  <img src="../assets/images/javascript.png">
                  <img src="../assets/images/about6.png">
                  <img src="../assets/images/about4.png">
                  <img src="../assets/images/node.png">
                  <img src="../assets/images/about7.png">
                  <img src="../assets/images/flyio.png">
                  <img src="../assets/images/about8.png">
                </div>
                <p class="projectname_txt1">포트폴리오</p>
                <div class="projecthover_txt" v-if="projecthover3">
                  HTML / CSS / JS / jQuery / Vue.js<br>
                  node.js / mysql / fly.io / github <br>
                  포트폴리오 페이지 제작
                </div>
                <p class="projectname_txt2">
                  PORTFOLIO SITE CREATION<br>
                  ( DESIGN / DEVELOP )
                </p>
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>

      <div class="project_left" >
        <div class="project_txt1">
            PORTFOLIO
        </div>
        <div class="project_txt2">
          PROJECT
        </div>
        <h1 style="display:none"></h1>
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
  name: 'project-page',
  data() {

    return {
      projecthover1:false,
      projecthover2:false,
      projecthover3:false,
      projecthover4:false,
      hovermouse2:false,
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
#projectpage { height: 100% }
html,
body {
  position: relative;
  height: 100%;
  cursor:default !important;
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


.project_wrap{
  display:flex;
  width:100%;
  height:100%;
}
.project_left{
  width:33.333%;
  height:100%;
  background-color: rgba(68, 68, 68,0.4);
  margin:auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  color:#fff;
}
.project_right{
  width:66.666%;
  height:100%;
}
.project_txt1{
  font-size: 16px;
}
.project_txt2{
  font-size: 40px;
}
.project_sec{
  width:100%;
  height:100%;
 
}
.projectimg1>a{
  display:block;
  width:100%;
  height:100%;
  background-image:url('../assets/images/seomun2.png');
  background-position: 17% 20%;
  background-size: auto 100%;
  position:relative;
}
.projectimg2>a{
  display:block;
  background-image:url('../assets/images/2f595f805e6a41ef830641f046c4658c_20190715121608.jpg');
  background-position: 35% center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  position:relative;
}
.projectimg3>a{
  display:block;
  background-image:url('../assets/images/pngwing.com.png');
  background-position: -90% center;
  background-size: auto 80%;
  background-repeat: no-repeat;
  position:relative;
}
.projectimg4>a{
  display:block;
  background-image:url('../assets/images/shopping-bag-perspective.png');
  background-position: 35% center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  position:relative;
}
.project_sec>a{
  width:100%;
  height:100%;
  
}
.project_sec:hover{
  width:112%;
  height:112%;
  -webkit-transition:1s cubic-bezier(.19, 1, .22, 1);
  -moz-transition: 1s cubic-bezier(.19, 1, .22, 1);
  -ms-transition: 1s cubic-bezier(.19, 1, .22, 1);
  transition : 1s cubic-bezier(.19, 1, .22, 1);
}

.project_name{
  text-align:left;
  position:absolute;
  bottom:41px;
  left:57px;
  color:#353535;

  position:fixed;
}
.project_sec:hover .projecthover_txt{
  transform: translateY(0);
}
.projecthover_txt{
  font-size: 15px;
    overflow: hidden;
    -webkit-transition:1s cubic-bezier(.19, 1, .22, 1);
  -moz-transition: 1s cubic-bezier(.19, 1, .22, 1);
  -ms-transition: 1s cubic-bezier(.19, 1, .22, 1);
  transition : 1s cubic-bezier(.19, 1, .22, 1);
  margin-top:28px;
}


.projecthover_img{
  width:140px;
  display:flex;
  flex-wrap:wrap;
  margin-bottom:13px;

}
.projecthover_img img{
  width:30px;
  height:30px;
  margin : 5px 5px 0 0;
}
.projectname_txt1{
  font-size: 40px;
  line-height: 40px;
}
.projectname_txt2{
  font-size: 15px;
  margin-top:23px;
}
.white_txt{
  color:#fff;
}



/* cursor */


body { cursor: none !important; }


/* .cursor.hovered {  -webkit-transform: scale(3); 
-ms-transform: scale(3); transform: scale(3); } */

.drag { 
  width: 100px;
   height: 100px;
  /*-webkit-transform: scale(6.66); -ms-transform: scale(6.66);
 transform: scale(6.66);  */
 /* background-image: url("../assets/images/scrollmouse1.png");
 background-repeat: no-repeat; background-size: cover;  */
}
</style>
