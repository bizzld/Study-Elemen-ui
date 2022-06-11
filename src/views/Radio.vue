<template>
<div class="radio-check">
  <el-row>
    <el-radio v-model="sex" label="1" >男</el-radio>
    <el-radio   v-model="sex" label="0" >女</el-radio>



  </el-row>


  <el-row>
<!--    直接绑定在组里面 不用一个一个写进去-->
    <el-radio-group v-model="city">
<!--      <el-radio v-model="city" label="1">上海</el-radio>-->
<!--      <el-radio v-model="city" label="2">北京</el-radio>-->
<!--      <el-radio v-model="city" label="3">武汉</el-radio>-->
<!--上下两个一样的-->

      <el-radio v-model="city" :label="1">上海</el-radio>
      <el-radio v-model="city" :label="2" border>北京边框</el-radio>
      <el-radio v-model="city" v-bind:label="3" disabled>武汉禁用</el-radio>





    </el-radio-group>






  </el-row>
  <hr>


  <el-row>

    <el-radio-group v-model="city2" size="mini">



      <el-radio-button v-model="city" :label="1">上海</el-radio-button>
      <el-radio-button v-model="city" :label="2" >北京</el-radio-button>
      <el-radio-button v-model="city" :label="3" >武汉</el-radio-button>





    </el-radio-group>






  </el-row>
  <hr>


  <el-row>

    <el-radio-group v-model="city2"  size="medium"  @change="change">



      <el-radio-button v-model="city" :label="1">上海</el-radio-button>
      <el-radio-button v-model="city" :label="2" >北京</el-radio-button>
      <el-radio-button v-model="city" :label="3" >武汉</el-radio-button>





    </el-radio-group>






  </el-row>




  <hr>


  <el-checkbox-group v-model="checkList" :max="2" :min="1" >
    <el-checkbox label="音乐"></el-checkbox>
    <el-checkbox label="体育"></el-checkbox>
    <el-checkbox label="电脑"></el-checkbox>




  </el-checkbox-group>

  <hr>


  <el-checkbox-group v-model="checkList2" :max="2"  >
    <el-checkbox-button label="音乐"></el-checkbox-button>
    <el-checkbox-button label="体育"></el-checkbox-button>
    <el-checkbox-button label="电脑"></el-checkbox-button>




  </el-checkbox-group>









</div>



</template>

<script>
export default {
  name: "Radio",
  data(){
    return{
      // 默认选中
      sex: '1',
      // city:'1'
      city:1,
      city2:1,
      checkList:['音乐','体育'],
      checkList2:[]
    }




  },

  methods:{
    change(e){
      console.log(e)






}



  }
}



</script>

<style scoped>
.el-row {
  margin-top:20px;
}




</style>