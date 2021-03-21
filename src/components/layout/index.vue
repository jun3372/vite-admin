<template>
  <div :class="themeClass">
    <a-layout>
      <Sider />
      <a-layout>
        <Header />
        <Content />
        <Footer />
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import Sider from "./sider";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import { useTheme } from "./theme";
import { ref, provide } from "vue";

// 主题相关
const { themeClass } = useTheme();

// 菜单开关相关
const collapsed = ref<boolean>(false);
provide("collapsed", collapsed);
</script>

<style lang="less" >
.ant-layout {
  height: 100%;
}
</style>