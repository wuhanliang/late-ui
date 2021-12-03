<template>
  <router-view
    class="view view-left-sidebar"
    name="LeftSidebar"
  />
  <router-view class="view view-left" />
  <router-view
    class="view view-right-sidebar"
    name="RightSidebar"
  />
</template>

<script setup>
</script>
<style lang="scss">
#app {
  height: 100vh;
}
</style>