<template>
    <div class="v-catalog-item">

        <v-popup
                v-if="isInfoPopupVisible"
                @closePopup="closePopupInfo"
                rightBtnTitle="Add to cart"
                :popUpTitle="product_data.name"
                @addBtnAction="addToCart"
        >
            <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="webp">
            <div>
                <p class="v-catalog-item__name">{{product_data.name}}</p>
                <p class="v-catalog-item__price">Price: {{product_data.price}}</p>
                <p class="v-catalog-item__category">Category: {{product_data.category}}</p>
            </div>

        </v-popup>

        <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="webp">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">Price: {{product_data.price}}</p>
        <button
            class="v-catalog-item__show-info btn"
            @click="showPopupInfo"
        >
            Show info
        </button>
        <button
                class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
            Add to cart
        </button>
    </div>
</template>

<script>
    import vPopup from '../popup/v-popup'
    export default {
        name: "v-catalog-item",
        components:{
            vPopup
        },
        data(){
            return{
                isInfoPopupVisible: false
            }
        },
        props:{
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            },
        },
        methods: {
            addToCart(){
                this.$emit('addToCart', this.product_data)
            },
            closePopupInfo(){
                this.isInfoPopupVisible = false
            },
            showPopupInfo(){
                this.isInfoPopupVisible = true
            },
        },
        mounted(){
            const cartItemData = this.product_data;
            cartItemData.quantity = 1;
        }
    }
</script>

<style lang="scss">
 .v-catalog-item{
     flex-basis: 25%;
     box-shadow: 0 0 8px 0 #2c3e50;
     padding: $padding*2;
     margin-bottom: $margin*2;
     margin-top: $margin*5;
     &__add_to_cart_btn{
         background: $bg-add;
     }
     &__image{
         width: 200px;
     }
     &__show-info{
         margin-right: $margin;
         background: #2c3e50;
     }
 }
</style>