<template>
<div class="Button">

  <el-button type="primary"  >按钮</el-button>
  <hr>
  <el-button type="danger"  >按钮</el-button>
  <hr>
  <el-button type="warning"  >按钮</el-button>
  <hr>
  <el-button type="success"  >按钮</el-button>
  <hr>
  <el-button type="info"  >按钮</el-button>

  <br>
  <br>
  <hr>

  <hr>
  <el-button type="warning" plain >按钮 镂空</el-button>
  <hr>
  <el-button type="success" plain circle >按钮 镂空</el-button>
  <hr>
  <el-button type="info" plain  disabled >按钮 镂空 禁用</el-button>
  <hr>

  <el-button type="warning"   class="el-icon-apple">按钮带着图标</el-button>
  <hr>
  <el-button type="text"  >变成文本</el-button>
  <hr>
  <el-button type="info"  >按钮</el-button>

  <hr>
  按钮组
  <hr>

  <el-row>
    <el-button-group>
      <el-button  type="danger">上一页</el-button>

    </el-button-group>
    <el-button-group>
      <el-button>下一页</el-button>

    </el-button-group>



  </el-row>



  <hr>

  <el-button  type="danger" :loading="true">加载中</el-button>


  <el-button type="info" size="mini"  >mini按钮</el-button>
  <el-button type="info" size="small"  >small按钮</el-button>


  <hr>









</div>




</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>

</style>