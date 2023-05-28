import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f0f5d0c4 = () => interopDefault(import('../pages/cotizacion.vue' /* webpackChunkName: "pages/cotizacion" */))
const _c426aa52 = () => interopDefault(import('../pages/Entrega.vue' /* webpackChunkName: "pages/Entrega" */))
const _6ca0ab53 = () => interopDefault(import('../pages/envio01.vue' /* webpackChunkName: "pages/envio01" */))
const _6cbcda55 = () => interopDefault(import('../pages/envio03.vue' /* webpackChunkName: "pages/envio03" */))
const _6ccaf1d6 = () => interopDefault(import('../pages/envio04.vue' /* webpackChunkName: "pages/envio04" */))
const _6960a475 = () => interopDefault(import('../pages/historialEnvio.vue' /* webpackChunkName: "pages/historialEnvio" */))
const _15df5328 = () => interopDefault(import('../pages/lineaTiempo.vue' /* webpackChunkName: "pages/lineaTiempo" */))
const _71880c7b = () => interopDefault(import('../pages/loading.vue' /* webpackChunkName: "pages/loading" */))
const _12cbb9e8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _35e8f92c = () => interopDefault(import('../pages/pago.vue' /* webpackChunkName: "pages/pago" */))
const _492416d1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cotizacion",
    component: _f0f5d0c4,
    name: "cotizacion"
  }, {
    path: "/Entrega",
    component: _c426aa52,
    name: "Entrega"
  }, {
    path: "/envio01",
    component: _6ca0ab53,
    name: "envio01"
  }, {
    path: "/envio03",
    component: _6cbcda55,
    name: "envio03"
  }, {
    path: "/envio04",
    component: _6ccaf1d6,
    name: "envio04"
  }, {
    path: "/historialEnvio",
    component: _6960a475,
    name: "historialEnvio"
  }, {
    path: "/lineaTiempo",
    component: _15df5328,
    name: "lineaTiempo"
  }, {
    path: "/loading",
    component: _71880c7b,
    name: "loading"
  }, {
    path: "/login",
    component: _12cbb9e8,
    name: "login"
  }, {
    path: "/pago",
    component: _35e8f92c,
    name: "pago"
  }, {
    path: "/",
    component: _492416d1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
