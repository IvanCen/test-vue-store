<template>
  <div class="rating">
    <img src="~assets/icons/star.svg">
    <span>{{rating}}</span>
  </div>
</template>

<script>
  export default {
    name: "Rating",
    props: {
      rating: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "assets/sass/initial-variables"

  .rating
    +flexCenter
    width: 20px
    height: 20px
    color: $sun
    font-size: 10px
    line-height: 13px
</style>
