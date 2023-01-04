<template>
  <div class="header-content">
    <div class="header-content-div">
      <img class="header-content-img" src="../../assets/hands-icon-dark-blue.svg" alt="cashforce title icon" />
      <h1 class="header-content-h1">Notas fiscais</h1>
    </div>
    <div class="header-content-text">
      <span>Visualize as notas fiscais que você tem.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMainContent',
}
</script>

<style scoped>
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 0px 48px;
    gap: 0px;
  }

  .header-content-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
    width: 255px;
    height: 53px;
  }

  .header-content-img {
    width: 24px;
    height: 24px;
    color: #021B51;
    border-color: #021B51;
  }

  .header-content-h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #021B51;
  }

  .header-content-text {
    display: flex;
    width: 255px;
    height: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #727D94;
  }
</style>