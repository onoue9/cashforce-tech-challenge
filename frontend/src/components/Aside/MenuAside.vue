<template>
  <div class="aside-menu">
    <HeaderAside />
    <ItemAside />
  </div>
</template>

<script>
import HeaderAside from './HeaderAside.vue';
import ItemAside from './ItemAside.vue';
export default {
  name: 'MenuAside',
  components: {
    HeaderAside,
    ItemAside,
  },
}
</script>

<style scoped>
  .aside-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
</style>