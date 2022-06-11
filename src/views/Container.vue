<template>
<div class="container">
  <el-container>
    <el-header>i am header</el-header>
    <el-container>

      <el-aside>i am aside</el-aside>
      <el-main>i am main</el-main>

    </el-container>


    <el-footer>i am bottom</el-footer>


  </el-container>



</div>


</template>

<script>
export default {
  name: "container"
}
</script>

<style scoped>
.el-container{
  background-color:#eee;
}
.el-header{
  background-color:#67C23A;
  color:white;
  font-size:20px;



}
.el-footer{
  background-color:#F56C6C;





}
.el-aside{
  background-color:#909399;
  max-width:200px;
  min-height:350px;



}

.el-main{
  background-color: #409EFF;
  min-height:350px;



}




</style>