<template>
  <!-- <div class="bgImages">
    <div class="bg">
      <div class="rotate">
        <span class="bg-img01">
          <img src="../assets/images/circle_img1.png" alt="bg1">
        </span>
        <span class="bg-img02">
          <img src="../assets/images/circle_img2.png" alt="bg2">
        </span>
        <span class="bg-img03">
          <img src="../assets/images/circle_img3.png" alt="bg3">
        </span>
      </div>
    </div>
  </div> -->
  <bgImage/>



  <div class="footer_wrap">
    <div class="footer_e">
      <div class="footer_title">CONTACT ME</div>
      
      <div class="footer_content">

          <div>
            <div class="footer_icon ficon1"></div>
            <div class="footer_txt">ura3118@naver.com</div> 
          </div>

          <div>
            <div class="footer_icon ficon2"></div>
            <div class="footer_txt">010 - 4814 - 3118</div> 
          </div>

          <div>
            <div class="footer_icon ficon3"></div>
            <div class="footer_txt">
              <a href="https://github.com/KimYuRa2">Github</a>
            </div> 
          </div>

          <div class="footer_bottom">
            © 2022. Kim Yu Ra. All rights reserved.
          </div>

      </div>


    </div>
  </div>
</template>

<script>
import bgImage from '@/components/bgImage.vue';
export default {
  name: 'contact-page',
  components: {
    bgImage,
  },
  props: {
    msg: String
  }
}
</script>


<style scoped>
  .footer_wrap{
    width:100%;
    height:100%;
    padding: auto 57px !important;
    /* background-color:#393939; */
    position:relative;
    
    /* display:flex;
    flex-direction: column;
    justify-content: center; */
  }
   .footer_e{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
   }
  .footer_title{
    color:#fff;
    font-size:40px;
    margin-bottom:30px;
  }
  .footer_content{
  }
  .footer_content>div{
    display:flex;
    margin-bottom:7px;

  }
    .footer_content>div:nth-child(3){
      margin-bottom: 20px;
  }
    .footer_content>div>div:first-child{
    display:flex;
    margin-right:13px;
    
  }
  .footer_icon{
    width:30px;
    height:30px;
        background-position:center center;
    background-repeat:no-repeat;
    background-size:cover;
  }
  .ficon1{
    background-image:url('../assets/images/pngegg (3).png');
  }
  .ficon2{
    background-image:url('../assets/images/pngegg (4).png');
  }
  .ficon3{
    background-image:url('../assets/images/pngegg (5).png');
  }
  .footer_txt{
    color:#fff;
    font-size:20px;
    -webkit-text-stroke-color: #222;
    -webkit-text-stroke-width: thin;
  }
    .footer_txt>a{
    color:#fff;
    font-size:20px;
      -webkit-text-stroke-color: #222;
    -webkit-text-stroke-width: thin;
  }
  .footer_bottom{
    white-space: nowrap;
    color:#fff;
  }
</style>
