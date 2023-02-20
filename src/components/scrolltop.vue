<template>
    <!-- scroll top 버튼 -->
    <div 
        @click="scrollTop"
        v-show="visible" 
        class="bottom-right"
    >
    </div>

</template>

<script>
import {ref} from 'vue';

export default {
    mounted: function () {
        window.addEventListener('scroll', this.scrollListener);
    },
    beforeUnmount: function () {
        window.removeEventListener('scroll', this.scrollListener);
    },
    setup(){
    const visible = ref(false);

    const scrollTop = () => {
        const intervalId = setInterval(() => {
            if(window.pageYOffset === 0){
            clearInterval(intervalId);
            }
            // window.scroll(0,window.pageYOffset-50);
            window.scroll({
                top:window.pageYOffset-50,
                left: 0,
                // behavior: 'smooth',
            })
        }, 20);

        };

        const scrollListener = ()=> {
        visible.value = window.scrollY > 150;
        }

        return{
        visible,
        scrollTop,
        scrollListener,
        }
    }

}
</script>

<style>
  .bottom-right {
    position: fixed;
    bottom: 20px;
    right: 10%;
    cursor: pointer;
    width:60px;
    height:60px;
    border-radius: 50%;

    background-image: url('@/assets/images/scrollbtn2.png');
    background-size: cover;
  }

</style>