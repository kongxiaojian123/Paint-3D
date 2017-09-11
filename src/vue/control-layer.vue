<script>
    module.exports={
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
    <div class="control-layer">
    </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../css/common";
    .control-layer{
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        width: rpx(320);
        background: #333;
        @include prefit(box-shadow,0 0 10px rgba(#333,0.5));
    }
</style>