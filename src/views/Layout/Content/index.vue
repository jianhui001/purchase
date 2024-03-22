<template>
    <div>
        <!-- 顶部导航 -->
        <div class="header">
            <div class="icon">
                <i v-if="isCollapse" @click="changeMenu" class="iconfont icon-right-indent"></i>
                <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
            </div>
            <div class="header-right">
                登录信息
            </div>
        </div>
        <!-- 内容区域 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props:['isCollapse'],
    methods: {
        changeMenu() {
            this.$emit('changeMenu')
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    color: #fff;
    background: #1e78bf;
    .icon {
        i {
            font-size: 24px;
        }
    }
}
</style>