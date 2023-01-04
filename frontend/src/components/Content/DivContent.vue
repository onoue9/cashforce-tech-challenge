<template>
  <div class="content-div">
    <HeaderContent />
    <MainContent />
  </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue';
import MainContent from './MainContent.vue';
export default {
  name: 'DivContent',
  components: {
    HeaderContent,
    MainContent,
  }
}
</script>

<style scoped>
  .content-div {
    position: absolute;
    width: 1272px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: #FFFFFF;
    box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
    border-radius: 15px 0px 0px 15px;
  }
</style>