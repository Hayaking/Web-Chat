<template>
    <div>
        <div class="wrapper">
            <input  v-model="text" placeholder="说点什么..." class="h-input"/>
            <mt-button type="primary" class="h-button" @click="send">发送</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Editor",
        data() {
            return{
                text: ''
            }
        },
        methods:{
            send(){
                let message = {
                    account: 'haya',
                    token: '123',
                    to: 'haya',
                    text: this.text,
                    type: 'SEND'
                };
                this.$emit('send', message);
            }
        }
    }
</script>

<style scoped>

    .wrapper {
        display: flex;
        width: 100%;
    }

    .h-input {
        height: inherit;
        width: 80%;
    }
    .h-button {
        background: cornflowerblue;
        height: 50px;
        width: 20%;
    }
</style>