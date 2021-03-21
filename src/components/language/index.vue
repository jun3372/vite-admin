<template>
  <div>
    <a-dropdown>
      <!-- 图标 -->
      <a-avatar size="small" shape="square">
        <template #icon>
          <i class="bi bi-globe2" />
        </template>
      </a-avatar>

      <!-- 下拉选择器 -->
      <template #overlay>
        <a-menu @click="clickLanguage">
          <div v-for="(value, key) in language" :key="key">
            <a-menu-item :key="key" :title="key">{{ value }}</a-menu-item>
          </div>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

const language = ref<Object>({
  zh: "中文",
  en: "English"
});

const i18n = useI18n();
const clickLanguage = (e: any) => {
  i18n.locale.value = String(e.key);
};
</script>