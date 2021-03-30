<template>
  <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout>
      <Header />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Sider, Header, Footer, Content } from "../component";
import { useTheme } from "../hook";

export default defineComponent({
  components: { Sider, Header, Footer, Content },
  data() {
    const { theme } = useTheme();
    return { theme };
  }
});
</script>
<style lang="less">
@import "../style/dark.less";
@import "../style/light.less";
</style>
