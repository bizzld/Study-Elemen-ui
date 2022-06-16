<template>
  <div class="progress and avatar">
    <el-row>
      <el-progress  :percentage="60">



      </el-progress>


    </el-row>
    <el-row>
      <el-progress  :percentage="100" status="success"></el-progress>


    </el-row>
    <el-row>
      <el-progress  :percentage="50"  :text-inside="true" :stroke-width="30" ></el-progress>


    </el-row>
    <el-row>
      <el-progress  :percentage="50"  type="circle" status="success"  ></el-progress>


    </el-row>

    <el-row>
      <el-progress  :percentage="50"  type="dashboard"   ></el-progress>


    </el-row>

    <el-row>
      <el-col>
        <el-avatar src="https://pic.imgdb.cn/item/62aaf3160947543129f4456f.jpg"  >



        </el-avatar>

      </el-col>
      <el-col>
        <el-avatar src="https://pic.imgdb.cn/item/62aaf3160947543111129f4456f.jpg"  @error="errorHandle" >
          <img  src="https://pic.imgdb.cn/item/62aaf43d0947543129f71e87.jpg" />




        </el-avatar>

      </el-col>



    </el-row>





  </div>


</template>

<script>
export default {
  name: "Avatar",


  methods:{
    errorHandle(){
      return true



    }

  }
}
</script>

<style scoped>

</style>