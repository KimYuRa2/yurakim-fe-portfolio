<template>

  <div class="p_wrap">
    <div class="p_title">
      <h2 class="ct_m">WEBCLONE</h2>
    </div>

    <div class="p_box">
      <div class="p_b_title">
        WEBCLONE
      </div>

      <!--싱그러운집-->
      <div class="p_b_wrap">
        <div class="p_b_content">
          <div class="content_title"> 
            싱그러운집
          </div>
          <div class="content_c">
            <ul class="content_ul">
              <li>
                <span class="half-highlight">Project</span>
                <span class="r_span">싱그러운집 홈페이지 웹클론</span>
              </li>
              <li>
                <span class="half-highlight">Duration</span>
                <span class="r_span">8 days</span>
              </li>
              <li>
                <span class="half-highlight">Technologies</span>
                <span class="r_span">  Javascript / jQuery / HTML5 / CSS3 </span>
              </li>
              <li>
                <span class="half-highlight">URL</span>
                <span class="r_span">
                  <a href="http://fronttest1.dothome.co.kr/sing.html" target="_blank">
                    http://fronttest1.dothome.co.kr/sing.html
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!--이미지-->
        <div
          class="cpl_pic ani1" 
          style=""
        >
					<div class="cplp_info">
              VIEW
              <a href="http://fronttest1.dothome.co.kr/sing.html"></a>
					</div>
				</div>
      </div>

      <!--대전문화-->
      <div class="p_b_wrap">
        <div class="p_b_content">
          <div class="content_title"> 
            대전문화재단
          </div>
          <div class="content_c">
            <ul class="content_ul">
              <li>
                <span class="half-highlight">Project</span>
                <span class="r_span">대전문화재단 홈페이지 웹클론</span>
              </li>
              <li>
                <span class="half-highlight">Duration</span>
                <span class="r_span">8 days</span>
              </li>
              <li>
                <span class="half-highlight">Technologies</span>
                <span class="r_span">  Javascript / jQuery / HTML5 / CSS3 </span>
              </li>
              <li>
                <span class="half-highlight">URL</span>
                <span class="r_span">
                  <a href="http://fronttest1.dothome.co.kr/dae.html" target="_blank">
                    http://fronttest1.dothome.co.kr/dae.html
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!--이미지-->
        <div
          class="cpl_pic ani2" 
          style=""
        >
					<div class="cplp_info">
            VIEW
            <a href="http://fronttest1.dothome.co.kr/dae.html"></a>
					</div>
				</div>
      </div>

      <!--폴렉스존-->
      <div class="p_b_wrap">
        <div class="p_b_content">
          <div class="content_title"> 
            폴렉스존
          </div>
          <div class="content_c">
            <ul class="content_ul">
              <li>
                <span class="half-highlight">Project</span>
                <span class="r_span">폴렉스존 홈페이지 웹클론</span>
              </li>
              <li>
                <span class="half-highlight">Duration</span>
                <span class="r_span">9 days</span>
              </li>
              <li>
                <span class="half-highlight">Technologies</span>
                <span class="r_span">  Javascript / jQuery / HTML5 / CSS3 </span>
              </li>
              <li>
                <span class="half-highlight">URL</span>
                <span class="r_span">
                  <a href="http://fronttest1.dothome.co.kr/pollex.html" target="_blank">
                    http://fronttest1.dothome.co.kr/pollex.html
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!--이미지-->
        <div
          class="cpl_pic ani3" 
          style=""
        >
					<div class="cplp_info">
            VIEW
              <a href="http://fronttest1.dothome.co.kr/pollex.html"></a>
					</div>
				</div>
      </div>

    </div>
    
    <!--scrolltop 버튼-->
    <Scrolltop></Scrolltop>

    <!--footer-->
    <Footer></Footer>


    

  </div>
</template>

<script>
import Footer from '@/components/footer.vue';
import Scrolltop from '@/components/scrolltop.vue';

export default {
  components: {
    Footer,
    Scrolltop,
  },
  setup(){

  }
}
</script>

<style scoped>
  .p_wrap{
    vertical-align: middle;
    position: relative;
    width: 100% !important;
    max-width: 1280px;
    margin: 0 auto;
  }
  .p_title{
    margin-top : 180px;
  }
  .ct_m{
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 90px;
    font-size: 145px;
    font-weight: 900;
    color: #ecedef;
    line-height: 110px;
    text-align: center;
  }
  .p_box{
    position: relative;
    background-color: #fff;
    box-shadow: 0 50px 100px rgb(17 20 39 / 20%);

    padding: 120px 190px;

  }

  .p_b_title{
    font-size: 50px;
    line-height: 40px;
    word-wrap: normal;
    word-break: keep-all;

    padding-bottom : 20px;
  }
  
  .p_b_wrap{
    margin-top:120px;

    /* display: inline-block; */
    vertical-align: middle;
    position: relative;
    width: 100%;
    /* background-color: yellow; */
    display:flex
  }
  .content_title{
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    color: #111427;
    line-height: 40px;
    letter-spacing: -1px;

  }

  .p_b_content{
    display:inline-block;
    width: 50%;
    text-align: left;
    margin : 40px 0;
  }
  .p_b_content:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 5px;
    border-radius: 1px;
    background-color: #ffe618;
  }
  .content_c .content_ul{
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-top: 75px;
  }
  .content_c ul strong{
    width: 90px;
    display:inline-block;
    position:relative
    
  }

  .content_c ul .r_span{
    margin-left : 7px;
  }
  .half-highlight{
  background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #fff079 50%);

  }
  .tech_ul{
    padding-left: 15px;
    padding-top:5px;
  }

  .cpl_pic {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    display:inline-block;
    width:50%;
    height: 240px;
    overflow: hidden;
    border-radius: 5px;
    background-color: #111427;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0 30px 60px rgb(17 20 39 / 25%);
   
  }

  .ani1{
    background-image:url('../../assets/images/Animation-sing.gif');
  }
  .ani2{
    background-image:url('../../assets/images/Animation-dae.gif');
  }
  .ani3{
    background-image:url('../../assets/images/Animation-pollex.gif');
  }



  .cplp_info {
    /* text-align: center;
    display: inline-block; */
    display : flex;
    justify-content : center;
    align-items : center;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 20, 39, 0.8);
    /* transform: scale(2); */
    opacity: 0;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    color: #fff;
    font-size: 20px;
  }
  .cplp_info:hover{
    /* transform:scale(1.5); */
    transition: transform .5s;
    opacity:1;
  }

  .cplp_info a {
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  


</style>