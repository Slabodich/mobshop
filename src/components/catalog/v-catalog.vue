<template>
    <div class="v-catalog">
        <router-link :to="{name:'cart', params: {cart_data: CART}}">
            <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>

        <h1>Catalog</h1>
        <div class="v-catalog__filters">
            <v-select
                    :options="categories"
                    @select="sortByCatigories"
                    :selected="selected"
            />
            <div class="v-catalog__range-slider">
                <input
                        type="range"
                        min="10000"
                        max="100000"
                        step="1000"
                        v-model.number="minPrice"
                        @change="setRangeSlider"
                >
                <input
                        type="range"
                        min="10000"
                        max="100000"
                        step="1000"
                        v-model.number="maxPrice"
                        @change="setRangeSlider"
                >
            </div>
            <div class="range-value">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>

    </div>
    <div class="v-catalog__list">
        <v-catalog-item
            v-for="product in filerProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import vSelect from '../v-select'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSelect
        },
        data(){
            return {
                categories: [
                    {name: 'Все', value: 'all'},
                    {name: 'Samsung', value: 'sPh'},
                    {name: 'Iphone', value: 'iPh'},
                    {name: 'Xiaomi', value: 'xPh'}
                ],
                selected:'Все',
                sortedProducts: [],
                minPrice:'0',
                maxPrice:'100000'
            }
        },
        computed: {
           ...mapGetters([
               'PRODUCTS',
               'CART'
           ]),
            filerProducts(){
               if(this.sortedProducts.length){
                   return this.sortedProducts
               }else{
                   return this.PRODUCTS
               }
            }

        },
        methods: {
          ...mapActions([
              'GET_PRODUCTS_FROM_API',
              'ADD_TO_CART'
          ]),
            setRangeSlider(){
              if(this.minPrice >this.maxPrice){
                  let tmp = this.maxPrice
                  this.maxPrice = this.minPrice
                  this.minPrice = tmp
              }
              this.sortByCatigories()
            },
            sortByCatigories(category){
                let vm = this
                this.sortedProducts = [...this.PRODUCTS]
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice
                })
                if(category){
                    this.sortedProducts = this.sortedProducts.filter(function (e) {
                        vm.selected === category.name
                        return e.category === category.name
                    })
                }
                this.selected = category.name
            },
            addToCart(data){
              this.ADD_TO_CART(data)
            },

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()

        }
    }
</script>

<style lang="scss">
    .v-catalog{
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

        }
        &__link_to_cart{
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
        }
        &__filters{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__range-slider{
            width: 200px;
            margin: auto 16px;
            text-align: center;
            position: relative;

        }
        &__range-slider svg, &__range-slider input[type=range]{
            position: absolute;
            left: 0;
            bottom: 0;
        }
        input[type=range]::-webkit-slider-thumb {
            z-index: 2;
            position: relative;
            top: 2px;
            margin-top: -7px;
        }

    }
</style>