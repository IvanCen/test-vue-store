import Category from '~/api/categories'


export const state = () => ({
  categories: null,
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchCategories({commit}) {
    commit('setCategories', await Category.list())
  },
}

export const getters = {
  allCategories: (state) => state.categories
}
