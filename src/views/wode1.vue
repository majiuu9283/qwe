<template>
    <div class="body1">
        <wode class="wo1"></wode>
        <aaa class="bind"></aaa><br>
        <div class="cont">
            <content1 class="cont1"></content1>
            <content1 class="cont1"><template #gongzuoshi1>收藏夹</template></content1>
            <content1 class="cont1"><template #gongzuoshi1>高级配置</template></content1>
        </div> <br><br>
        <div class="cont">
            <content1 class="cont1"><template #gongzuoshi1>投诉建议</template></content1>
            <content1 class="cont1"><template #gongzuoshi1>联系客服</template></content1>
            <content1 class="cont1"><template #gongzuoshi1>收藏夹</template></content1>
        </div> 
        <bbb class="bb1"></bbb>
    </div>
</template>
<script>
import wode from '@/components/wode.vue'
import wode_yonghuxingxi from '@/components/wode_yonghuxingxi.vue'
import content1 from '@/components/content1.vue'
import wode_footer from '@/components/wode_footer.vue'
export default {
    name:"wode1",
    components:{
        wode,
        aaa:wode_yonghuxingxi,
        content1,
        bbb:wode_footer
    }
}
</script>

<style>
    .cont{
      height: 400px;
      width: 100%;
      margin-top: -136px;
    }

    .wo1{
        height: 80px;
        line-height: 80px;
    }
    .bind{
        text-align: center;
    }
    .bbb{
        background-color: white;
    }
  
</style>