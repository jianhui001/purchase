<template>
    <div>
        <!-- 顶部导航 -->
        <div class="header"></div>
        <!-- 内容区域 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="less" scoped>
    .header{
        width: 100%;
        height: 50px;
        background: #1e78bf;
    }
</style>