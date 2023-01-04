<template>
  <div class="item-menu">
    <div class="item">
      <div class="div-rectangle">
        <div class="rectangle"></div>
      </div>
      <div class="text-item">
        <img class="img-text-item" src="../../assets/hands-icon-green.svg" alt="cashforce title icon" />
        <p class="p-text-item">Notas fiscais</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemAside',
}
</script>

<style scoped>
  .item-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 288px;
    height: 64px;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 21px;
    width: 149px;
    height: 64px;
  }

  .div-rectangle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px;
    gap: 10px;
    width: 4px;
    height: 84px;
  }

  .rectangle {
    width: 4px;
    height: 64px;
    background: #00AD8C;
    border-radius: 4px;
  }

  .text-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 15px;
    width: 124px;
    height: 44px;
  }

  .img-text-item {
    width: 24px;
    height: 24px;
  }

  .p-text-item {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #00AD8C;
  }
</style>