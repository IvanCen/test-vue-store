<template>
  <div class="categories">
    <ul class="categories__list">
      <li
          v-for="category in categories"
          :key="category.id"
          class="categories__item"
          :class="{ 'categories__item_active': $route.params.category === `${category.id}` }"
      >
        <nuxt-link
            class="categories__link"
            :to="{
              name: 'categories-category',
              params: { category: `${category.id}` }
            }"
        >
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'ProductsListFilter',
    computed: {
      ...mapGetters({categories: "categories/allCategories"})
    },
    async mounted() {
      await this.$store.dispatch('categories/fetchCategories');
    },
  }
</script>

<style scoped lang="sass">
  @import "~/assets/sass/initial-variables"

  .categories
    display: flex

    &__list
      display: flex
      flex-direction: column
      flex-wrap: wrap
      list-style: none

    &__header
      font-weight: 500

    &__item
      margin-bottom: 16px

      &_active .categories__link
        text-decoration-line: underline
        color: $black

    &__link
      color: $gray
      text-decoration: none
      transition: $duration

      &:hover
        color: $black


</style>
