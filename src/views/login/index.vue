<template>
  <div class="login-container">
    <div class="login-form">
      <form class="card-body form-inline"></form>
    </div>

    <div class="language">
      <Theme />
      <Language />
    </div>
  </div>
</template>

<script setup lang="ts">
import Language from "component/language";
import Theme from "component/layout/theme";
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  // background-image: url(../../assets/login/bg.png);
  background-image: url(../../assets/login/background.svg);
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    // background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .language {
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    & > * {
      margin-right: 10px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
}
</style>