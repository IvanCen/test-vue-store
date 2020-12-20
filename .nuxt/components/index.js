export { default as CommonNavbar } from '../../components/CommonNavbar.vue'
export { default as Rating } from '../../components/UI/Rating.vue'
export { default as Select } from '../../components/UI/Select.vue'
export { default as Cart } from '../../components/cart/Cart.vue'
export { default as CartProductsList } from '../../components/cart/CartProductsList.vue'
export { default as ProductListCard } from '../../components/products-list/ProductListCard.vue'
export { default as ProductsList } from '../../components/products-list/ProductsList.vue'
export { default as ProductsListFilter } from '../../components/products-list/ProductsListFilter.vue'

export const LazyCommonNavbar = import('../../components/CommonNavbar.vue' /* webpackChunkName: "components/CommonNavbar" */).then(c => c.default || c)
export const LazyRating = import('../../components/UI/Rating.vue' /* webpackChunkName: "components/UI/Rating" */).then(c => c.default || c)
export const LazySelect = import('../../components/UI/Select.vue' /* webpackChunkName: "components/UI/Select" */).then(c => c.default || c)
export const LazyCart = import('../../components/cart/Cart.vue' /* webpackChunkName: "components/cart/Cart" */).then(c => c.default || c)
export const LazyCartProductsList = import('../../components/cart/CartProductsList.vue' /* webpackChunkName: "components/cart/CartProductsList" */).then(c => c.default || c)
export const LazyProductListCard = import('../../components/products-list/ProductListCard.vue' /* webpackChunkName: "components/products-list/ProductListCard" */).then(c => c.default || c)
export const LazyProductsList = import('../../components/products-list/ProductsList.vue' /* webpackChunkName: "components/products-list/ProductsList" */).then(c => c.default || c)
export const LazyProductsListFilter = import('../../components/products-list/ProductsListFilter.vue' /* webpackChunkName: "components/products-list/ProductsListFilter" */).then(c => c.default || c)
