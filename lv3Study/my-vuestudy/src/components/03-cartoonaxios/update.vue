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
            <el-select v-model="ruleForm.options" placeholder="请选择">
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
              <el-date-picker v-model="ruleForm.valuedate" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="评分" prop="valuescore">
            <el-rate
              v-model="ruleForm.valuescore"
              allow-half
              show-score
              text-color="#ff9900"
              score-template="{value}"
              id="score-control"
            ></el-rate>
          </el-form-item>
          <el-form-item label="预览图">
            <!-- <el-input v-model="ruleForm.img"></el-input> -->
            <!-- <el-upload action="/cartoon/uploadImages" list-type="picture-card" :auto-upload="false" :on-remove="handleRemove">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>-->
            <!-- <el-upload
              action="/cartoon/uploadImages"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
             :on-success="handleSuccess"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>-->

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
export default {
  data() {
    return {
      // 图片
      dialogImageUrl: " ",
      dialogVisible: false,
      disabled: false,
      labelPosition: "right",
      fileList: [],

      //上传
      ismultple: false,
      isupload: true,
      limit: 1,
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
        valuedate: "",
        valuescore: 0,
        options: ""
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
        ],
        time: [
          {
            trigger: "blur"
          }
        ]
      }

      // types
    };
  },
  mounted() {
    console.log(this.$route.query);
    axios
      .get("/cartoon/getall", {
        params: {
          _id: this.$route.query._id
        }
      })
      .then(res => {
        console.log(res);
        console.log(this.ruleForm);
        if (res.data) {
          this.ruleForm._id = res.data[0]._id;
          this.ruleForm.name = res.data[0].name;
          this.ruleForm.imgs =
            "http://localhost:3000/files/" + res.data[0].imgs;
          this.ruleForm.valuescore = res.data[0].value;
          this.ruleForm.options = res.data[0].types;
          this.ruleForm.time = res.data[0].time;
          this.ruleForm.valuedate = res.data[0].date;
          this.ruleForm = [...this.ruleForm];
          console.log(this.ruleForm);
        }
      })
      .catch(function(error) {});
  },
  methods: {
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
      // console.log(imgdata);
      this.dialogImageUrl = imgdata;
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
          axios
            .get("/cartoon/update", {
              params: {
                name: this.ruleForm.name,
                types: this.ruleForm.options,
                date: this.ruleForm.valuedate,
                value: this.ruleForm.valuescore,
                time: this.ruleForm.time,
                imgs: this.dialogImageUrl
              }
            })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.error(err);
            });

          alert("submit!");
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