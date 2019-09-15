### 第十一讲===>vue的生命周期

- #### 需要频繁的创建和销毁组件

  - #### 比如页面中部分内容显示与隐藏，但是用的是v-if

- #### 组件缓存

  - #### 内置组件中<keep-alive>

  - #### 被其包裹的组件，在v-if=false的时候，不会销毁，而是停用

  - #### v-if="true" 不会创建,而是激活

  - #### 避免频繁创建组件对象的性能损耗

  - #### 组件的激活和停用

    - #### activated 和 deactivated

- #### 成对比较

  - #### created 和 beforeCreate 

    - #### A 可以操作数据 B 数据没有初始化

  - #### mounted 和 beforeMount

    - #### A 可以操作DOM B 还未生成DOM

  - #### updated 和 beforeUpdate

    - #### A 可以获取最终数据 B 可以二次修改

  - #### destroyed 和 beforeDestroy

    ##### 性能调优：频繁销毁创建的组件使用内置组件**<keep-alive></keep-alive>**包裹