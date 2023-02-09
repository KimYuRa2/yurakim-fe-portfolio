<template>
<div class="side_wrap" id="sidebar">
    <ul>
        <li v-for="sidemenu in sidemenus" :key="sidemenu">
            <a v-bind:class="sidetext" href="javascript:void(0)" v-html="sidemenu"></a>
        </li>
    </ul>
</div>
    
</template>

<script>
    export default {
        setup(){
            const sidemenus = ["MAIN","ABOUT ME","SKILL & EDU","WEB CLONE", "PROJECT","CONTACT ME"];

            return{
                sidemenus
            }
        }
    }
</script>

<style scoped>

.sidetext{
    color:#000;
    font-size:20px;
    display: block;
}
</style>