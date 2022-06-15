<template>
  <el-row>
  <el-switch v-model="value"  active-color="green"  inactive-color="black"
  active-text="打开" inactive-text="关闭">



  </el-switch>
    <el-switch v-model="value2"  active-color="green"
               active-value="100"
               inactive-value="0"
               @change="switchChange"

              >



    </el-switch>


  </el-row>












</template>

<script>
export default {
  name: "Switch",
  data(){
    return {

      value:true,
      value2:'100'
    }
  },
  methods: {

    switchChange(value){
      console.log(value)
    }
  }

}
</script>

<style scoped>

</style>