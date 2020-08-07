<template>
    <div class="app">
        <div class="yihang1 imgdiv1"><img src="../img/14.png" class="img6"></div>
        <div class="yihang1 tit1">
            <slot name="gongzuoshi1">
                <a href="http://localhost:8081/about ">{{title}}</a>
            </slot>
            
        </div>
        <div class="yihang1 imgdiv2"><img src="../img/15.png" class="img6"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:"工作室",      
        }
    },
}
</script>

<style>
    .app{
        height: 120px;
        background-color: white;
        line-height: 100px;
        border-bottom: 1px #f8f8f8 solid;
    }
    .yihang1{
        display: inline-block;
    }
    .img6{
       height: 45px;
    }
    .tit1{
        font-size: 30px;
        width: 52%;
        height: 100px;
        line-height: 100px;
        text-align: left;
      
    }
    .imgdiv1{
        width: 22%;

     
    }
    .imgdiv2{
        width: 22%;    
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>