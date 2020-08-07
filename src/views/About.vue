<template>
  <div class="about">
     <HelloWorld msg="Welcome to Your Vue.js App"/>
    <aaa></aaa>
    <bbb></bbb>
    <ccc></ccc>
    <br><br><br>
     <ddd></ddd>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import header1 from '@/components/header1.vue'
import tab1 from '@/components/tab1.vue'
import img1 from '@/components/img1.vue'
import btn from '@/components/btn.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    aaa:header1,
    bbb:tab1,
    ccc:img1,
    ddd:btn
  }
}
</script>
