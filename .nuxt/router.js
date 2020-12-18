import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _97f7f5e6 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _91f76be8 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _51454c94 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _3e2cb117 = () => interopDefault(import('../pages/categories/_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _00a57bde = () => interopDefault(import('../pages/products/_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _db6eb496 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _97f7f5e6,
    name: "cart"
  }, {
    path: "/categories",
    component: _91f76be8,
    name: "categories"
  }, {
    path: "/products",
    component: _51454c94,
    name: "products"
  }, {
    path: "/categories/:category",
    component: _3e2cb117,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _00a57bde,
    name: "products-product"
  }, {
    path: "/",
    component: _db6eb496,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
