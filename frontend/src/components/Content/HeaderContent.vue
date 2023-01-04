<template>
  <div class="header">
    <div class="fame">
      <div class="frame"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContent',
}
</script>

<style scoped>
  .header {
    width: 1272px;
    height: 64px;
    border-bottom: 1px solid #DFE2EB;
  }

  .fame {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 16px 46px;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 12px 0px 0px 0px;
  }

  .frame {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 22px;
  }
</style>