<template>
    <div class="shouji1">
        <div>
        <div class="yihang"><br><font color="red">*</font>图片验证码:</div>
        <br>
        <input type="text" placeholder="请输入图片验证码" class="shouji2 yihang" maxlength="4">
        <img src="../img/6.png" class="img1">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .shouji1{
        width: 100%;
    }

    .yihang{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        width: 700px;       
    }

    .shouji2{
        width: 400px;
        height: 60px;
        float: left;
        border:1px solid grey;
        margin-top: 20px;
        margin-left: 14px;
    }

    .img1{
        width: 200px;
        height: 65px;
        margin-top: 20px;
        float: right;
        margin-right: 20px;
    }
</style>