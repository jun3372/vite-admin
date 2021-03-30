<template>
  <a-layout-footer :theme="theme" style="text-align: center">
    Ant Design ©2018 Created by Ant UED
  </a-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "../../../hook";

export default defineComponent({
  setup() {
    const { theme } = useTheme();
    return { theme };
  }
});
</script>

<style scoped>
</style>