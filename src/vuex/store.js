 import Vuex from 'vuex'
 import axios from 'axios'

let store = new Vuex.Store({
    state:{
        products: []
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
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
        }
    },
    getters:{
        PRODUCTS(state) {
            return state.products;
        }
    },

});

 export default store;