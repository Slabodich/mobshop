<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>

    export default {
        name: 'v-main-wrapper',

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