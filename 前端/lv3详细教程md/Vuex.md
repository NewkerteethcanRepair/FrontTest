# Vuex

状态机

## 安装

```bash
 npm i vuex
```

## 使用

vuex 的核心概念：

- state：可以将 state 看作所有组件的公共 data
- getters：该属性的作用等同于组件内的 computed
- mutations：该属性的作用等同于组件内的 methods，**修改 state 的唯一途径**
- actions：作用和 mutations 类似，区别在于：
  - actions 不能直接操作 state
  - actions 用于处理异步方法
- modules：将 store 中的数据和操作进行模块化分类

### 辅助函数

