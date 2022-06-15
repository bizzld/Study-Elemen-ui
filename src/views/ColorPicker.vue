<template>
  <div class="colorpicker">

    <el-row>
      <el-col :span="6">
        <el-color-picker v-model="color1"></el-color-picker>

      </el-col>

      <el-col :span="6">
        <el-color-picker v-model="color2"></el-color-picker>
      </el-col>

      <el-col :span="6">
        <el-color-picker v-model="color3" show-alpha ></el-color-picker>
      </el-col>

      <el-col :span="6">
        <el-color-picker  show-alpha  :predefine="predefine"></el-color-picker>

      </el-col>



    </el-row>





  </div>

</template>

<script>
export default {
  name: "ColorPicker",
  data(){
    return{
      color1:'red',
      color2: null,
      color3:'blue,0.5',
      predefine:[
          'green',
          'black',



      ]



    }



  }
}
</script>

<style scoped>

</style>