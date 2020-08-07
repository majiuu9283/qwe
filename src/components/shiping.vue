<template>
    <div>
        <video width="100%" height="440" controls="controls">
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            <source src="movie.webm" type="video/webm" />
            <object data="movie.mp4" width="320" height="240">
                <embed src="../v/D:\biancheng\vue\qingshuang\v\3.2  计算属性与方法.avi" width="320" height="240" />
            </object>
        </video>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>