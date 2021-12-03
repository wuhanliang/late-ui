<template>
  <NLayout style="height: 100%;">
    <TopSidebar />
    <NLayoutContent class="content">
      <slot />
    </NLayoutContent>
  </NLayout>
</template>
<script setup>
import TopSidebar from './TopSidebar.vue'
import { NLayout, NLayoutContent } from 'naive-ui'

</script>
<style lang="scss" scoped>
.content {
  height: calc(100vh - 64px);
  overflow-y: auto;
}
</style>