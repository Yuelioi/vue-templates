<script setup>

import NavMenu from './views/navMenu.vue'
</script>

<template>
  <div class="common-layout">
    <NavMenu />
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>


<style scoped>

</style>
