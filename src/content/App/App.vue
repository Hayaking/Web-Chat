<template>
    <div class="h-main">
        <div class="h-head">
            <mt-header fixed style="width: 300px" title="固定在顶部">
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="h-content">
            <div v-for="item in message_list" :key="item.hash">
                <info :type='item.type' :body='item.text' :from='item.account'></info>
            </div>
        </div>
        <Editor class="h-footer" @send="send"></Editor>
    </div>
</template>

<script>
    import Editor from '@/components/Editor';
    import Info from '@/components/adapter/info';
    export default {
        name: 'app',
        components: {Editor,Info},
        data() {
            return {
                width: '300px',
                url: window.location.href,
                message_list: []
            };
        },
        mounted(){
            console.info(this.$socket);
            chrome.runtime.sendMessage(null,res=>{
                console.info(res)
            });
        },
        sockets: {
            rout_msg_to_client: function (data) {
                this.message_list.push(data);
                console.info(data);
            }
        },
        methods:{
            send(message) {
                this.message_list.push(message);
                this.$socket.emit('rout_msg_to_self', message);
                console.info(message);
            }
        }
    }
</script>

<style scoped>
    .h-main {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        width: 300px;
        height: 100%;
        background: #fff
    }

    .h-head {
        height: 5% !important;
        background: antiquewhite;
    }

    .h-content {
        padding: 2px !important;
        height: 89% !important;
        overflow-y: auto !important;
    }

    .h-footer {
        height: 6% !important;
        background: antiquewhite;
    }
</style>
