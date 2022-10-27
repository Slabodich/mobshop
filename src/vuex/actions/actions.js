import axios from "axios";

export default {
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
}