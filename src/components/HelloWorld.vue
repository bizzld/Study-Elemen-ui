<template>
  <div class="hello">
    <h1>{{ msg }}</h1>




    <el-row>
      <el-button type="success">
        clcik
      </el-button>

    </el-row>


  </div>



</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style >

</style>
