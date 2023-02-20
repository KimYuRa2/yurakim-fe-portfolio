<template>
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
</template>

<script>
export default {

}
</script>

<style>
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
</style>