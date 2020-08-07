<template>
    <div>
        <img src="../img/1.png" class="yihang img1">
      
            <p class="yihang jobhome">
                <slot name="header_content">
                    {{jobhome}}
                </slot>
            </p>
 
        <img src="../img/2.png" class="yihang img2">
    </div>
</template>
<script>
export default {
    data() {
        return {
            jobhome:"我的工作室"
        }
    },
}
</script>

<style scoped>
    .yihang{
        display: inline-block;
        width: 600px;
    }
    .img1{
        width: 20px;
        height: 14px;
    }
    .img2{
        width: 22px;
        height: 23px;
    }
    .jobhome{
        font-size: 25px;
    }
</style>