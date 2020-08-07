<template>
  <div>
        <div class="yihang tuwen"><img src="../img/9.png" class="img2"></div>
        <div class="yihang tuwen">
            <p class="bold1">{{title}}</p>
            <p class="blue1">{{title1}}</p>
        </div><br>
        <div class="yihang">
            
            <button class="btn1 yihan7">{{btn1}}</button>
        </div>

        <div class="yihang">
            <br> <br>
            <img src="../img/13.png" class="img5">
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title:"15367797822",
            title1:"绑定登录可获得同步vip特权",
            btn1:"绑定登录"
         
        }
    },
}
</script>

<style>
    .btn1{
        width: 200px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: white;
        border-radius: 40px; 
        background-color: blue; 
        position: relative;
        left: 0px;
        top: -50px;      
    }
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
        text-align: left;
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
    .blue1{
        color:blue
    }
    .img5{
        position: relative;
        top: -120px;
        width: 100%;
      
    }
</style>