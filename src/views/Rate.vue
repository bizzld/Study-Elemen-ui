<template>

  <div class="rate">
    <el-rate  v-model="value1" :colors="colors">

    </el-rate>
    <el-rate  v-model="value2" :colors="colors"  show-text >

    </el-rate>
    <el-rate  v-model="value3" :colors="colors"  show-score disabled >

    </el-rate>




  </div>


</template>

<script>
export default {
  name: "Rate",

  data(){
    return {

      value1: '',
      value2:'',
      value3:3.5,

      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }


  }
}
</script>

<style scoped>

</style>