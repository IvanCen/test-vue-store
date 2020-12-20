<template>
  <div class="product-card">
    <img class="product-card__image" :src="`https://frontend-test.idaproject.com${product.photo}`" :alt="product.title">
    <img class="product-card__cart" src="~assets/icons/cart.svg" alt="иконка корзины" @click="addToCart">
    <rating class="product-card__rating" :rating="product.rating"></rating>
    <div class="product-card__title">
      {{ product.name }}
    </div>
    <div class="product-card__price">
      {{ product.price }} ₽
    </div>
  </div>
</template>

<script>
  import Rating from "../UI/Rating";

  export default {
    name: 'ProductsListCard',
    components: {Rating},
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('cart/addProduct', {
          product: this.product,
        })
      }
    },
  }
</script>

<style scoped lang="sass">
  @import "~/assets/sass/initial-variables"

  @mixin font
    font-size: 14px
    line-height: 18px

  .product-card
    flex: 0 0 100%
    width: 100%
    transition: $duration
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    background: #FFFFFF
    position: relative
    border-radius: 8px
    padding: 16px

    a
      text-decoration: none
      color: #000

    &__rating
      position: absolute
      top: 16px
      left: 16px

    &__image
      width: 232px
      height: 232px
      margin-bottom: 1rem

    &__cart
      position: absolute
      top: 16px
      right: 16px
      width: 16px
      height: 16px
      cursor: pointer

    &__title
      +font
      color: $gray
      margin-bottom: 6px

    &__price
      +font
      font-weight: bold


    &__footer
      display: flex
      justify-content: space-between
</style>
