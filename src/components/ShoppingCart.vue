<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ formatCurrency(product.price) }} - {{ product.quantity }}
        </li>
      </ul>
      <p>Total: {{ formatCurrency(total) }}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),
      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },
    methods: {
      ...mapActions('cart', ['checkout']),
      formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value)
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  