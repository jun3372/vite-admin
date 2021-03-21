<template>
  <div class="theme">
    <a-dropdown>
      <a-avatar size="small" shape="square">
        <template #icon>
          <i class="bi bi-shop-window" />
        </template>
      </a-avatar>

      <template #overlay>
        <a-menu @click="clickTheme">
          <div v-for="value in array" :key="value">
            <a-menu-item :key="value">{{ value }}</a-menu-item>
          </div>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "./hook";
const { theme } = useTheme();
const array = ["light", "dark"];

const clickTheme = (e: any) => {
  theme.value = String(e.key);
};
</script>