<script>
    module.exports={
        components:{
            controllayer:require('./control-layer.vue'),
        },
        data:function(){
            return{
            }
        },
        computed:{
        },
        methods:{
        },
        watch:{
        }
    }
</script>
<template>
    <div class="paint" @touchmove.prevent.stop>
        <controllayer></controllayer>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../css/common";
    .paint{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>