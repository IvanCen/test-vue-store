<template>
  <section class="products-list-container">
    <div v-if="$fetchState.pending" class="preloader preloader_relative"/>
    <div :class="['products-list']" v-else>
      <products-list-card
          v-for="product in allProducts"
          :key="product.id"
          :product="product"
      />
    </div>
  </section>
</template>

<script>
  import {mapGetters} from "vuex";
  import ProductsListCard from './ProductListCard'

  export default {
    name: 'ProductsList',
    components: {ProductsListCard},
    computed: {
      categoryId() {
        if (this.$route.params.category) {
          return this.$route.params.category.split('-').slice(-1).pop()
        }
        return 1
      },
      ...mapGetters('products', [
        'allProducts',
        'filteredProducts',
      ])
    },
    methods: {
      async loadProducts() {
        const filter = {
          category: this.categoryId
        }
        await this.$store.dispatch('products/fetchProducts', {filter});
      }
    },
    data() {
      return {
        loading: false
      }
    },
    async fetch() {
      await this.loadProducts()
    },
  }
</script>

<style scoped lang="sass">
  .products-list
    display: grid
    grid-gap: 16px
    grid-template-columns: repeat(auto-fill, 264px)
    grid-auto-flow: dense

</style>
