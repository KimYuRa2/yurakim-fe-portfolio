<!-- 모바일용 햄버거버튼 (숨김) -->

<template>
    <header>
        <div id="header">
        <div class="h_logo">
            <router-link :to="{ name : 'Main' }" @click="menuclose"></router-link>
        </div>
        <div class="h_menu">
            <a href="javascript:void(0)" @click="menuopen">
                <span></span>
                <span></span>
            </a>
        </div>
        </div>
        <transition-group name="slide">
            <div 
                class="nav-wrap" 
                v-if="isOpen" 
                
            >
                <div class="nav-inner">
                    <div class="logo_wrap">
                        <div class="side_logo">
                            <a href="">
                            </a>
                        </div>
                        <div class="menuclose" @click="menuclose">
                            <a href="javascript:void(0)">
                            </a>
                        </div>
                    </div>
                    
                    <nav>
                        <ul>
                            <li>
                                <router-link :to="{ name : 'Main' }" @click="menuclose">MAIN</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name : 'Webclone' }" @click="menuclose">WEBCLONE</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name : 'Project' }" @click="menuclose">PROJECT</router-link>
                            </li>
                        </ul>
                    </nav>
                    
                    
                </div>
            </div>
            <!-- nav바 열릴때 검은배경 -->
            <div :class="isOpen ? 'ss' : ''"></div>
        </transition-group>
    </header>
</template>

<script>
import { useRouter } from 'vue-router';
import {ref} from 'vue';

export default {
  data() {
    
  },
  setup(){
    const router = useRouter(); // route정보 받아옴
    const isOpen = ref(false);
    const menuopen = () => {
        console.log('hello');
        // const menu=document.querySelector('#navi');

        // // menu.style.display = 'block';
        // menu.classList.add('show');

        // this.isOpen = !this.isOpen

        // const menu = document.querySelector('.nav-wrap');
        // menu.classList.add('ss');
        
        isOpen.value = true;
        console.log(isOpen.value);
    };

    const menuclose = () => {
        console.log('bye');
        // const menu=document.querySelector('#navi');
        // // menu.style.display = 'block';
        // menu.classList.remove('show');
        isOpen.value = false;
    }

    const gogotest = () => {
        router.push({
            name: 'Main',
        })
    }

    return {
        menuopen,
        menuclose,
        gogotest,
        isOpen,

    }
  }
}
</script>

<style>
.logo_wrap{
    display:flex;
    justify-content: space-between;
    margin-bottom: 100px;
    align-items: center;
}
.side_logo{
    width:47px;
    height:47px;
}
.side_logo>a{
    display:block;
    width:100%;
    height:100%;
    background-image:url('@/assets/images/free-icon-puzzle-786771.png');
    background-size:cover;
    background-position:center center;
    background-repeat: no-repeat;
}
.menuclose{
    width:35px;
    height:35px;
}
.menuclose>a{
    display:block;
    width:100%;
    height:100%;
    background-image:url('../assets/images/kindpng_11745.png');
    background-size:cover;
    background-position:center center;
    background-repeat: no-repeat;
}
.nav-wrap {
    /* 메뉴바 열릴때 */
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    /* background: rgba(0, 0, 0, 0.8); */
    z-index:11;
}
.nav-wrap .nav-inner {
    z-index:20;
    float: right;
    width: 800px;
    height: 100vh;
    background: #fff;
    padding: 68px 100px 100px;
    box-sizing:border-box;
    line-height: 1;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.show{
    display:block !important;
}
.nav-wrap nav li a {
    font-size: 35px;
    letter-spacing: -1.5px;
    color: #222;
}
.nav-wrap nav li a:hover {
    color: transparent;
    -webkit-text-stroke-color: #222;
    -webkit-text-stroke-width: thin;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
.nav-wrap nav li + li {
    margin-top: 35px;
}
.ss{
    background: rgba(0, 0, 0, 0.8);
    height:100vh;
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    /* background: rgba(0, 0, 0, 0.8); */
    z-index:10;
}





/**********88 */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}




/* slide transition */
/* .slide-enter-active,
    .slide-leave-active{
        transition : all 0.5s ease;
    }

    .slide-enter-from,
    .slide-leave-to{
        opacity: 0; 
        transform : translateY(-30px);
    }

    .slide-enter-to,
    .slide-leave-from{
        opacity: 1; 
        transform : translateY(0);
    } */


    /* 메뉴 slide */
    .slide-enter-active {
        animation: menu-slide .5s;
    }
    .slide-leave-active {
        animation: menu-slide .5s reverse;
    }
    @keyframes menu-slide {
        from {
            transform: translateX(100%);
            opacity: 0; 
        }
        to {
            transform: translateX(0);
            opacity: 1; 
        }
    }
</style>