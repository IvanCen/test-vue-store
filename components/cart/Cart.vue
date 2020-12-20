<template>
  <div>
    <div @click="toggleCart" :class="['overlay', {'overlay_open': cartIsOpen}]"></div>
    <div :class="['cart-container', {'cart-container_open': cartIsOpen}]">
      <div v-show="status === statuses.creating" class="preloader preloader--fullpage"/>
      <div
          class="cart"
          :class="{ 'loading': status === statuses.creating }"
      >
        <div v-show="status === statuses.success" class="cart-message">
          <img class="cart-message__icon" src="~/assets/icons/ok.svg" alt="success">
          <h2 class="cart-message__title">
            Заявка успешно отправлена
          </h2>
          <p class="cart-message__text">Вскоре наш менеджер свяжется с Вами</p>
        </div>
        <div v-show="status === statuses.fail" class="cart-message">
          <div class="cart-message__icon">
            <img src="~/assets/icons/x-circle.svg" alt="fail">
          </div>
          <h2 class="cart-message__title">
            Что то пошло не так
          </h2>
        </div>
        <div class="cart-content-container" v-show="status !== statuses.success">
          <div class="cart__header">
            <h1 class="cart__title">Корзина</h1>
            <img @click="toggleCart" class="cart__close" src="~/assets/icons/close.svg" alt="fail">
          </div>
          <div class="cart__content" v-if="cartProducts.length !== 0">
            <h2 class="cart__subtitle">Товары в корзине</h2>
            <cart-products-list class="cart__list"/>
            <div class="cart-checkout">
              <form class="cart__form" @submit.prevent="onSubmit">
                <h2 class="cart__subtitle">Оформить заказ</h2>
                <div class="cart__field" :class="{ 'cart__field_invalid': isNameInvalid }">
                  <input @input="isButtonDisabled" placeholder="Ваше имя" v-model="name" type="text"
                         class="cart__input field__input">
                </div>
                <div class="cart__field" :class="{ 'cart__field_invalid': isPhoneInvalid }">
                  <masked-input @input="isButtonDisabled" placeholder="Телефон" type="tel"
                                class="cart__input field__input"
                                v-model="phone"
                                mask="\+\7 (111) 111-1111"/>
                </div>
                <div class="cart__field" :class="{ 'cart__field_invalid': isAddressInvalid }">
                  <input @input="isButtonDisabled" placeholder="Адрес" v-model="address" type="text"
                         class="cart__input field__input">
                </div>
                <button :disabled="buttonDisabled" type="submit"
                        :class="['button', 'button_theme_primary', 'button_size_large', {'button_disabled': buttonDisabled}]">
                  Отправить
                </button>
              </form>
            </div>
          </div>
          <div v-else class="cart__no-products">
            <h2 class="cart__text">Пока что вы ничего не добавили в корзину.</h2>
            <button class="button button_theme_primary button_size_large" @click="toggleCart">Перейти к выбору</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import MaskedInput from 'vue-masked-input'
  import CartProductsList from '~/components/cart/CartProductsList'

  const cartStatus = {
    init: 0,
    creating: 1,
    success: 2,
    fail: 3
  }

  export default {
    components: {CartProductsList, MaskedInput},
    props: {
      cartIsOpen: {
        type: Boolean,
        required: true
      },
      toggleCart: {
        type: Function,
        required: true,
      }
    },
    data() {
      return {
        name: '',
        phone: '',
        address: '',
        isNameInvalid: false,
        isPhoneInvalid: false,
        isAddressInvalid: false,
        status: cartStatus.init,
        statuses: cartStatus,
        buttonDisabled: true
      }
    },
    computed: {
      ...mapGetters({
        cartProducts: 'cart/productsList',
      })
    },
    methods: {
      isValid() {
        let valid = true
        if (this.name.length < 2) {
          this.isNameInvalid = true
          valid = false
        } else {
          this.isNameInvalid = false
        }
        if (this.phone.length !== 17) {
          this.isPhoneInvalid = true
          valid = false
        } else {
          this.isPhoneInvalid = false
        }
        if (!/\s/.test(this.address)) {
          this.isAddressInvalid = true
          valid = false
        } else {
          this.isAddressInvalid = false
        }
        return valid
      },
      isButtonDisabled() {
        this.buttonDisabled = !(this.name && this.phone && this.address);
      },
      onSubmit() {
        if (this.isValid()) {
          this.status = cartStatus.creating
          const success = this.$store.dispatch('cart/submit')
          this.status = success ? cartStatus.success : cartStatus.fail
          setTimeout(() => {
            this.status = cartStatus.init
          }, 2000)
        }
      }
    },
    head: {
      title: 'Cart | Clothing Store'
    }
  }
</script>

<style lang="sass">
  @import "~/assets/sass/initial-variables"

  $widthContainer: 460px

  .cart-root
    width: 100%

  .cart
    display: flex
    height: 100%
    padding: 48px


    &__field
      background: #F8F8F8
      border-radius: 8px
      margin-bottom: 16px

      &_invalid
        border: 1px solid red

      &:last-child
        margin-bottom: 24px

    &__subtitle
      margin-bottom: 16px
      font-size: 18px
      line-height: 23px
      color: $gray

    &__text
      font-size: 22px
      line-height: 28px
      margin-bottom: 24px


    &__list
      margin-bottom: 32px

    &__close
      cursor: pointer

    &__header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 24px

    &__input
      border: none
      background: inherit
      padding: 15px
      border-radius: 8px
      width: 100%

      &::placeholder
        color: $gray-light
        font-size: 16px
        line-height: 21px

    &-container
      position: fixed
      right: -$widthContainer
      width: $widthContainer
      height: 100%
      bottom: 0
      z-index: 1
      background-color: #fff
      flex-grow: 1
      transition: all .2s ease-out
      display: flex
      flex-direction: column
      align-items: stretch
      box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05)
      border-radius: 8px 0 0 8px

      &_open
        right: 0
        top: 0
        height: 100%

    &-message
      width: 100%
      padding: 3rem 0
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      flex-wrap: wrap

      &__icon
        margin-bottom: 24px

        img
          width: 3rem

      &__title
        font-weight: bold
        font-size: 24px
        line-height: 31px

      &__text
        font-size: 16px
        line-height: 21px
        color: $gray

    &__title
      font-size: 32px
      line-height: 41px
      font-weight: bold

    &-content-container
      width: 100%

  .button
    font-size: 16px
    line-height: 21px
    padding: 14px 20px
    text-decoration: none
    transition: $duration
    border: none
    cursor: pointer
    border-radius: $border-radius

    &:hover
      opacity: 0.7

    &_disabled
      background-color: $grey-extra-light
      cursor: default

    &_size_large
      width: 100%

    &_theme_primary
      color: #fff
      background: #000

  .overlay
    position: fixed
    z-index: 1
    left: 0
    pointer-events: none
    width: 80%
    height: 100%
    bottom: 0
    top: 64px
    display: none
    background-color: rgba(0, 0, 0, 0)
    transition: all .2s ease-out

    &_open
      display: block
      pointer-events: unset
      background-color: rgba(0, 0, 0, .4)
      left: 0
      top: 0
      width: 100%
      height: 100%

      &.body
        overflow: hidden


</style>
