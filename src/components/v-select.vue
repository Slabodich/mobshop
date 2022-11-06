<template>
    <div class="v-select">
        <p
                class="v-select__title"
                @click="areOptionsVisible = !areOptionsVisible"
        >
            {{selected}}
        </p>
        <div
                class="v-select__options"
                v-if="areOptionsVisible"
        >
            <p
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-select",
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data(){
            return{
                areOptionsVisible: false
            }
        },
         methods: {
            selectOption(option){
                 this.$emit('select', option)
                 this.areOptionsVisible = false
            },
             hideSelect(){
                 this.areOptionsVisible = false
             }
         },
         mounted(){
             document.addEventListener('click', this.hideSelect.bind(this), true)
         },
    }
</script>

<style lang="scss">
    .v-select{
        position: relative;
        width: 200px;
        cursor: pointer;

        &__options{
            border: solid 1px #aeaeae;
            position: absolute;
            top: 30px;
            right: 0;
            width: 100%;
            background: white;
            p{
                margin: 0;
            }
            p:hover{
                background: #e7e7e7;
            }
        }
        &__title{
            border: solid 1px #aeaeae;
            padding: $padding;
        }
    }

</style>