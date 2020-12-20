import Product from '~/api/product'

export const state = () => ({
  products: null
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchProducts({commit}, {filter}) {
    commit('setProducts', await Product.list(filter))
  },
  filteredProducts({state, commit}, {filteredName}) {
    let filterName
    if (filteredName === 'цена') filterName = 'price'
    if (filteredName === 'популярности') filterName = 'rating'
    const filtered = state.products.sort((a, b) => {
      return a[filterName] - b[filterName];
    }).reverse()
    commit('setProducts', filtered)
  }
}

export const getters = {
  allProducts: (state) => state.products,
}
