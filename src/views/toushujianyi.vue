<template>
<div>
    <header1></header1>
    <jianyilan></jianyilan>
    <aaa class="input1" jie="输入你的手机号"></aaa><br>
    <aaa class="input1" jie="请输入您的联系邮箱："> <template #sunbian class="lianxi">联系邮箱:</template></aaa>
    <fankui class="input1"></fankui>
    
    <yanzhengma class="input1"></yanzhengma>
   
    <div class="yizhang">
        看不清，换一张
    </div>
    <button class="btn1" @click="qiehuan()">{{title}}</button>
</div>
    
</template>
<script>
import header1 from '@/components/header1.vue'
import jianyilan from '@/components/jianyilan.vue'
import input from '@/components/input.vue'
import fankui from '@/components/fankui.vue'
import yanzhengma from '@/components/yanzhengma.vue'
export default {
    name:'toushujianyi',
    components:{
        jianyilan,
        header1,
        fankui,
        yanzhengma,
        aaa:input
    },
    data() {
        return {
            title:"提交"
        }
    },
    methods: {
        qiehuan:function(){       
            var shouji2=document.getElementsByClassName("shouji2")[0]   
            var shouji =document.getElementsByClassName("shouji")[0]
             var shouji1 =document.getElementsByClassName("shouji")[1]
             if(shouji.value==""){
                alert("第一个手机号不能为空")
            }else{
                this.title="提交成功！"
                if(shouji1.value==""){
                    alert("第二个手机号不能为空")
                }else{
                    this.title="提交成功！"
                    if(shouji2.value==""){
                        alert("验证码不能为空！")
                        
                    }else{
                        this.title="提交成功！"
                    }    
                }  
            }  
            
                
        }
    },
}
</script>

<style scoped>
    .input1{
        margin-top: 20px;
    }
    .input2{
        height: 20px;
    }
    .yizhang{
        float: left;
        font-size: 10px;
        text-align: left;
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: blue;
        margin-left: 14px;
        margin-top: 20px;
    }
    .btn1{
        width: 280px;
        height: 80px;
        background-color:blue;
        border-radius: 20px;
        margin-top: 20px;
        color:white;
        font-size: 12px;
    }
  .input1[data-v-d349d308] {
        margin-top: 0.26667rem;
        float: left;
        text-align: left;
        font-size: 12px;
    }


   

</style>