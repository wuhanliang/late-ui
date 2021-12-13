<template>
<NLayoutHeader bordered class="late-ui-header">
  <div class="ui-logo nav-left">
    <img :src="LogoUrl" alt="">
    <span>
      Late-UI
    </span>
  </div>
  <div class="nav-center">
    <router-link class="late-route-link" v-for="(route, key) in routes" :key="key" :to="route.path">
      <NButton quaternary :type="route.name === $route.name ? 'primary' : 'default'">
        {{route.meta}}
      </NButton>
    </router-link>
  </div>
  <div class="nav-right">
    <NButton quaternary @click="toGithub">
      <strong>GitHub</strong>
    </NButton>
    <strong style="marginLeft: 16px;">版本: {{version}}</strong>
  </div>

</NLayoutHeader>
</template>

<script setup>
import { version } from '/package.json'
import { NLayoutHeader, NButton } from 'naive-ui'
import LogoUrl from '@/assets/naivelogo.svg'
import { routes } from '@/routes'
import { useRoute, useRouter } from 'vue-router'
import { computed  } from 'vue'

 

const activeRoute = (route) => {
  // useRouter().push("/docs")
  // console.log(useRouter())
}



/**
 * @description 跳转github
 * @author wu
 * 
 */
const toGithub = () => (window.location.href = "https://github.com/wuhanliang/late-ui")
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
  .nav-center{
    a{
      text-decoration: none;
    }
  }
}
</style>
