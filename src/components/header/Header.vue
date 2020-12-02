<template>
  <div class="all">
    <el-row>
      <el-col :span="6" class="logo">
          <img src="@/assets/img/yidian_logo.png">
      </el-col>
      <el-col :span="1" :offset="17" class="login" >
        <p @click="loginDialog = true">登录</p>
      </el-col>
    </el-row>

    <el-dialog title="登录" :visible.sync="loginDialog"  width="30%" :before-close="handleDialogClose">
      <el-form :model="loginForm" status-icon  label-width="100px" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      loginDialog: false,
      loginForm:{
        name:"",
        pass:""
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pass:[
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods:{
    submitForm:function (formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleDialogClose:function (done){
      this.loginForm.name = ""
      this.loginForm.pass = ""
      done();
    }
  }
}
</script>

<style scoped lang="stylus">
.all
  border-bottom 1px solid #f3f3f3
  .right
    margin-right 20px
    line-height 50px;
    font-size 16px;
  .login
    font-size 14px
    line-height 50px
    cursor: pointer;

</style>