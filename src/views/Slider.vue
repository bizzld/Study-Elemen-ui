<template>
  <div class="slider">
    <el-row>
      <el-slider v-model="value"></el-slider>




    </el-row>
    <el-row>
      <el-slider v-model="value2" :show-tooltip="false"></el-slider>
    </el-row>
    <el-row>
      <el-slider v-model="value2" :format-tooltip="formattooltip"></el-slider>
    </el-row>
    <el-row>
<!--      加冒号设置，不加冒号直接给效果-->
      <el-slider v-model="value"  :step="10" show-stops></el-slider>
    </el-row>
    <el-row>
      <el-slider v-model="value2"  range   :min="1" :max="50"></el-slider>
    </el-row>
    <el-row>
      <el-slider v-model="value3"  range   :min="1" :max="50"></el-slider>
    </el-row>
    <el-row>
      <el-slider v-model="value2" show-input></el-slider>
    </el-row>









  </div>












</template>

<script>
export default {
  name: "Slider",
  data(){
    return {
      value:0,
      value2:50,
      value3:[4,10]
    }


  },
  methods:{

    formattooltip(value){
      return value/ 100



    }

  }
}
</script>

<style scoped>

</style>