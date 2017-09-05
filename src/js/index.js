/**
 * Created by kongxiaojian on 2017/9/5.
 */
var Vue = require('./lib/vue');
var index = {
    vue:null,
    init:function () {
        this.vue = new Vue({
            data:{},
            el:'#app',
            components:{
                paint:require('../vue/app.vue')
            }
        });
    },
};
index.init();