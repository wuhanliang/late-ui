<template>
  <div class="late-modal">
    <component :is="NModal">
      <slot />
    </component>>
  </div>
</template>
<script setup>
import { NModal } from 'naive-ui'

</script>