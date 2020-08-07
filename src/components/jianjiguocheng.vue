<template>
    <div class="app2">
        <div class="wenzi1">
            <slot name="jianjiguocheng">
                {{title}}
            </slot>
        </div>
        <p style="width:100%" class="wenzi2">
            <font class="yihang4 num1">
            <slot name="num1">
                1
            </slot>
            </font>
            <font class="yihang4">
                {{title1}}                 
            </font><br>
            <font class="yihang4">{{title2}}</font><br>
            <font class="yihang4">{{title3}}</font><br>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:"剪辑过程",
            title1:"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
            title2:"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
            title3:"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
        }
    },
}
</script>

<style>
    .step1{
        color: blue;
        background-color:#e6e3f4;
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }
    .num1{
        display: inline-block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background-color: #e6e4ef;
        text-align: center;
        line-height: 20px;
    }
    .wenzi1{
        font-weight: bold;
        font-size: 25px;
        text-align: center;
        width: 17%;
        border-bottom: 3px yellow solid;
    }
    .wenzi2{
        font-size: 20px;
        text-align: left;
    }
    .yihang4{
        display: inline-block;

    }

    .app2{
        border-bottom: 1px black solid;
        height: 185px;
        width: 90%;
        margin: 0 auto;
    }
  
</style>