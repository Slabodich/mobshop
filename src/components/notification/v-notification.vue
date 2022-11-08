<template>
    <div class="v-notification">
        <transition-group
                name="v-transition-animate"
                class="massages_list"

        >
            <div
                    class="v-notification__content"
                    v-for="message in messages"
                    :key="message.id"
            >
                <div class="content__text">
                    <span>{{message.name}}</span>
                    <i class="material-icons">check_circle</i>
                </div>
                <div class="content__button">
                    <button v-if="leftButton.length">{{leftButton}}</button>
                    <button v-if="leftButton.length">{{rightButton}}</button>
                </div>
            </div>
        </transition-group>

    </div>
</template>

<script>
    export default {
        name: "v-notification",
        props: {
            messages: {
                type: Array,
                default() {
                    return []
                }
            },
            rightButton: {
                type: String,
                default() {
                    return '';
                }
            },
            leftButton: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        methods:{
            hideNotification(){
                let vm = this
                if (this.messages.length){
                    setTimeout(function () {
                        vm.messages.splice(vm.messages.length - 1, 1)
                    },3000)
                }
            }
        },
        mounted() {
            this.hideNotification()
        },
        watch: {
            messages: {
                handler(){
                    this.hideNotification()
                },
                deep: true
            }
        },

    }
</script>

<style lang="scss">
    .v-notification{
        position: fixed;
        top: 80px;
        right: 16px;
        z-index: 11;
        &__massages_list{
            display: flex;
            flex-direction: column-reverse;
        }
        &__content{
            padding: $padding*2;
            border-radius: 4px;
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            margin-bottom: $margin*2;
            background: green;
        }
        .content{
            &__text{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        .material-icons{
            margin-left: $margin*2;
        }
    }

    .v-transition-animate{

        &-enter-from{
            transform: translateX(120px);
            opacity: 0;
        }
        &-enter-active{
            transition: all .6s ease;
        }
        &-enter-to{
            opacity: 1;
        }
        &-leave-from{
            height: 50px;
            opacity: 1;
        }
        &-leave-active{
            transition: transform .6s ease, opacity .6s, height .6s .2s;
        }
        &-leave-to{
            height: 0;
            transform: translateX(120px);
            opacity: 0;
        }
        &-move{
            transition: transform .6s ease;
        }
    }
</style>