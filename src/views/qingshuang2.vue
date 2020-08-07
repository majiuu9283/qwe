<template>
    <div>
        <header1></header1>
        <aaa></aaa>
      
        <tab1><template #pingjia>{{title}}</template><template #pingjia1>{{title1}}</template></tab1>
    
        <img src="../img/8.png" class="img1">
         <br> <br>
         <img src="../img/11.png" class="img3">
        <img src="../img/10.png" class="img4">
    </div>
  
</template>

<script>
import header1 from '@/components/header1.vue'
import qingshuang_header from '@/components/qingshuang_header.vue'
import tab1 from '@/components/tab1.vue'
export default {
    name:'yanzhengma',
    components:{
        header1,
        aaa:qingshuang_header,
        tab1
      
    },
    data() {
        return {
            title:"用户特权",
            title1:"用户评价"
        }
    },
}
</script>

<style>
    .img1{
        width: 100%;
    }
    .img4{
        width: 100%;
    }
    .img3{
        width: 100%;
    }
</style>