<!-- 두번째 페이지 : about me -->

<template id="aboutp">

  <bgImage/>
 
  <div class="about_div">
    <div class="about_l">
      <div class="about_t">
        ABOUT ME
      </div>

      <div class="about_mid">
        <p>
          안녕하세요
        </p>
        <p>
          <span class="font-white">김유라</span>입니다.
        </p>
      </div>

      <div class="about_mid2">
        소통하며 개발하는 프론트엔드 개발자입니다.
        <br>
        소프트웨어 전공으로 배운 백엔드 지식을 기반으로 함께 소통하며,
        <br>
        열린 사고와 태도를 바탕으로 새로운 것을 알아감에 두려워 하지 않습니다.
        <br>
        사용자의 관점에서 생각하고, 누구나 편하게 이용할 수 있는 웹을 만드는 사람이 되겠습니다.
      </div>

      <div class="about_bottom">
        <div>
          <div class="about_icon aicon1"></div>
          <div class="about_txt">ura3118@naver.com</div> 
        </div>
        <div>
          <div class="about_icon aicon2"></div>
          <div class="about_txt">
            <a href="https://github.com/KimYuRa2">Github</a>
          </div> 
        </div>
        <div>
          <div class="about_icon aicon3"></div>
          <div class="about_txt">010 - 4814 - 3118</div> 
        </div>
      </div>
    </div>

    <!-- skill - vue circle progress bar  -->
    <div class="about_r">
      <div 
        v-if="hover1p" 
        class="skill1_p"
      >
        <CircleProgress 
            :percent="percent" 
            :viewport="true" 
            :show-percent="false" 
            :is-gradient="true" 
            :gradient = "{
              angle: 90,
              startColor: '#fff',
              stopColor: '#ED8B86'
            }"
        />
      </div>

      <div v-if="hover2p" class="skill1_p">
        <CircleProgress 
          :percent="percent2" 
          :viewport="true" 
          :show-percent="false" 
          :is-gradient="true" 
          :gradient = "{
            angle: 90,
            startColor: '#fff',
            stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover3p" class="skill1_p">
        <CircleProgress 
          :percent="percent3" 
          :viewport="true" 
          :show-percent="false" 
          :is-gradient="true" 
          :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover4p" class="skill1_p">
        <CircleProgress :percent="percent4" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover5p" class="skill1_p">
        <CircleProgress :percent="percent5" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover6p" class="skill1_p">
        <CircleProgress :percent="percent6" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover7p" class="skill1_p">
        <CircleProgress :percent="percent7" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover8p" class="skill1_p">
        <CircleProgress :percent="percent8" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover9p" class="skill1_p">
        <CircleProgress :percent="percent9" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <!-- click시 나타나는 이미지 -->
      <div v-if="hover" class="skill1">
        <div class="skillImg img1"></div>
      </div>
      <div v-if="hover2" class="skill1">
        <div class="skillImg img2"></div>
      </div>
      <div v-if="hover3" class="skill1">
        <div class="skillImg img3"></div>
      </div>
      <div v-if="hover4" class="skill1">
        <div class="skillImg img4"></div>
      </div>
      <div v-if="hover5" class="skill1">
        <div class="skillImg img5"></div>
      </div>
      <div v-if="hover6" class="skill1">
        <div class="skillImg img6"></div>
      </div>
      <div v-if="hover7" class="skill1">
        <div class="skillImg img7"></div>
      </div>
      <div v-if="hover8" class="skill1">
        <div class="skillImg img8"></div>
      </div>
      <div v-if="hover9" class="skill1">
        <div class="skillImg img9"></div>
      </div>

`     <!---->`
      <div class="box">
        <div 
          class="ball" 
          :class="{hovering: ishovering}"
        >
            <div class="line1">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover = !hover; hover1p= !hover1p; ishovering= !ishovering;"  
                  @mouseleave="hover=false;hover1p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  HTML &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
  
            <div class="line2">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover2 = !hover2; hover2p= !hover2p; ishovering= !ishovering;" 
                  @mouseleave="hover2=false; hover2p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  CSS &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>

            <div class="line3">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover3 = !hover3; hover3p= !hover3p; ishovering= !ishovering;" 
                  @mouseleave="hover3=false; hover3p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  JavaScript &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
            <div class="line4">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover4 = !hover4; hover4p= !hover4p; ishovering= !ishovering;" 
                  @mouseleave="hover4=false; hover4p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  Vue.js &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
            <div class="line5">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover5 = !hover5; hover5p= !hover5p; ishovering= !ishovering;" 
                  @mouseleave="hover5=false; hover5p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  NODE.js &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
            <div class="line6">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover6 = !hover6; hover6p= !hover6p; ishovering= !ishovering;"  
                  @mouseleave="hover6=false; hover6p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  jQuery &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
            <div class="line7">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover7 = !hover7; hover7p= !hover7p; ishovering= !ishovering;" 
                  @mouseleave="hover7=false; hover7p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  MySQL &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
            <div class="line8">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover8 = !hover8; hover8p= !hover8p; ishovering= !ishovering;" 
                  @mouseleave="hover8=false; hover8p=false; ishovering=false;" 
                  style="display:block;width:100%; height:120%;"
                >
                  Github &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
            <div class="line9">
              <div>
                <a 
                  href="javascript:void(0);" 
                  @click="hover9 = !hover9; hover9p= !hover9p; ishovering= !ishovering;" 
                  @mouseleave="hover9=false; hover9p=false; ishovering=false;"
                  style="display:block;width:100%; height:120%;"
                >
                  Heroku &nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import { reactive } from '@vue/reactivity';
import { ref, onMounted } from "vue";
import bgImage from '@/components/bgImage.vue';
/* vue-circle-progress모듈 사용 */
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";


export default{
  name: 'intro-page',
  data(){ //데이터의 값들을 화면에 표시하기 위함

    return {
      hover:false,
      hover1p:false,
      hover2:false,
      hover2p:false,
      hover3:false,
      hover3p:false,
      hover4:false,
      hover4p:false,
      hover5:false,
      hover5p:false,
      hover6:false,
      hover6p:false,
      hover7:false,
      hover7p:false,
      hover8:false,
      hover8p:false,
      hover9:false,
      hover9p:false,

      stoptest : false,
      ishovering : false
    }    
  },
  components:{
    CircleProgress,
    bgImage,
  },
  setup(){
    /* hover시 퍼센트 progress */
    const percent = ref(85); //html
    const percent2 = ref(95); //css
    const percent3 = ref(87); //js
    const percent4 = ref(70); //vue
    const percent5 = ref(82); //node
    const percent6 = ref(84); //jqeury
    const percent7 = ref(88); //mysql
    const percent8 = ref(86); //github
    const percent9 = ref(92); //heroku

    onMounted(() => {
        setInterval(() => {
          if (percent.value === 0) {
            percent.value = 85;
          } 
        }, 1000);
        setInterval(() => {
          if (percent2.value === 0) {
            percent2.value = percent2;
          } 
        }, 1000);
         setInterval(() => {
          if (percent3.value === 0) {
            percent3.value = 87;
          }
        }, 1000);
         setInterval(() => {
          if (percent4.value === 0) {
            percent4.value = 70;
          } 
        }, 1000);
         setInterval(() => {
          if (percent5.value === 0) {
            percent5.value = 82;
          } 
        }, 1000);
         setInterval(() => {
          if (percent6.value === 0) {
            percent6.value = 84;
          }
        }, 1000);
         setInterval(() => {
          if (percent7.value === 0) {
            percent7.value = 88;
          }
        }, 1000);
         setInterval(() => {
          if (percent8.value === 0) {
            percent8.value = 86;
          }
        }, 1000);
         setInterval(() => {
          if (percent9.value === 0) {
            percent9.value = 92;
          }
        }, 1000);
      });

      return{
        percent,
        percent2,
        percent3,
        percent4,
        percent5,
        percent6,
        percent7,
        percent8,
        percent9,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hovering{
  animation-play-state: paused !important;
  -webkit-animation-play-state: paused !important;
}

.about_div{
  display:flex;
  z-index:5;
  width:100%;
  height:60%;
}
.about_l{
  //overflow: hidden;
  padding-left: 300px;
  box-sizing: border-box;
  width:50%;
  height:100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:auto;
}
.about_t{
  color:#BBBBBB;
  font-size:16px;
}
.about_mid{
  font-size:60px;
}
.about_mid>p{
  line-height: 82px;
}

.about_mid2{
  margin-top: 40px;
  font-size:18px;
}

.about_bottom{
  margin-top:38px;
}
.about_bottom>div:nth-child(2) a{
  color:#000;
  display:block;
}
.about_bottom>div{
  display:flex;
  margin-bottom: 13px;
}
.about_icon{
 
  display: block;
  width:30px;
  height:30px;
}
.aicon1{
  background-image: url("../assets/images/pngwing.com (12).png");
  background-size:100% 100%;
}
.aicon2{
   background-image: url("../assets/images/git-hub.png");
  background-size:100% 100%;
}
.aicon3{
   background-image: url("../assets/images/pngwing.com (13).png");
  background-size:100% 100%;
}
.about_txt{
  font-size: 18px;
  margin-left:13px;
}

.about_r{
   /* background-color:blue; */
   width:50%;
  height:100%;
}

/****** progressbar *******/
.vue3-circular-progressbar{
  width: 400px !important;
  height: 400px !important;
  position:absolute !important;
  top:50% !important;
  right:20% !important;
  transform: translate(0,-50%) !important;
  z-index: 1000 !important;
  opacity: 0.8 !important;
}

/************* skill *************/

.about_r{
    box-sizing: border-box;
    overflow: hidden;
}

.box{
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  right: 20%;
  transform:translate(0,-50%);
  perspective-origin: 50% 50%;
  perspective: 3000px;
}

.ball{
  margin: auto;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  animation: ball3d 20s infinite linear;
}


@keyframes ball3d{
  0%{
    transform: rotateY(360deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}


.ball:after{
  content: " ";
  display: block;
  width: 1px;
  height: 500px;
  transform: translateX(150px) translateY(-100px);
}

.ball > div{
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100%;
}
.ball a{
  color:#ED8B86;
}
.skill1{
  /* html 이미지를 담을 div */
  width:200px;
  height:200px;

  position:absolute;
  top: 50%;
  right: 25%;
  transform:translate(0,-50%);
  display:block;
}
.line1{transform: rotateY(0);}
.line2{transform: rotateY(-36deg);}
.line3{transform: rotateY(-72deg);}
.line4{transform: rotateY(-108deg);}
.line5{transform: rotateY(-144deg);}
.line6{transform: rotateY(-180deg);}
.line7{transform: rotateY(-216deg);}
.line8{transform: rotateY(-252deg);}
.line9{transform: rotateY(-288deg);}

.line1 div{
  position:absolute;
  top:10%;
  right:-35px; 
  transform:translate(0,-50%);
}
.line2 div{
  position:absolute; 
  top:20%; 
  right:-35px; 
  transform:translate(0,-50%);
}
.line3 div{
  position:absolute; 
  top:30%; 
  right:-95px; 
  transform:translate(0,-50%);
}
.line4 div{
  position:absolute; 
  top:40%; 
  right:-65px; 
  transform:translate(0,-50%);
}
.line5 div{
  position:absolute; 
  top:50%; 
  right:-75px; 
  transform:translate(0,-50%);
}
.line6 div{
  position:absolute; 
  top:60%; 
  right:-55px; 
  transform:translate(0,-50%);
}
.line7 div{
  position:absolute; 
  top:70%; 
  right:-55px; 
  transform:translate(0,-50%);
}
.line8 div{
  position:absolute; 
  top:80%; 
  right:-40px; 
  transform:translate(0,-50%);
}
.line9 div{
  position:absolute; 
  top:90%; 
  right:-25px; 
  transform:translate(0,-50%);
}


/* CircleProgress를 담을 div */
.skill1_p{
  display:block;
  z-index: 1000;
}


/* click시 나타나는 이미지 */
.skillImg{
  width:100%;
  height:100%;
  background-size:cover;
}
.skill1 .img1{
  /* html 이미지 */
  background-image:url('../assets/images/about1.png');
}
.skill1 .img2{
  background-image:url('../assets/images/about2.png');
}
.skill1 .img3{
  background-image:url('../assets/images/about3.png');
}
.skill1 .img4{
  background-image:url('../assets/images/about4.png');
}
.skill1 .img5{
  background-image:url('../assets/images/about5.png');
}
.skill1 .img6{
  background-image:url('../assets/images/about6.png');
}
.skill1 .img7{
  background-image:url('../assets/images/about7.png');
}
.skill1 .img8{
  background-image:url('../assets/images/about8.png');
}
.skill1 .img9{
  background-image:url('../assets/images/about9.png');
}        


@media only screen and (max-width: 1600px) {
  .about_l{
  padding-left: 200px;
  }
  
  .box{
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    right: 15%;
    transform:translate(0,-50%);
    perspective-origin: 50% 50%;
    perspective: 3000px;
  }
  .skill1{
    /* html 이미지를 담을 div */
    width:400px;
    height:400px;
    position:absolute;
    top: 50%;
    right: 15%;
    transform:translate(0,-50%);
    display:block;
  }
  .vue3-circular-progressbar{
    width: 400px !important;
    height: 400px !important;
    position:absolute !important;
    top:50% !important;
    right:15% !important;
    transform: translate(0,-50%) !important;
    z-index: 1000 !important;
    opacity: 0.8 !important;
  }

}
</style>