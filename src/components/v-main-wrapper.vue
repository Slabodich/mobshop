<template>
    <div class="v-main-wrapper">
        <v-catalog />
        <v-cart />
    </div>
</template>

<script>
    import vCatalog from './v-catalog'
    import vCart from './v-cart'

    export default {
        name: 'v-main-wrapper',
        components: {
            vCatalog,
            vCart
        },
        props: {

        },
        data() {
            return{

            }
        },
        mounted(){

        }
    }
</script>

<style >
    .v-main-wrapper{

        max-height: 900px;
        margin: 0 auto;
        padding: 50px;


    }
</style>