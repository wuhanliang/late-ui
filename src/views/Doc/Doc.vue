<template>
  <Layoute>
    <div class="late-ui-home">
    {{$route.name}}
    </div>
    <template #leftSider>
      directives
      <div>
        fefe
      </div>
    </template>
  </Layoute>
</template>
<script setup>
import Layoute from '@/views/layouts/Layoute.vue'

</script>
<style lang="scss" scoped>
.late-ui-home {
  height: 100%;
  width: 100%;
}
</style>
