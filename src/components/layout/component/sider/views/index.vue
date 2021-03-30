<template>
  <a-layout-sider
    breakpoint="xs"
    v-model:collapsed="collapsed"
    :collapsedWidth="collapsedWidth"
    :width="width"
    :theme="theme"
    collapsible
  >
    <div class="logo" />

    <!-- 菜单 -->
    <a-menu
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Navigation Two</span>
          </span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTheme, useCollapsed } from "../../../hook";
import { useConfig } from "hooks";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined
  },
  setup() {
    const config = useConfig();

    const selectedKeys = ref<string[]>([]);
    const { collapsed } = useCollapsed();
    const { theme } = useTheme();
    const { width = 200, collapsedWidth = 80 } = config.layout.sider;

    return {
      width,
      theme,
      collapsed,
      selectedKeys,
      collapsedWidth
    };
  }
});
</script>

<style lang="less">
.logo {
  height: 32px;
  margin: 16px;
  // background-color: red;
  // background: rgba(255, 255, 255, 0.3);
}
</style>