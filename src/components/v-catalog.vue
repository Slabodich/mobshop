<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
    </div>
    <div class="v-catalog__list">
        <v-catalog-item
            v-for="prodact in products"
            :key="prodact.article"
            :product_data="prodact"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        data(){
            return{
                products : [
                    {
                        image: "1.webp",
                        name: "iphone 11 pro",
                        price: 60000,
                        article: "mob1",
                        available: true
                    },
                    {
                        image: "2.webp",
                        name: "samsung galaxy s20",
                        price: 55000,
                        article: "mob2",
                        available: true
                    },
                    {
                        image: "2.webp",
                        name: "samsung galaxy s20",
                        price: 55000,
                        article: "mob3",
                        available: true
                    },
                    {
                        image: "2.webp",
                        name: "samsung galaxy s20",
                        price: 55000,
                        article: "mob3",
                        available: true
                    }
                ]
            }
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
    }
</style>