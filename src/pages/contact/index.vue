<template>
  <div class="p_wrap">
    <div class="p_title">
      <h2 class="ct_m">CONTACT</h2>
    </div>

    <div class="p_box">
      <div class="p_b_title">
        CONTACT ME
      </div>

      <!-- contact 폼 -->
      <form class="contact-form" @submit.prevent="sendEmail">
          <div class="content_c">
            <ul class="content_ul">
              <li style="display:none;">
                <span class="half-highlight">내이메일</span>
                <input type="email" name="user_email"/>
              </li>

              <li>
                <span class="half-highlight">회사명</span>
                <input type="text" name="company_name" v-model="company_name"/>
              </li>
              <li>
                <span class="half-highlight">연락처</span>
                <input type="text" name="company_phonenum" v-model="company_phonenum" maxlength="13" placeholder="-없이 숫자만 입력해 주세요."/>
              </li>
              <li>
                <span class="half-highlight">이메일</span>
                <input type="email" name="company_email"  v-model="company_email" placeholder="예) test@test.com"/>
              </li>
              <li v-show="valid.company_email" class="input_error">
                * 이메일 주소를 정확히 입력해주세요.
              </li>
              <li>
                <span class="half-highlight">메세지</span>
                <textarea name="message" v-model="message"></textarea>
              </li>
              <li>
                <button 
                  class="con_btn" 
                  type="submit" 
                  :disabled="message.length<1 || company_email.length<1 || company_phonenum.length<1"
                  @click="afterSend"
                  :class="{disnone: afterMessage}"
                >
                  보내기
                </button>
              </li>
              <li
                :class="{disnone: !afterMessage}"
                class="thankyouMessage"
              >
                감사합니다 :)
                <br/>
                빠른 시일 내에 연락 드리도록 하겠습니다.
              </li>
            </ul>
          </div>

      </form>

      
    </div>

    <!--side-->
    <div class="p_side">
      <div 
        class="side_right" 
        @mouseover="imghovered" 
        @mouseleave="imghovered"
        style=""
      >
        <img src="@/assets/images/contact.png"/>
      </div>
      <div 
        class="side_right_text half-highlight"
        v-show="imghover"
        style=""
      >
        010 - 4814 - 3118
      </div>
      
      
      <div class="side_left" style="">
        <a href="https://github.com/KimYuRa2/">
          <img src="@/assets/images/git-hub.png"/>
        </a>
      </div>
    </div>

    <!--scrolltop-->
    <Scrolltop></Scrolltop>

      <!--footer-->
      <div class="p_footer" style="">
        <div>
          © 2022. Kim Yu Ra.
          <br/>
          All rights reserved. 
        </div>
        <div class="footer_sendmail">
          <a href="mailto:ururur68@gmail.com">
            Contact Me!
          </a>
        </div>
        <div class="footer_img">
          <a href="">
            <img src="@/assets/images/email3.png"/>
          </a>
          <a href="">
            <img src="@/assets/images/git-hub.png"/>
          </a>
        </div>
      </div>



  </div>

      



  
</template>

<script>
import emailjs from 'emailjs-com';
import { ref, watch } from 'vue';
import Scrolltop from '@/components/scrolltop.vue';

export default {
  components: {
    Scrolltop,
  },
  setup(){
    const message=ref('');
    const company_name = ref('');
    const company_email = ref('');
    const company_phonenum = ref('');
    const valid = ref({
      company_email: '',
      password: ''
    })
    const emailHasError = ref(false);
    const afterMessage = ref(false);
    const imghover = ref(false);

    const sendEmail = (e) => {
      emailjs.sendForm('service_87phd4w', 'template_5tgv6up', e.target, 'D7jfHhJbNEdrm0Mpz')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }

    const checkEmail = () => {
      // 이메일 형식 검사
      const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/

      if (!validateEmail.test(company_email.value) || !company_email.value) {
        valid.value.company_email = true;
        emailHasError.value = true;
        return;
      } valid.value.company_email = false;
        emailHasError.value = false;
    }

    //`v-model`로 걸어둔 email이랑 password input창이 변하는것을 
    //`watch`로 감시하고 변경이되면 `methods`가 실행된다.
    // 따라서 실시간으로 이메일 형식이 맞는지 판단할 수 있다.
    watch( company_email, () => {
      checkEmail();
    });
    // watchEffect( () => {
    //   console.log(company_email.value);
    // })


    /* 연락처 auto hyphen */
    const autoHypenPhone= () => {
      const str = company_phonenum.value.replace(/[^0-9]/g, '');
      console.log("dd"+str);
      var tmp = '';
      if (str.length < 4) {
        return str;
      }else if( str.length < 7) {
        tmp += str.substring(0,3);
        tmp += '-';
        tmp += str.substring(3);
        company_phonenum.value=tmp;
        return company_phonenum;
      }else if(str.length < 11){
        tmp += str.substring(0, 3);
        tmp += '-';
        tmp += str.substring(3, 7);
        tmp += '-';
        tmp += str.substring(7);
        company_phonenum.value=tmp;
        return company_phonenum;
      }else{              
        tmp += str.substring(0, 3);
        tmp += '-';
        tmp += str.substring(3, 7);
        tmp += '-';
        tmp += str.substring(7);
        company_phonenum.value=tmp;
        return company_phonenum;
      }
    }

    watch(company_phonenum, ()=>{
      autoHypenPhone();
    })

    /* email send 후 */
    const afterSend = () => {
      afterMessage.value = !afterMessage.value;
      console.log(afterMessage.value);
    }

    const imghovered = () => {
      imghover.value = !imghover.value;
    }



    return{
      sendEmail,
      valid,
      emailHasError,
      message,
      company_name,
      company_email,
      company_phonenum,
      afterSend,
      afterMessage,
      imghovered,
      imghover
    }
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
    /* background-color: yellow; */
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
    display:flex;
    align-items : center;
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

  .content_c{
    padding-right: 20px;
    box-sizing: border-box;
  }
  .content_c .content_ul{
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-top: 75px;
  }
  .content_ul>li{
    margin-bottom : 12px;
  }
  .content_ul span{
    line-height: 32px;
  }
  
  .content_ul input{
    margin-left : 20px;
    width: 90%;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    box-sizing: border-box;
  }
  .content_ul textarea{
    margin-left : 20px;
    width: 90%;
    min-height: 300px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding: 10px;
    background-color: rgb(233, 233, 233);
    box-sizing: border-box;
  }
  .content_c ul strong{
    width: 90px;
    display:inline-block;
    position:relative
    
  }

  .content_c ul .r_span{
    margin-left : 7px;
  }
  .r_span ul{
    margin-left : 15px;
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

  .ani4{
    background-image:url('../../assets/images/Animation-seomun.gif');
  }
  .ani5{
    background-image:url('../../assets/images/Animation-hey1.0.gif');
  }
  .ani6{
    background-image:url('../../assets/images/Animation-hey2.0.gif');
  }
  .ani7{
    background-image:url('../../assets/images/Animation-todo.gif');
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

  .ff_wrap{
    display:block;
    margin-left : 130px;
  }
  .ff_wrap input {
    display: block;
    vertical-align: middle;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin: 0;
    padding: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    color: #111427;
    letter-spacing: 0px;
    line-height: 50px;
    text-align: left;
    text-indent: 15px;
    box-shadow: 0 20px 40px rgb(17 20 39 / 10%) !important;
    transition: 0.2s;
    -webkit-transition: 0.2s;
}

.con_btn {
    min-width: 250px;
    cursor:pointer;
    height: 60px;
    padding: 0px 40px;
    font-size: 18px;
    line-height: 60px;
    display: block;
    margin: auto;
    background-color: #111427;
    color: #fff;
    font-family: "Pretendard-Bold";
}
.con_btn:disabled{
  opacity: 0.3;
  -webkit-transition: none;
  transition: none;
}


/* 사이드 */
.side_right{
  position:fixed; 
  width:60px; 
  height:60px;
  top:50%; 
  right:20px; 
  border-radius: 50%; 
  transform:translate(0,-50%);
  box-shadow: 0 50px 100px rgb(17 20 39 / 20%);
}
.side_right_text{
  position:fixed; 
  /* width:60px; 
  height:60px; */
  top:50%; 
  right:100px; 
  transform:translate(0,-50%);
  box-shadow: 0 50px 100px rgb(17 20 39 / 20%);
  font-size: 18px;
}
.side_right img{
  width:100%;
  height:100%;
  -webkit-filter: opacity(.5) drop-shadow(0 0 0 gray);
  filter : opacity(.5) drop-shadow(0 0 0 gray);
}
.side_right img:hover{
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 white);
  filter : opacity(0.5) drop-shadow(0 0 0 white);
  cursor:pointer;
}
.side_left{
  position:fixed; 
  width:60px; 
  height:60px;
  top:50%; 
  left:20px; 
  border-radius: 50%; 
  transform:translate(0,-50%);
  box-shadow: 0 50px 100px rgb(17 20 39 / 20%);
}
.side_left img{
  width:100%;
  height:100%;
  -webkit-filter: opacity(.5) drop-shadow(0 0 0 gray);
  filter : opacity(.5) drop-shadow(0 0 0 gray);
}
.side_left img:hover{
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 white);
  filter : opacity(0.5) drop-shadow(0 0 0 white);
  cursor:pointer;
}
.p_footer{
  width:100%; 
  display:flex; 
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color:#111427;
  margin-top:180px; 
  color:#fff; 
  padding: 2.5rem 190px;
}
.footer_sendmail a{
  color:#fff;
  padding:20px;
}
.footer_sendmail a:hover{
  color:#ffe618;
}
.footer_img{
  display:flex;
}
.footer_img a{
  display: block;
  width:100%;
  height:100%;
}
.footer_img img{
  width: 30px;
  height: 30px;
  margin-left: 5px;
  -webkit-filter: opacity(.5) drop-shadow(0 0 0 #fff);
  filter : opacity(.5) drop-shadow(0 0 0 #fff);
  object-fit: cover;
}

.input_error {
    line-height: 16px;
    font-size: 11px;
    color:red;
    margin-left:75px;
}
.disnone{
  display:none !important;
}
.thankyouMessage{
  text-align : center;
  font-size : 18px;
  margin-top : 30px;
}

</style>