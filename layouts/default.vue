<template>
  <div class="container">
    <common-navbar :toggleCart="toggleCart"/>
    <main class="main">
      <cart :toggleCart="toggleCart" :cartIsOpen="cartIsOpen"/>
      <div class="main__header">
        <h1 class="main__title">Главная</h1>
        <Select/>
      </div>
      <div class="main__content">
        <products-list-filter/>
        <Nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
  import ProductsListFilter from '~/components/products-list/ProductsListFilter'
  import CommonNavbar from '~/components/CommonNavbar'
  import Cart from "../components/cart/Cart";
  import Select from "../components/UI/Select";

  export default {
    components: {CommonNavbar, ProductsListFilter, Cart, Select},
    methods: {
      toggleCart() {
        this.cartIsOpen = !this.cartIsOpen
        document.querySelector('body').classList.toggle('cart_open')
      },
    },
    data() {
      return {
        cartIsOpen: false,
      }
    },
    beforeCreate() {
      this.$nuxt.$router.push({path: '/categories/1'});
    },


  }
</script>

<style lang="sass">
  @import "assets/sass/initial-variables"

  .main
    &__header
      display: flex
      justify-content: space-between

    &__title
      font-size: 2em
      color: $gray
      margin-bottom: 24px

    &__content
      display: grid
      grid-auto-flow: column
      grid-gap: 40px
      grid-auto-columns: 20% 80%

  .cart_open
    overflow: hidden


</style>
