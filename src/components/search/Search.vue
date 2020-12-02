<template>
  <div class="all">
    <div style="margin-top: 15px;">
      <el-input placeholder="搜索书名" v-model="bookname" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      bookname:""
    }
  }
}
</script>

<style scoped lang="stylus">
  .all
    margin-left 15px
</style>