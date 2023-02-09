<template>
  <!-- 사이드메뉴 텍스트 -->
  <div class="side_wrap">
    <ul>
      <li 
        v-for="(sidemenu, i) in sidemenus"
        :key="i"
      >
        <a 
          ref="sidebar" 
          class="sidetext" 
          :class=" (i+1) === (cu_p) ? 'side_acti' : '' "
          href="" 
          v-html="sidemenu"
        ></a>
      </li>
    </ul>
  </div>

  <!-- 페이지 스와이퍼 -->
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :autoHeight="true"
    :modules="modules"
    :options="swiperOption"
    @slideChange="slideChangeTransitionStart"
    ref="mySwiper"
    class="mySwiper"
  >
    <swiper-slide style="overflow:hidden;"><intro></intro></swiper-slide>
    <swiper-slide style="overflow:hidden;"><about></about></swiper-slide>
    <swiper-slide style="overflow:hidden;"><skilledu></skilledu></swiper-slide>
    <swiper-slide style="overflow:hidden;"><webclone></webclone></swiper-slide>
    <swiper-slide style="overflow:hidden;"><project></project></swiper-slide>
    <swiper-slide style="overflow:hidden;"><contact></contact></swiper-slide>
  </swiper>

  
  <div class="bottom_page">
    <div>
      <span id="bottomtext">
        {{ cu_p }}
      </span>
      / 
      <span :class="bottomtext">
        6
      </span>
    </div>
  </div>

</template>

<script>
import intro from "@/components/intro.vue";
import about from "@/components/about.vue";
import skilledu from "@/components/skilledu.vue";
import webclone from "@/components/webclone.vue";
import project from "@/components/project.vue";
import contact from "@/components/contact.vue";
import { ref, computed } from "vue";
/* swiper */
import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper Vue.js components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";// import required modules



export default {
  name: "App",
  data() {
    return {
      bottomtext : 'bottomtext',
      sidetext:'sidetext',
      visible: false,
      scTimer: 0,
      scY: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    intro,
    about,
    skilledu,
    webclone,
    project,
    contact,
  },
  setup() {
    const cu_p = ref(1); // 현재페이지
    const sidemenus = [ //사이드메뉴 텍스트
      "MAIN",
      "ABOUT ME",
      "SKILL & EDU",
      "WEB CLONE",
      "PROJECT",
      "CONTACT ME"
    ];
    

    /* swiper */
    const mySwiper = ref("");

    const swiper = computed( () => {
      return this.mySwiper;
    });

    const handleScroll = () => {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
    };
    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel",function(event){
       if (event.deltaY < 0) {
        mySwiper.value.mousewheel.enable();
      }
    });

    /* 슬라이드 바뀔때마다 실행 */
    const slideChangeTransitionStart = (index) => {
      let pageIdx = index.activeIndex; // 현재 슬라이드 인덱스번호      
      cu_p.value = pageIdx + 1;// cu_p : 현재페이지 번호
    };



    


    return {
      sidemenus,
      modules: [Mousewheel, Pagination],
      slideChangeTransitionStart,
      mySwiper,
      swiper,
      cu_p,
      handleScroll,
      toTop,

    };
  },
};
</script>

<style>
/* 폰트 */
@font-face {
  font-family: "Pretendard-Bold";
  src: local("Pretendard-Bold"),
    url("../assets/fonts/Pretendard-Bold.otf") format("truetype");
}
/* css */
@import "../assets/css/reset.css";
@import "../assets/css/swiper.css";
@import "../assets/css/bgImg.css";
@import "../assets/css/common.css";



#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: "Pretendard-Bold", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}



/* header */
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none;
  transform: translate3d(0px, 0px, 0px);
  padding: 50px 20px 0 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.h_logo {
  width: 50px;
  height: 63px;
}
.h_logo > a {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/free-icon-puzzle-786771.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.h_menu {
  width: 45px;
  height: 63px;
  box-sizing: border-box;
}
.h_menu > a {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.h_menu span {
  display: block;
  background-color: #000;
  width: 100%;
  height: 2px;
  margin-top: 10px;
}

/* 현재페이지 */
.bottom_page {
  position: absolute;
  z-index: 3;
  right: 44px;
  bottom: 50px;
  display: block;
  font-size: 18px;
  color: #000;
}

/* sidebar */
.side_wrap {
  position: absolute;
  z-index: 3;
  right: 44px;
  top: 50%;
  transform: translate(0, -50%);
  display: block;
}
.side_wrap li {
  text-align: right;
  margin-top: 0px;
}
.side_wrap a {
  display: block;
  font-size: 15px;
  color: #6d7177;
  opacity: 0;
}

.sidetext{
    color:#000;
    font-size:20px;
    display: block;
}
.side_acti {
  /* sidemenu 현재페이지 텍스트 보이게 하기 */
  opacity: 1 !important;
}

.bottomtext{
  color: #999;
}


</style>
