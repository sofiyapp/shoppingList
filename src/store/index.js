import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        cart,
        products
    },
    
    state:{
    },
    getters:{
    },
    actions,
    mutations:{
    }
})