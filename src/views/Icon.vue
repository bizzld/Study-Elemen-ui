<template>
<div class="icon link">
  <i class="el-icon-search"></i>


<!--  在button里面插入-->

  <el-button  type="primary"  class="el-icon-search">搜索</el-button>

  <br>
  <br>

  <el-link  href="https://zsp.vercel.app"    type="primary" :underline="false" >link 无下划线</el-link>
  <hr>
  <el-link href="https://www.baidu.com" disabled  type="success">link 被禁用</el-link>
  <hr>
  <el-link type="danger">link</el-link>
  <hr>
  <el-link type="warning">link</el-link>
  <hr>
  <el-link type="info">link</el-link>
  <hr>
  <el-link type="info"   class="el-icon-search">link 带图标</el-link>














</div>



</template>

<script>
export default {
  name: "Icon"
}
</script>

<style scoped>
.el-icon-search{
  font-size:100px;
  color:greenyellow;

}
/*.el-link{*/
/*  font-size:50px;*/

/*}*/


</style>