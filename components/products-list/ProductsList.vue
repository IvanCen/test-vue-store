<template>
  <div class="products-list-container">
    <div v-show="loading" class="preloader preloader_relative"/>
    <div :class="['products-list', {'products-list_hide': loading}]" v-show="!loading">
      <products-list-card
          v-for="product in allProducts"
          :key="product.id"
          :product="product"
          :class="{ 'products-list_hide': loading }"
      />
    </div>
  </div>
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
    async mounted() {
      this.loading = true
      await this.loadProducts()
      this.loading = false
    }
  }
</script>

<style scoped lang="sass">
  @import "~/assets/sass/initial-variables.sass"

  .products-list
    display: grid
    grid-gap: 16px
    grid-template-columns: repeat(auto-fill, 264px)
    grid-auto-flow: dense

    &_hide
      display: none
</style>
