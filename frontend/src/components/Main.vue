<template>
  <div class="main-div">
    <DivAside />
    <DivContent />
  </div>
</template>

<script>
import DivAside from './Aside/DivAside.vue';
import DivContent from './Content/DivContent.vue';

export default {
  name: 'MainContent',
  components: {
    DivAside,
    DivContent,
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-div {
    position: absolute;
    width: 1560px;
    height: 900px;
    left: 0px;
    top: 0px;
    background: #FBFDFE
  }
</style>
