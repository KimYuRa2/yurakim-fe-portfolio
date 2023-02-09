<template>
<router-view></router-view>
<div style="background-color:lavender; width:100%; height:500px;"></div>
   

</template>

 <script>
        var prjt = new Vue({
            el: '.prj-detail-wrap',
            data:{
                prjt:null,
                prjtKey:''
            },
            methods: {
                async getProject() {
                    try {
                        const { data } = await axios.get('./prjt.json');
                        this.prjt = data[this.prjtKey];
                    } catch (err) {
                        console.error(`getProject err : `, err);
                    }
                },
                searchParam(key) {
                    this.prjtKey = new URLSearchParams(location.search).get(key);
                },
                prjDetailVisual(){
                    var winHeight = $(window).outerHeight();

                    $('.prj-detail-wrap .visual').css('height', winHeight + 'px');
                    $('.prj-detail-wrap .content').css('margin-top', winHeight);
                },
                clickScroll(){
                    var winHeight = $(window).outerHeight();
                    $('html, body').animate({ scrollTop: winHeight + 'px' }, 400);
                },
                visualScroll(){
                    var scrollTop = $(window).scrollTop(),
                        topValue = scrollTop / 4,
                        winHeight = $(window).outerHeight();

                    $('.prj-detail-wrap .visual').css('top', - topValue + 'px');

                    if(scrollTop >= winHeight){
                        setTimeout(function(){
                            $('.visual').find('[data-aos]').removeClass('aos-animate');
                        }, 100);
                    }
                }
            },
            created() {
                this.searchParam('prjt');
                this.getProject();
            },
            mounted() {
                $('#headerArea').addClass('white');

                window.addEventListener('load', this.prjDetailVisual);
                window.addEventListener('resize', this.prjDetailVisual);
                window.addEventListener('scroll', this.visualScroll);
            },
            beforeDestroy() {
                $('#headerArea').removeClass('white');

                window.removeEventListener('load', this.prjDetailVisual);
                window.removeEventListener('resize', this.prjDetailVisual);
                window.removeEventListener('scroll', this.visualScroll);
            }
        });
    </script>