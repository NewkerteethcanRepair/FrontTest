<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <h1>计数器</h1>
          <h5>{{count}}</h5>
          <!-- <input type="text"  v-model="count"> -->
          <el-row>
            <el-col :span="18">
              <el-input placeholder="请输入内容" v-model="count" clearable></el-input>
            </el-col>

            <el-col :span="6">
              <el-button @click="increment" width=100%>+1</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      input: ""
    };
  },
  methods: {
    increment() {
      // ++自动转换
      this.count = this.count - 0 + 1;
    }
  }
};
</script>

<style>
</style>