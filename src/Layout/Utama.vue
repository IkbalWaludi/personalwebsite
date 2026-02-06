<template>
  <div class="layout-container">
    <Navbar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style>
.layout-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  overflow: hidden;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>