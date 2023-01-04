<template>
  <div class="content">
    <HeaderMainContent />
    <PageContent />
  </div>
</template>

<script>
import HeaderMainContent from './HeaderMainContent.vue';
import PageContent from './PageContent.vue';
export default {
  name: 'MainContent',
  components: {
    HeaderMainContent,
    PageContent,
  },
}
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
  }
</style>