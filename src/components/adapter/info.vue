<template>
    <div v-if="type==='RECEIVED'" class="received">
        <span class="received-name">{{from}}</span>
        <div class="received-body">{{body}}</div>
    </div>
    <div v-else class="send">
        <span class="send-body" >{{body}}</span>
        <span class="send-name" >{{from}}</span>
    </div>
</template>

<script>
    export default {
        name: 'message-item',
        props: {
            type: {
                type: String,
                default: 'RECEIVED'
            },
            body: {
                type: String,
                default: 'wtf'
            },
            from: {
                type: String,
                default: 'wtf'
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .received {float: left;}
    .send {float: right;}
    .received, .send {
        height: 40px;
        display: flex;
        width: 80%;
    }
    .received-body {
        width: 100%;
        background: cornflowerblue;
    }
    .received-name {
        display: inline;
        margin-right: 5px;
    }
    .send-name {
        display: inline;
        margin-left: 5px;
    }
    .send-body {
        display: inline;
        width: 100%;
        background: #50ed3d;
    }
    .send,.received {
        clear:both;
        margin-bottom: 5px;
    }
</style>
