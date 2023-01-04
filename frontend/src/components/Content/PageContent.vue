<template>
  <div class="table-content">
    <TableContent :data=orders />
  </div>
</template>

<script>
import TableContent from './TableContent.vue';
export default {
  data() {
    return {
      orders: null,
    }
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    dateFormater(date) {
      const dateFormated = new Date(date);
      const day = dateFormated.getDate();
      const month = dateFormated.getMonth() + 1;
      const year = dateFormated.getFullYear();
      return `${day}/${month}/${year}`;
    },
    valueFormater(value) {
      return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    },
    dataFormater(data) {
      const orders = data;
      orders.forEach((order) => {
        order.emissionDate = this.dateFormater(order.emissionDate);
        order.value = this.valueFormater(order.value);
      })
      return orders;
    },
    fetchOrders() {
      try {
        fetch('http://localhost:3001/orders')
          .then(response => response.json())
          .then(data => this.orders = this.dataFormater(data))
      } catch (error) {
        console.log(error);
      }
    },
  },
  name: 'PageContent',
  components: {
    TableContent,
  }
}
</script>

<style scoped>
.table-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0px 0px 48px;
    gap: 16px;
  }
</style>