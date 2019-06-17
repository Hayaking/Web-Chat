<template>
    <div v-if="!state" class="box-card">
        <ElForm label-width="100px">
            <ElFormItem label="账号">
                <ElInput type="text" autocomplete="off" v-model="user.account"></ElInput>
            </ElFormItem>
            <ElFormItem label="密码">
                <ElInput type="password"  autocomplete="off" v-model="user.password"></ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElButton type="primary" @click="login">提交</ElButton>
                <ElButton >重置</ElButton>
            </ElFormItem>
        </ElForm>
    </div>
    <div v-else class="box-card">
       <span>登陆成功</span>
       <span style="float: right"><button @click="logout">注销</button></span>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return{
                user:{
                    account: '0000',
                    password: '123',
                    token: ''
                },
                state: false
            }
        },
        mounted(){
            let token = localStorage.getItem('haya_token');
            if (token) {
                this.state = true;
            }
        },
        methods:{
            login() {
                this.axios.request({
                    url: 'http://127.0.0.1:8081/user/login',
                    data: this.user,
                    method: 'post',
                    headers: {'Content-Type': 'application/json'}
                }).then(res => {
                    if (res.data.state === 'success') {
                        let token = res.data.body;
                        localStorage.setItem('haya_token', token);
                        this.user.token = token;
                        this.state = true;
                    }
                });
            },
            logout() {
                this.axios.request({
                    url: 'http://127.0.0.1:8081/user/logout',
                    data: this.user,
                    method: 'post',
                    headers: {'Content-Type': 'application/json'}
                }).then(res => {
                    console.info(res);
                    localStorage.removeItem('haya_token');
                    this.state = false;
                });
            }
        }
    }
</script>

<style>
    .box-card {
        width: 400px;
    }
</style>
