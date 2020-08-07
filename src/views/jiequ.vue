<template>
    <div  class="jiequ">
        <header1 class="jiaqu_zujian1"><template #header_content class="jiequ">{{title}}</template></header1>
        <shiping></shiping>
        <jianjiguocheng></jianjiguocheng>
        <jianjiguocheng><template #jianjiguocheng>剪辑手法</template><template #num1>2</template></jianjiguocheng>
        <jianjiguocheng><template #jianjiguocheng>剪辑素材</template><template #num1>3</template></jianjiguocheng>
        <aaa></aaa>
       
    </div>
</template>

<script>
import header1 from '@/components/header1.vue'
import shiping from '@/components/shiping.vue'
import jianjiguocheng from '@/components/jianjiguocheng.vue'
import jiequ_footer from '@/components/jiequ_footer.vue'
export default {
    name:"jiequ",
    components:{
        header1,
        shiping,
        aaa:jiequ_footer,
        jianjiguocheng
    },
    data() {
        return {
            title:"如何截取视频片段"
        }
    },
}
</script>

<style>
.jiaqu_zujian1{
    height: 80px;
}
    .jiequ{
        font-size: 25px;
        font-weight: bold;
    }
</style>