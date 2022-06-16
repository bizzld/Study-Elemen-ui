<template>
  <div class="transfer">
    <el-row>
      <el-col>
        <el-transfer :data="data"  v-model="value"  >

        </el-transfer>

      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-transfer :data="data"  v-model="value2"   filterable >

        </el-transfer>

      </el-col>
    </el-row>

  </div>

</template>

<script>
export default {
  name: "Tranfer",
  data(){
    return {
      data:[
        {
          key: 1,
          label:'上海'

        },
        {
          key : 2,label:'北京'

        },{
          key : 3,label:'武汉'

        },
        {
          key : 4,label:'深圳',disabled:true

        },




      ],
      value:[1,4],
      value2:[],

    }
  }
}
</script>

<style scoped>
.transfer {
  text-align: left;
}

</style>