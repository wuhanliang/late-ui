<template>
  <NLayoutHeader
    bordered
    class="late-ui-header"
  >
    <div class="ui-logo nav-left">
      <img
        :src="LogoUrl"
        alt=""
      >
      <span>
        Late-UI
      </span>
    </div>
    <div class="nav-center">
      <NButton quaternary>
        首页
      </NButton>
      <NButton quaternary>
        文档
      </NButton>
      <NButton quaternary>
        组件
      </NButton>
    </div>
    <div class="nav-right">
      <strong>版本: {{version}}</strong>
    </div>

  </NLayoutHeader>
</template>

<script setup>
import { version } from '/package.json'
import { NLayoutHeader, NButton } from 'naive-ui'
import LogoUrl from '@/assets/naivelogo.svg'
</script>
<style lang="scss" scoped>
.late-ui-header {
  display: grid;
  height: 64px;
  line-height: 64px;
  grid-template-columns: 272px 1fr auto;
  padding: 0 32px;
  .nav-left {
    display: flex;
    align-items: center;
    img {
      height: 32px;
      width: 32px;
      margin-right: 10px;
    }
  }
}
</style>
