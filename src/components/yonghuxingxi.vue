<template>
    <div>
        <div class="yihang tuwen"><img src="../img/9.png" class="img2"></div>
        <div class="yihang tuwen">
            <p class="bold1">{{title}}</p>
            <p>{{title1}}</p>
        </div><br><br>
        <div class="yihang xingxi">
            {{title2}}<br>
            {{title3}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:"莫高雷牛爸爸",
            title1:"短视频爱好者",
            title2:"每日更新模板太方便了，只需要图片素材",
            title3:"就能做出好看的视频"
        }
    },
}
</script>

<style>
    .yihang{
        display: inline-block;
        font-size: 15px;
        height: 120px;     
    }
    .tuwen{
        float: left;
        margin-right: 20px;
    }
    .img2{
        width:120px;
        height:120px;    
    }
    .bold1{
        font-weight: bold;
    }
    .xingxi{
        font-size: 20px;
        text-align: left;
        float: left;
        margin-right: 200px;
        position: relative;
        left: 140px;
        font-weight:bold ;
    }
</style>