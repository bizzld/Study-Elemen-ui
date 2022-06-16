<template>
  <div class="datepicker">

    <el-row :gutter="10">
      <el-col :span="12">
        <el-date-picker  v-model="value"  type="datetime">




        </el-date-picker>

      </el-col>
      <el-col :span="12">
        <el-date-picker  v-model="value"  type="datetime"  :picker-options="getPicker"  format="yyyy 年 MM 月 dd 日" >




        </el-date-picker>

      </el-col>



      <el-col :span="12">
        <el-date-picker v-model="value"  type="month">







        </el-date-picker>




      </el-col>




    </el-row>






  </div>

</template>

<script>
export default {
  name: "DatePicker",
  data(){
    return {
      value:'',
      getPicker:{
        shortcuts:[
          {
            text: '今天',
            onClick(obj){
              obj.$emit('pick',new Date())


            }
          },
          {
            text: '昨天',
            onClick(obj){
              const date = new Date()
              date.setTime(date.getTime()-3600*1000*24)
              obj.$emit('pick',date)
            }
          }
        ]





      }
    }



  }
}
</script>

<style scoped>

</style>