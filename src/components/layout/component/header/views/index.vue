<template>
  <a-layout-header :class="`ant-layout-header-${theme}`">
    <div class="collapsed" @click="toggleCollapsed">
      <icon icon="box-arrow-in-left" v-show="!collapsed" />
      <icon icon="box-arrow-in-right" v-show="collapsed" />
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useTheme, useCollapsed } from "../../../hook";

export default defineComponent({
  setup() {
    const { theme } = useTheme();
    const { collapsed, toggleCollapsed } = useCollapsed();
    watch(theme, () => console.log("theme=", theme.value));

    return {
      theme,
      collapsed,
      toggleCollapsed
    };
  }
});
</script>

<style lang="less">
.ant-layout-header {
  padding: 0 10px !important;

  .collapsed {
    cursor: pointer;
    font-size: 22px;
    color: #fff;
  }
}
</style>