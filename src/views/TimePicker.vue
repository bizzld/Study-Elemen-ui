<template>

  <div class="timepicker">
    <el-row :gutter="10">
      <el-col :span="8">

<!--        时间选择-->
        <el-time-select v-model="value" @change="change"    :picker-options="{

          start:'08:30',
          // 隔30分钟
          step:'00:30',
          end:'19:00',



        }" placeholder="选择时间">




        </el-time-select>






      </el-col>

      <el-col :span="8">
        <el-time-picker v-model="value2"   arrow-control

          >




        </el-time-picker>



      </el-col>

      <el-col :span="8">
        <el-time-picker v-model="value2" arrow-control is-range
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间">




        </el-time-picker>



      </el-col>




    </el-row>



  </div>







</template>

<script>
export default {
  name: "TimePicker",
  data(){
    return {
      value:'',
      value2:'',

    }


  },
  methods:{
    change(value){
      console.log(value)



    }
  }
}
</script>

<style scoped>

</style>