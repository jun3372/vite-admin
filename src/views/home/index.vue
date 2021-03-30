<template>
  <div>Home</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAxios } from "hooks";

export default defineComponent({
  setup() {
    const axios = useAxios();
    axios.get("http://52.80.24.164:3000/mock/20/danmaku").then((data) => {
      console.log(data);
    });

    return {};
  }
});
</script>

<style scoped>
</style>