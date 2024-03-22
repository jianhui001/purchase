<template>
    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" background-color="#112f50" text-color="#fff"
        active-text-color="#ffd04b" :collapse="isCollapse">
        <el-menu-item>
            <span slot="title">生鲜采购系统</span>
        </el-menu-item>
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
        </el-menu-item>
        <el-submenu index="/goods">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">产品管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/goods/list">产品列表</el-menu-item>
                <el-menu-item index="/goods/category">产品分类</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/order">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/order/list">订单列表</el-menu-item>
                <el-menu-item index="/order/collect">汇总清单</el-menu-item>
                <el-menu-item index="/order/auditing">订单审核</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/advert">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">广告分类</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/advert/list">广告列表</el-menu-item>
                <!-- <el-menu-item index="/advert/list">分类管理</el-menu-item> -->
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">系统管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">角色管理</el-menu-item>
                <el-menu-item index="1-2">部门管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    props: ['isCollapse']
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    border-right: none;
}
</style>