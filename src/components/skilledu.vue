<!-- 세번째 페이지 : skill & edu -->

<template id="skilledup"> 
  <div class="skilledu_div">
    <!-- 왼쪽 div -->
    <div class="skilledu_l">
      <div class="skilledu_t">SKILL & EDU</div>
      <div class="skilledu_mid">
        <p>절대.</p>
        <p>변함없을</p>
        <p class="font-white">약속</p>
      </div>
      <div class="skilledu_mid2">
        이해하고 소통하며
        <br>
        개발과 디자인 공부에 소홀하지 않고
        <br>
        꾸준히 성장하는 사람이 되겠습니다.
      </div>
    </div>

    <!-- 오른쪽 div - skill -->
    <div class="skilledu_r" style="height:100%;">
      <!-- swiper2 -->
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        @renderBullet="c_bullet"
        class="mySwiper2"
      >
        <!--develop-->
        <swiper-slide>
          <div 
            v-if="hover1p" 
            class="bgImages" 
            style="z-index=8;"
          >
            <div class="bg">
              <div class="rotate">
                <span class="bg-img02">
                  <img src="../assets/images/circle_img2.png" alt="bg2">
                </span>
              </div>
            </div>
          </div>

          <div 
            class="skillwrap" 
            @mouseover="hover1p=true;" 
            @mouseleave="hover1p=false;"
          >
            <div class="skill_l">
              <div class="skillText">
                <p class="skilltitle">
                  Develop.
                </p>
                <div class="skillcontent">
                  HTML/CSS/Javascript/jQuery/vue.js/node.js<br>
                  /mysql/mongoDB를 사용하여 개발하며<br>
                  react.js에도 관심이 생겨 공부하고 있습니다.<br>
                  또한 소프트웨어 전공으로 C/ JAVA/ JSP/ 자료구조나 알고리즘 등에 대한
                  전반적인 기술과 지식을 겸비하고 있습니다.
                </div>
                <div class="license_wrap">
                  <!--자격증-->
                  <div :class="{hovering: ishovering}">
                    <div class="license_img"></div>
                    <div class="license_text">정보처리기사 필기(실기 취득 예정)</div>
                  </div>
                  <div>
                    <div class="license_img"></div>
                    <div>컴퓨터활용능력 2급</div>
                  </div>
                  <div>
                    <div class="license_img"></div>
                    <div>워드 프로세서</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="skill_r">
                <div class="skillImg1">
                  <!-- 오른쪽 이미지 -->
                </div>
            </div>
          </div>
        </swiper-slide>

        <!--design-->
        <swiper-slide
         :class="{hovering: ishovering}"
        >
          <div 
            v-if="hover2p" 
            class="bgImages" 
            style="z-index=8;"
          >
            <div class="bg">
              <div class="rotate">
                <span class="bg-img01">
                  <img src="../assets/images/circle_img1.png" alt="bg1">
                </span>
              </div>
            </div>
          </div>

          <div 
            class="skillwrap" 
            @mouseover="hover2p=true;"  
            @mouseleave="hover2p=false;"
          >
            <div class="skill_l">
              <div class="skillText">
                <p class="skilltitle">
                  Design.
                </p>
                <div class="skillcontent">
                  평소 블로그나 다이어리를 꾸미고 정리하는 것이 취미로<br>
                  디자인에 관심이 많습니다.<br>
                  시각적 아름다움과 사용자의 편의성을 갖춘 디자인을 하며<br>
                  포토샵과 일러스트, Figma를 다룹니다.
                </div>
                <div class="license_wrap">
                  <!--자격증--> 
                  <div>
                    <div class="license_ps"></div>
                    <div class="license_text">포토샵 1급</div>
                  </div>
                  <div>
                    <div class="license_illu"></div>
                    <div>일러스트 프로그램 사용</div>
                  </div>
                  <div>
                    <div class="license_fig"></div>
                    <div>Figma 사용</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="skill_r">
                <div class="skillImg2">
                  <!-- 오른쪽 이미지 -->
                </div>
            </div>

          </div>
        </swiper-slide>

        <!--edu-->
        <swiper-slide
          :class="{hovering: ishovering}"
        >
          <div 
            v-if="hover3p" 
            class="bgImages" 
            style="z-index=8;"
          >
            <div class="bg">
              <div class="rotate">
                <span class="bg-img03">
                  <img src="../assets/images/circle_img3.png" alt="bg3">
                </span>
              </div>
            </div>
          </div>
          
          <div 
            class="skillwrap" 
            @mouseover="hover3p=true;"  
            @mouseleave="hover3p=false;"
          >
            <div class="skill_l">
              <div class="skillText">
                <p class="skilltitle">
                  Education.
                </p>
                <div class="skillcontent">
                  2016 .03 - 2023 .02<br>
                  서경대학교 소프트웨어학과 졸업<br>
                  <br>
                  2022. 02 - 2022. 08<br>
                  스마트_뷰(Vue) 활용 프론트엔드 웹개발자 양성과정 수료
                </div>
              </div>
            </div>

            <div class="skill_r">
                <div class="skillImg3">
                  <!-- 오른쪽 이미지 -->
                </div>
            </div>

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
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { computed } from "vue";

export default {
  name: 'skilledu-page',
  data(){
    return{
      hover:false,
      hover1p:false,
      hover2p:false,
      hover3p:false,
      ishovering:false,
      testho:false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = computed( () => {
      return this.mySwiper2;
    });

    
    return {
      modules: [Autoplay, Pagination, Navigation],
      swiper
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hovering{
  background-color:yellow !important;
}
.hovering2{
  background-color:red !important;
}
.skilledu_div{
  display:flex;
  z-index:5;
  width:100%;
  height:100%;
}
.skilltitle{
   font-size: 66px;
  line-height: 82px;
  margin-bottom:40px;
}
.skillcontent{
  color:#6d7177;
   margin-bottom: 40px;
}
.skillwrap{
  
  display:flex;
  text-align:left;
  padding:0 62px;
  box-sizing: border-box;
  width:100%;
  height:50%;

  z-index: 15;
  /* background-color:yellowgreen; */
}
.skill_l{
  width:50%;
  height:100%;
  
}
.skill_r{
  width:50%;
  /* height:100%; */
}
.skillImg1{
  display:block;
  width:100%;
  height:100%;
  background-image:url('../assets/images/iMac_mockup.png');
  background-size:130%;
  background-position: center center;
  background-repeat: no-repeat;
}
.skillImg2{
  display:block;
  width:100%;
  height:100%;
  background-image:url('../assets/images/iMac iPad and iPhone X.png');
  background-size:140%;
  background-position: center center;
  background-repeat: no-repeat;
}
.skillImg3{
  display:block;
  width:100%;
  height:100%;
  background-image:url('../assets/images/pngwing.com.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.license_text{
  line-height:32px;
}
.license_wrap>div{
  display:flex;
}
.license_img{
  width:32px;
  height:32px;
  background-image: url('../assets/images/pngegg.png');
  background-position:center center;
  background-size: 100% 100%;
  margin-right: 7px;
}

.license_ps{
  width:32px;
  height:32px;
  background-image: url('../assets/images/PS3.png');
  background-position:center center;
  background-size: 100% 100%;
  margin-right: 7px;
}
.license_illu{
  width:32px;
  height:32px;
  background-image: url('../assets/images/AI2.png');
  background-position:center center;
  background-size: 100% 100%;
  margin-right: 7px;
}

.license_fig{
  width:32px;
  height:32px;
  background-image: url('../assets/images/Figma4.png');
  background-position:center center;
  background-size: 100% 100%;
  margin-right: 7px;
}
.skilledu_l{
  overflow: hidden;
  padding-left: 200px;
  box-sizing: border-box;
  width:40%;
  height:60%;
  text-align: left;

  display:flex;
  flex-direction: column;
  justify-content: center;
  margin:auto;

}
.skilledu_t{
  color:#BBBBBB;
  font-size:16px;
}
.skilledu_mid{
  font-size:60px;
}
.skilledu_mid>p{
  display: block;
  line-height:82px;
}
.skilledu_mid2{
  margin-top: 40px;
  font-size:18px;
}
.skilledu_r{
   width:60%;
  height:100%;
}

/*scroll container swiper */
#skilledup { height: 100% }

html,
body {
  position: relative;
  height: 100%;
}
/* swiper */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height:100%;
  text-align: center;
  font-size: 18px;
  background: #fff;

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




</style>
