<template>
  <div class="all">
    <el-row :gutter="10" class="books" v-infinite-scroll="load">
      <el-col class="book" :span="8">
        <div class="book-img">
          <img src="@/assets/img/book.jpg" alt="bookname">
        </div>
        <a class="book-name">PHP7从入门到精通我说今晚ii据介绍</a>
        <el-row class="default">
          <el-col :span="8"><i class="el-icon-time"></i> 买入时间: </el-col>
          <el-col :span="16"> 2020-12-01 </el-col>
        </el-row>
        <el-row class="default">
          <el-col :span="8"><i class="el-icon-collection"></i> 状态: </el-col>
          <el-col :span="16" class="status-out"> 借出 </el-col>
        </el-row>
        <el-row class="default">
          <el-col :span="8"><i class="el-icon-user"></i> 借书人: </el-col>
          <el-col :span="16"> 张三 </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "Books",
  methods:{
    load:function (){
      console.log(1)
    }
  }
}
</script>

<style scoped lang="stylus">
  .all
    margin 15px 15px
    margin-right 0
    .books
      height 750px
      overflow:auto
      .book
        padding 20px 8px
        //box-shadow: 2px 5px 6px #dbdbdb;
        .book-img
          border 1px solid #eaeaea
          padding 2px
          text-align center
          img
            width 100%
        .book-name
          font-size 17px
          line-height 40px
          color #292929
          //color #e4393c
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          max-height: 40px;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        .default
          color #666
          line-height 20px
          font-size 12px
          .status-out
            color #e4393c
</style>