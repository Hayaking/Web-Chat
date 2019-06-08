<template>
    <Card class="box-card">
        <div class="clearfix" slot="header">
            <span>

            </span>
            <Button style="float: right; padding: 3px 0" type="text">
                操作op
            </Button>
        </div>
        <div :key="o" class="text item" v-for="o in 4">
            {{'列表内容 ' + o }}
        </div>
    </Card>
</template>

<script>
    import {Card, Button} from 'element-ui';
    export default {
        name: 'app',
        components:{Card, Button},
    }
</script>

<style>
    .box-card {
        width: 300px;
    }
</style>
