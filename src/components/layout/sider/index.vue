<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <a href="/" class="logo">
      <img src="https://store.antdv.com/pro/preview/img/logo.59818776.png" />
      <h1 v-if="!collapsed">Admin Pro</h1>
    </a>

    <!-- 菜单 -->
    <a-menu mode="inline" @click="clickNenu">
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <i class="bi bi-heart" style="margin-right: 10px" />
            <span v-show="!collapsed">Navigation Two</span>
          </span>
        </template>
        <a-menu-item key="Home">Home</a-menu-item>
        <a-menu-item key="About">About</a-menu-item>
        <a-menu-item key="Login">Login</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRouter } from "vue-router";

const collapsed = inject("collapsed");

const route = useRouter();
const clickNenu = (e: any) => {
  const key = String(e.key);
  route.push({ name: key });
};
</script>

<style lang="less" scoped>
.logo {
  position: relative;
  display: flex;
  color: #1890ff;
  cursor: pointer;
  transition: color 0.3s;
  align-items: center;
  padding: 16px 16px;
  line-height: 32px;
  cursor: pointer;

  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }

  h1 {
    margin: 0 0 0 12px;
    overflow: hidden;
    color: #1890ff;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    -webkit-animation: fade-in;
    animation: fade-in;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
  }
}
</style>