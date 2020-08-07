<template>
    <div class="shouji1">
       
        <div class="yihang"> <br><font color="red">*</font>反馈内容:</div>
        <br>
        <input type="text" placeholder="请输入您想要反馈的内容" class="shouji yihang">
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
    .shouji{
        width: 700px;
        height: 260px;
        margin: 0 auto;
        border:1px solid grey;
    }
</style>