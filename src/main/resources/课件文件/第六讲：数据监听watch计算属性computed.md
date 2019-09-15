### 第六讲===>数据监听watch计算属性computed

> #### watch监听单个，computed监听多个

思考业务场景：

1. 类似淘宝，当我输入某个人名字时，我想触发某个效果
2. 利用vue做一个简单的计算器



#### 当watch监听的是复杂数据类型的时候需要做深度监听（写法如下）

```
watch:{
            msg:{
              handler(val){
               if(val.text=='love'){
                alert(val.text)
               }
              },
              deep:true//开启深度监听
            }
          }
```

#### computed  监视对象,写在了函数内部,  凡是函数内部有this.相关属性,改变都会触发当前函数