<template>
    <div class="shouji1">
        <slot name="sunbian" >
            <div class="yihang"><br><font color="red">*</font>联系手机:</div>
            <br>
        </slot>

        <input type="text" :placeholder="jie" class="shouji yihang">
  
    </div>
</template>
<script>
export default {
    props:{jie:String}
}
</script>
<style scoped>
    .shouji1{
        width: 100%;
    }
    #suibian{
        width: 100%;
    }

    .yihang{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        width: 100%;
        
    }
    .shouji{
        width: 100%;
        height: 60px;
        margin: 0 auto;
        border:1px solid grey;
    }
</style>