<template>
  <div class="aside-div">
    <MenuAside />
  </div>
</template>

<script>
import MenuAside from './MenuAside.vue';
export default {
  name: 'DivAside',
  components: {
    MenuAside,
  }
}
</script>

<style scoped>
.aside-div {
    position: absolute;
    width: 288px;
    height: 900px;
    left: 0px;
    top: 0px;
  }
</style>