<template>
  <NLayout style="height: 100%;">
    <TopSidebar />

    <NLayoutContent class="container" v-if="!isSider">
      <slot />
    </NLayoutContent>
    <NLayout v-else has-sider position="absolute" style="top: 64px; bottom: 0;" bordered>
      <NLayoutSider bordered>
        <slot name="leftSider"/>
      </NLayoutSider>
      <NLayout>
        <slot />
      </NLayout>
    </NLayout>
  </NLayout>
</template>
<script setup>
import TopSidebar from './TopSidebar.vue'
import { NLayout, NLayoutContent, NLayoutSider } from 'naive-ui'
import { useSlots,  toRaw, computed} from 'vue'



const isSider = computed(() => {
  const slots = useSlots()
  return toRaw(slots).leftSider
})



</script>
<style lang="scss" scoped>
.container {
  height: calc(100vh - 64px);
  overflow-y: auto;
}
</style>