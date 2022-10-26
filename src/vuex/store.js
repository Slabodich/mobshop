 import Vuex from 'vuex'
 import axios from 'axios'

let store = new Vuex.Store({
    state:{
        products: [],
        cart: []
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if(state.cart.length){
                let isProductExist = false
                state.cart.map(function (item) {
                    if(item.article === product.article){
                        isProductExist = true
                        item.quantity++
                    }
                })
                if (!isProductExist){
                    state.cart.push(product)
                }
            }else {
                state.cart.push(product)
            }

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1){
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API(context) {
            return axios
                .get('http://localhost:3000/products')
                .then((products) => {
                    context.commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
            })
                .catch((error) => {
                console.log(error)
                return error;
            })
        },
        ADD_TO_CART(context, product) {
            context.commit('SET_CART',product)
        },
        DELETE_FROM_CART(context, index) {
            context.commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM(context, index) {
            context.commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM(context, index) {
            context.commit('DECREMENT', index)
        }
    },
    getters:{
        PRODUCTS(state) {
            return state.products;
        },
        CART(state){
            return state.cart;

        }
    },

});

 export default store;