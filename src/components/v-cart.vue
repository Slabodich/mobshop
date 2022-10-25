<template>
    <div class="v-cart"></div>
    <h1>Cart</h1>
    <p v-if="!CART.length">There are no products in cart... </p>
    <v-cart-item
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
    />
</template>

<script>
    import vCartItem from './v-cart-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-cart",
        components:{
          vCartItem
        },
        props: {
          /* cart_data: {
                type: Array,
                default() {
                    return []
                }
            }*/
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        },
        computed:{
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style scoped>

</style>