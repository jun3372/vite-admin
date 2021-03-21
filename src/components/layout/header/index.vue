<template>
  <a-layout-header>
    <!-- 多语言切换 -->
    <Language />

    <!-- 账户提切换 -->
    <Theme />
  </a-layout-header>
</template>

<script setup lang="ts">
import { Theme } from "../theme";
import Language from "component/language";
</script>

<style >
.ant-layout-header {
  display: flex;
  justify-content: flex-end;
}
</style>