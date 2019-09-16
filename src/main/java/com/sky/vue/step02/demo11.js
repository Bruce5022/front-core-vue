<!-- 3.实例化 -->
var TestCom = {
    template: `
        <div>此处是父组件
        <div>信息：{{testMsg}}</div>
        <input type="text" v-model:value="testMsg">
        </div>
        `,
    data:function () {
        console.log("test--》data")
        return {
            testMsg:"测试内容"
        }
    },
    beforeCreate:function () {
        // 数据挂载前
        console.log("test--》beforeCreate--》msg："+this.testMsg)
    },
    created:function () {
        // 数据挂载后
        console.log("test--》created--》msg："+this.testMsg)
    },
    beforeMount:function () {
        // DOM挂载前
        console.log("test--》beforeMount-->DOM:"+document.body.innerHTML)
    },
    mounted:function () {
        // DOM挂载后
        console.log("test--》mounted-->DOM:"+document.body.innerHTML)
    },
    beforeUpdate:function () {
        // 数据更新前
        console.log("test--》beforeUpdate--》msg："+this.testMsg)
    },
    updated:function () {
        // 数据更新后
        console.log("test--》updated--》msg："+this.testMsg)
    },
    beforeDestroy:function () {
        // 销毁前
        console.log("test--》beforeDestroy--》msg："+this.testMsg)
    },
    destroyed:function () {
        // 销毁后
        console.log("test--》destroyed--》msg："+this.testMsg)
    }
}

// 想在页面上展示出来父组件中的内容，怎么展示呢？
// 下面的方式展示不出来，怎么办？
new Vue({
    el:'#app',
    components:{
        TestCom
    },
    template:`
        <div>
            <test-com v-if="testShow"></test-com>
            <button @click="destroyCom">销毁组件</button>
        </div>
    `,
    methods:{
        destroyCom:function () {
            this.testShow=!this.testShow
        }
    },
    data:function () {
        return {
            testShow:true
        }
    }
    
})