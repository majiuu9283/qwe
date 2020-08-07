<template>
    <div class="wode_footer_div1">
        <div class="yihang3">
            <div><img src="../img/19.png" class="img16"></div> 
            <div class="tit2">{{title[0]}}</div>   
        </div>
        <div class="yihang3">
            <div><img src="../img/16.png" class="img16"></div> 
            <div class="tit2">{{title[1]}}</div>  
        </div>
        <div class="yihang3">
            <div><img src="../img/17.png" class="img16"></div> 
            <div class="tit2 wode3">{{title[2]}}</div> 
        </div>
    </div>
   
</template>

<script>
export default {
    data() {
        return {
            title:['首页','教程玩法','我的']
        }
    },
}
</script>

<style>
    .yihang3{
        display: inline-block;
        height: 150px;
        width: 33%;
        vertical-align: top;    
    }
    .img16{
        height: 70px;
    }
    .tit2{
        width: 100%;
        text-align: center;
        font-size: 15px;
    }
    .wode3{
        color:blue;
    }
</style>