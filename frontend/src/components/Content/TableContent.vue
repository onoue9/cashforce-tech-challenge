<template>
  <table>
    <thead>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in data" :key="order.id" class="tbody-tr-1">
        <th>{{ order.nNf }}</th>
        <th>{{ order.buyers.name }}</th>
        <th>{{ order.providers.name }}</th>
        <th>{{ order.emissionDate }}</th>
        <th class="th-green">{{ order.value }}</th>
        <th v-if="order.orderStatusBuyer == 0" class="th-green">Pendente de confirmação</th>
        <th v-if="order.orderStatusBuyer == 1" class="th-green">Pedido confirmado</th>
        <th v-if="order.orderStatusBuyer == 2" class="th-green">Não reconhece o pedido</th>
        <th v-if="order.orderStatusBuyer == 3" class="th-green">Mercadoria não recebida</th>
        <th v-if="order.orderStatusBuyer == 4" class="th-green">Recebida com avaria</th>
        <th v-if="order.orderStatusBuyer == 5" class="th-green">Devolvida</th>
        <th v-if="order.orderStatusBuyer == 6" class="th-green">Recebida com devolução parcial</th>
        <th v-if="order.orderStatusBuyer == 7" class="th-green">Recebida e confirmada</th>
        <th v-if="order.orderStatusBuyer == 8" class="th-green">Pagamento Autorizado</th>
      </tr>
      <tr class="tbody-tr-2">
        <th><button>Dados do cedente</button></th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableContent',
  props: {
    data: Array,
  }
}
</script>

<style scoped>
  table {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  thead {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    width: 1177px;
    height: 22px;
  }

  thead tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    width: 80%;
  }

  thead th {
    text-align: start;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #a1a8b8;
    border-radius: 4px;
    width: 13%;
  }

  tbody {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 1177px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DFE2EB;
    border-radius: 6px;
  }

  tbody .tbody-tr-1 {
    display: flex;
    align-items: center;
    text-align: start;
    text-transform: uppercar;
    justify-content: space-between;
    padding-left: 30px;
    width: 80%;
    height: 48px;
  }

  tbody .tbody-tr-2 {
    display: flex;
    align-items: center;
    text-align: start;
    text-transform: uppercar;
    justify-content: center;
    padding-left: 30px;
    width: 15%;
    height: 48px;
  }

  .th-green {
    color: #00AD8C;
    text-align: start;
  }

  tbody th {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #4D5566;
    width: 13%;
  }

  tbody .tbody-tr-2 th {
    width: 100%;
  }

  button {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #727D94;
    border: 1px solid #A1A8B8;
    border-radius: 100px;
    background-color: transparent;
    height: 30px;
  }
</style>