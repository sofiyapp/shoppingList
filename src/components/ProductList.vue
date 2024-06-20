<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
      <ul v-else>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ formatCurrency(product.price) }} - {{ product.inventory }}
          <button
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)"
          >Add to cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    data() {
      return {
        loading: false,
        productIndex: 1
      }
    },
    computed: {
      ...mapState({
        products: state => state.products.items
      }),
      ...mapGetters('products', {
        productIsInStock: 'productIsInStock'
      })
    },
    methods: {
      ...mapActions('products', ['fetchProducts']),
      ...mapActions('cart', ['addProductToCart']),
      formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value)
      }
    },
    created() {
      this.loading = true
      this.fetchProducts().then(() => {
        this.loading = false
      })
    }
  }
  </script>
  
  <style scoped>
  </style>
  