<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="18" :offset="3" class="main">
        <Header/>

        <el-row>
          <el-col :span="16" class="left">
            <Search/>
            <Tags/>
            <Books/>
          </el-col>
          <el-col :span="8" class="right">
            <Want/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Books from './components/booklist/Books'
import Tags from './components/tags/Tags'
import Search from './components/search/Search'
import Want from './components/want/Want'

export default {
  name: 'app',
  components: {
    Header,
    Books,
    Tags,
    Search,
    Want
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="stylus">
#app
  background #f3f3f3
  .main
    background #ffffff
    padding: 0 !important;
</style>
