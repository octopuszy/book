<template>
  <div class="all">
    <div class="card-header">
      <p class="title">心愿书单</p>
      <p class="add" @click="dialog = true"><i class="el-icon-plus"></i> 我想要</p>
    </div>
    <div class="card-body" v-infinite-scroll="load">
      <el-row class="item">
        <el-col :span="19" class="bookname">PHP 7 编程实战(博文视点出品) </el-col>
        <el-col :span="4" :offset="1" class="like"> <i class="el-icon-star-off click"></i> 10 </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="20" class="bookname">PHP 7 编程实战(博文视点出品) </el-col>
        <el-col :span="4" class="like"> <i class="el-icon-star-off click"></i> 10 </el-col>
      </el-row>


      <el-dialog title="填写心愿书单" :visible.sync="dialog"  width="30%">
        <el-form :model="bookForm" status-icon  label-width="100px" :rules="rules" ref="bookForm">
          <el-form-item label="书名" prop="bookname">
            <el-input v-model="bookForm.bookname"></el-input>
          </el-form-item>
          <el-form-item label="填写人" prop="username">
            <el-input v-model="bookForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('bookForm')">确认</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>

</template>

<script>
export default {
  name: "Want",
  data(){
    return{
      dialog:false,
      bookForm:{
        bookname:"",
        username:""
      },
      rules: {
        bookname: [
          { required: true, message: '请输入书名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        username:[
          { required: true, message: '请输入填写人', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    load:function (){
      console.log(1)
    },
    submitForm:function (formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped lang="stylus">
  .all
    margin 0 5px
  .card-header
    border-bottom: 1px solid #dcdfe6;
    overflow: hidden;
    padding 10px
    padding-top: 29px;
    .title
      font-size 14px
      float left
    .add
      color #03a1ff
      float right
      cursor pointer
  .card-body
    margin-top 10px
    padding-left 10px
    color #707070
    height 870px
    overflow auto
    .item
      line-height 30px
      .bookname
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        max-height: 30px;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      .like
        cursor pointer
        .click
          color #f8e614
</style>