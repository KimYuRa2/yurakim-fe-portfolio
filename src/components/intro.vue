<!-- 첫번째 페이지 : Main -->

<template id="introp">

  <bgImage/>

  <div class="intro_txt">
    <span>소통하는 개발자</span>
    <br>
    <span>프론트엔드</span>
    <br>
    <span>김유라</span>
  </div>
  
</template>


<script>
import bgImage from '@/components/bgImage.vue';

export default{
  components: {
    bgImage,
  }
  
}

</script>


<style scoped>
.intro_txt{
  display:block;
  text-align: left;
  z-index: 3;
}
.intro_txt>span{
  font-size: 66px;
  line-height: 82px;
  margin: 0 auto;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  overflow: hidden;

  opacity:0;
  animation: fadein 2s ease-in-out;
}

/* main 텍스트 한줄씩 나타내기 */
.intro_txt>span:nth-child(1){
  color: transparent;
  -webkit-text-stroke-color: #222;
  -webkit-text-stroke-width: thin;
  animation-fill-mode: forwards;

  /* -webkit-animation-delay: 0.4s; */
  animation-delay: 0.4s;
}
.intro_txt>span:nth-child(3){
  /* -webkit-animation-delay: 1s; */
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.intro_txt>span:nth-child(5){
  /* -webkit-animation-delay: 1.8s; */
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
}

@keyframes fadein{
  /* 페이지 로드 시 투명이었다가 하나씩 나타나기 */
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
