<template>
<!-- <h1>3D Loading Spinner</h1>
<div class="container">
  <div class="ball"></div>
  <div class="spinner">
    <svg viewBox="0 0 500 500">
    <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <path id="curve2" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text width="500">
      <textPath xlink:href="#curve">
        hi
      </textPath>
      <textPath xlink:href="#curve2">
        hi2
      </textPath>
    </text>
  </svg>
  </div>
</div> -->


<div class="box">
        <div class="ball">
            <div class="line1" >
              <div style="position:absolute; top:20px; right:0;">h</div>
            </div>
            <div class="line2">
              <div style="position:absolute; top:40px; right:0;">2</div>
            </div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="line5"></div>
        </div>
    </div>
</template>

<script>
import Konva from "konva";


export default {
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;700&family=Raleway:wght@100;700&display=swap");

/* body {
  font-family: "Raleway", "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1f2020;
  display: grid;
  place-content: center;
  place-items: center;
  min-height: 100vh;
  perspective: 3000px;
}
h1 {
  
  color: #fed7;
  text-align: center;
  font-weight: 100;
  font-size: clamp(2rem, 10vw, 3.5rem);
  text-shadow: 2px 2px 5px #fff5;
  line-height: 1.3;
  margin: 0;
}
.container {
  position: relative;
  display: grid;
  transform-style: preserve-3d;
}
.ball {
  isolation: isolate;
  position: relative;
  background-color: #a5282c;
  background: radial-gradient(circle at center, #faa1 5%, transparent 50%),
    radial-gradient(circle, hsl(358, 61%, 40%), hsl(358, 61%, 30%));
  background-position: 0 0;
  width: 15em;
  height: 15em;
  border-radius: 100vmax;
  animation: spin-ball 200s linear infinite;
}
.ball:after {
  box-shadow: inset -1px -1px 10px #000;
}
.ball:before {
  content: "";
  position: absolute;
  top: 1%;
  left: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 0px, #fffc, #fff0 58%);
  -webkit-filter: blur(5px);
  z-index: 2;
}
.ball:after {
  content: "";
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle at 50% 30%,
    hsla(358, 91%, 57%, 0),
    hsla(357, 82%, 43%, 0.2) 50%,
    hsl(357, 100%, 17%) 100%
  );
}
.spinner {
  transform-style: preserve-3d;
  position: absolute;
  transform: rotateX(45deg) rotateY(45deg) rotateZ(40deg);
  width: 15em;
  height: 15em;
  filter: blur(1px);
}
@keyframes spin-ball {
  from {
    background-position: -10rem -50rem;
  }
  to {
    background-position: 1500rem 500rem;
  }
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.spinner svg {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  fill: #F9F6EF;
  box-sizing: border-box;
  position: absolute;
  top: -2.5rem;
  left: -2.5rem;
  width: 20rem;
  height: 20rem;
  border-radius: 100vmax;
  transform-origin: center center;
  animation: spinner 10s linear infinite;
} */


/***** */
body{

            overflow:hidden;
        }

        .box{
            width: 300px;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            right: 0;
            margin: -150px 0 0 -150px;
            perspective-origin: 50% 50%;
            perspective: 3000px;
            /* animation: camera3d 30s infinite linear; */
        }

        .ball{
            height: 100%;
            transform-style: preserve-3d;
            transform: rotateZ(-30deg) rotateY(0deg);
            animation: ball3d 10s infinite linear;
        }

        @keyframes ball3d{
            0%{transform: rotateZ(-30deg) rotateY(0deg);}
            100%{transform: rotateZ(-30deg) rotateY(360deg);}
        }

        @keyframes camera3d{
            0%{perspective: 3000px;}
            25%{perspective: 30px;}
            75%{perspective: 30px;}
            100%{perspective: 3000px;}
        }

        .ball:after{
            content: " ";
            display: block;
            width: 1px;
            height: 500px;
            background-color: #007069;
            transform: translateX(150px) translateY(-100px);
        }

        .ball > div{
            position: absolute;
            width: 100%;
            height: 100%;
            border: 1px solid #000;
            border-radius: 100%;
        }

        .line1{transform: rotateY(0);}
        .line2{transform: rotateY(36deg);}
        .line3{transform: rotateY(72deg);}
        .line4{transform: rotateY(108deg);}
        .line5{transform: rotateY(144deg);}
</style>