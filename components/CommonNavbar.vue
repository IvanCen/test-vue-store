<template>
  <div class="navbar">
    <div class="navbar__logo">
      <nuxt-link class="navbar__link" to="/categories/1">
        <h1 class="navbar__title">TestList</h1>
      </nuxt-link>
    </div>
    <button
        class="navbar__cart"
        @click="toggleCart"
    >
      <img class="navbar__cart-image" src="~/assets/icons/cart.svg" alt="корзина">
      <span
          v-if="qty > 0"
          class="navbar__cart-count"
      >
        {{ qty }}
      </span>
    </button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'CommonNavbar',
    props: {
      toggleCart: {
        type: Function,
        required: true,
      }
    },
    computed: {
      ...mapGetters({
        qty: 'cart/productsQty'
      })
    }
  }
</script>

<style scoped lang="sass">
  @import "assets/sass/initial-variables"

  .navbar
    display: flex
    justify-content: space-between
    align-items: center
    background: #FFFFFF
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 0 0 8px 8px

    &__title
      font-size: 1.375em
      color: $gray
      text-decoration: none

    &__logo
      &:hover
        opacity: 0.7

    &__link
      text-decoration: none

    &__cart
      text-decoration: none
      position: relative
      cursor: pointer
      background-color: transparent
      border: none

      &-count
        width: 12px
        height: 12px
        background: $gray
        color: $light
        padding: 2px 4px
        border-radius: 50%
        font-size: 8px
        line-height: 10px
        position: absolute
        margin-left: -10px

      &-image
        width: 2rem
        height: 2rem
</style>
