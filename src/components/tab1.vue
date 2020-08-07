<template>
    <div class="tab1">
        <div class="yihang">
            <slot name="pingjia">
                <p class="xiaobian"><a href="http://localhost:8080">{{caogao}}</a></p>
            </slot>
        </div>
        <div class="yihang">
            <slot name="pingjia1">
                <p class="xiaobian"><a href="http://localhost:8080/about">{{jobtai}}</a></p>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            caogao:"草稿箱",
            jobtai:"工作台"
        }
    },
}
</script>
<style scoped>
    .yihang{
        display: inline-block;
        width: 300px;
    }
    .xiaobian:hover{
        cursor: pointer;
        border-bottom: 3px black solid;
    }
    .xiaobian{
        display: inline-block;
        font-size: 12px;
        height: 50px;
        line-height: 50px;
    }
</style>