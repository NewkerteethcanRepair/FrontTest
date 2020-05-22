<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          style="max-width:300px"
        >
          <el-form-item label="电影名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="时长" prop="time">
            <el-input v-model="ruleForm.time"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="options">
            <el-select v-model="ruleForm.types" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="上映时间" prop="valuedate">
            <div class="block">
              <!-- <span class="demonstration">默认</span> -->
              <el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="评分" prop="valuescore">
            <el-rate
              v-model="ruleForm.value"
              allow-half
              show-score
              text-color="#ff9900"
              score-template="{value}"
              id="score-control"
            ></el-rate>
          </el-form-item>
          <el-form-item label="预览图">
            <template v-if="isupload===true">
              <img :src="ruleForm.imgs" width="120px" />
            </template>
            <el-upload
              class="upload-demo"
              action="/cartoon/uploadImages"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-progress="handleProgress"
              :on-success="handleSuccess"
              :file-list="fileList"
              list-type="picture"
              :multiple="ismultple"
              :limit="limit"
            >
              <el-button size="small" type="primary">点击重新更改图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const {
  mapActions,
  mapMutations,
  mapGetters,
  mapState
} = createNamespacedHelpers("cartoonindex");
export default {
  data() {
    return {
      // 图片
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      labelPosition: "right",
      fileList: [],

      //上传
      ismultple: false,
      isupload: true,
      limit: 1,
      // 判断没有更新照片的属性更新
      isimg: "",
      //评分

      //日期
      // valuedate: " ",
      // name: " ",
      // time: " ",
      //其他数据
      ruleForm: {
        name: " ",
        // region: "",
        // types: "",
        imgs: "",
        time: " ",
        types: " ",
        date: "",
        values: 0
      },
      options: [
        {
          value: "冒险",
          label: "冒险"
        },
        {
          value: "搞笑",
          label: "搞笑"
        },
        {
          value: "热血",
          label: "热血"
        },
        {
          value: "抑郁",
          label: "抑郁"
        },
        {
          value: "战斗",
          label: "战斗"
        }
      ],

      // 规则
      rules: {
        name: [
          { required: true, message: "请输入加入的电影名字", trigger: "blur" },
          { min: 1, max: 9, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ]
        // time: [
        //   {
        //     trigger: "blur"
        //   }
        // ]
      }

      // types
    };
  },
  watch: {
    updatedata(newval, oldval) {
      console.log(newval, oldval, 23131);
      this.ruleForm = new Object(newval[0]);
      console.log(12321412, this.ruleForm);
      // d.imgs = "http://localhost:3000/files/" + d.imgs;
      // d.value = d.value - 0;
      this.ruleForm.imgs = "http://localhost:3000/files/" + this.ruleForm.imgs;
      this.ruleForm.value = this.ruleForm.value - 0;
    }
  },
  computed: {
    ...mapState(["cartoondata", "total", "pageSize", "current", "updatedata"]),
    ...mapGetters(["packupdatedata"])
    // cartoondatas(){
    //   this.ruleForm=this.cartoondata;

    //   return this.ruleForm;
    //   // console.log();

    // }
  },
  mounted() {
    console.log(2222, this.$route.params);

    if (this.$route.params._id) {
      // axios
      //   .get("/cartoon/getall", {
      //     params: {
      //       _id: this.$route.params._id
      //     }
      //   })
      //   .then(res => {
      //     // console.log(res);
      //     if (res.data.length == 1) {
      //       console.log("12321", res.data);
      //       //  console.log(this.isimg);
      //       this.ruleForm._id = res.data[0]._id;
      //       this.ruleForm.name = res.data[0].name;
      //       this.ruleForm.imgs =
      //         "http://localhost:3000/files/" + res.data[0].imgs;
      //       this.ruleForm.valuescore = res.data[0].value;
      //       this.ruleForm.options = res.data[0].types;
      //       this.ruleForm.time = res.data[0].time;
      //       this.ruleForm.valuedate = res.data[0].date;
      //       this.isimg = res.data[0].imgs;
      //       this.ruleForm = { ...this.ruleForm };
      //       // console.log(111111,res.data);
      //       console.log(222222, this.isimg);
      //     }
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      this.updatecartoondataAsync(this.$route.params._id);
    }
  },
  methods: {
    ...mapActions(["updatecartoondataAsync"]),
    ...mapMutations([
      "getcartoondata",
      "storehandleSizeChange",
      "storehandleCurrentChange",
      "storesearch"
    ]),
    // 上传图片方法
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file.url);

      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleProgress() {
      console.log(this.isupload);

      this.isupload = false;
    },

    // handleDownload(file) {
    //   console.log(file);
    // },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      console.log(response);

      var imgdata = response.filename;
      this.dialogImageUrl = imgdata;

      // if(this.dialogImageUrl!=""){

      //   axios.post("/cartoon/deleteImages",{imgs:this.dialogImageUrl})
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   })

      // }
      // console.log(imgdata);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 路径处理工具
    getFileName(path) {
      var pos1 = path.lastIndexOf("/");
      var pos2 = path.lastIndexOf("\\");
      var pos = Math.max(pos1, pos2);
      if (pos < 0) return path;
      else return path.substring(pos + 1);
    },

    // 提交add按钮方法
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
          //      time: " ",
          // types: " ",
          // valuedate: "",
          // valuescore: 0,
          // options:"",
          if (this.dialogImageUrl == "") {
            this.dialogImageUrl = this.isimg;
          }

          // console.log(222222, this.dialogImageUrl);
        // name: " ",
        // // region: "",
        // // types: "",
        // imgs: "",
        // time: " ",
        // types: " ",
        // date: "",
        // values: 0
          axios
            .get("/cartoon/update", {
              params: {
                _id: this.ruleForm._id,
                name: this.ruleForm.name,
                types: this.ruleForm.types,
                date: this.ruleForm.date,
                value: this.ruleForm.value,
                time: this.ruleForm.time,
                imgs: this.dialogImageUrl
              }
            })
            .then(res => {
              console.log(res);
              if (res.data.ok == 1) {
                if (
                  this.dialogImageUrl != this.isimg &&
                  this.dialogImageUrl != ""
                ) {
                  console.log(213, this.isimg);
                  // log
                  axios
                    .post("/cartoon/deleteImages", { imgs: this.isimg })
                    .then(res => {
                      console.log(123123123, res);
                    })
                    .catch(err => {
                      console.error(err);
                    });
                }
              }
            })
            .catch(err => {
              console.error(err);
            });

          alert("提交成功!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-form-item {
  text-align: left;
}
form {
  margin: auto auto;
}
#score-control {
  /* text-align: center; */
  /* margin: 0 auto; */
  padding: 10px;
}
</style>