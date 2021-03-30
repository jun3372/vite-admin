<template>
  <a-space align="center">
    <i class="bi" :class="`bi-${icon}`" />
  </a-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { icon: { type: String, default: "" } },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
@import "bootstrap-icons/font/bootstrap-icons.css";
</style>