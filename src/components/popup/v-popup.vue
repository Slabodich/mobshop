<template>
    <div
            class="popup_wrapper"
            @click="closePopup"
    >
        <div
                class="v-popup"
                @click.stop=""
        >
            <div class="v-popup__header">
                <span>{{popUpTitle}}</span>
                <span>
                <i
                        class="material-icons"
                        @click="closePopup"
                >
                    close</i>
            </span>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button
                        class="close_modal btn"
                        @click="closePopup"
                >
                    Close</button>
                <button
                        class="submit_btn btn"
                        @click="addBtnAction"
                >
                    {{rightBtnTitle}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "v-popup",
        props:{
          rightBtnTitle: {
              type: String,
              default(){
                  return 'Ok'
              }
          },
            popUpTitle:{
              type: String,
                default() {
                    return "Popup name";
                }
            }
        },
        methods:{
            closePopup(){
                this.$emit('closePopup')
            },
            addBtnAction(){
                this.$emit('addBtnAction')
            }
        },
    }

</script>

<style lang="scss">
    .popup_wrapper{
        background: rgba(64,64,64,.4);
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
    }
    .v-popup{
        padding: $padding*2;
        position: fixed;
        top: 130px;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        z-index: 10;
        &__header, &__footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .submit_btn{
            padding: $padding;
            color: #ffffff;
            background: $bg-add;
            border: none;
        }
        .close_modal{
            padding: $padding;
            color: #ffffff;
            border: none;
            background: $bg-delete;
        }
        i{
            cursor: pointer;
        }
    }
</style>