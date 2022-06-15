<template>

  <div class="cascade" >
    <el-cascader v-model="value" :options="options"
    :show-all-levels="false" :props="props"
    >




    </el-cascader>




  </div>




</template>

<script>
export default {

  name: "Cascade",


  data(){
    return {
      value: '',
      props:{
        multiple: true,



      },

      options:[
        {

          value: 1,
          label:'城市',
          children:[
            {
              value:11,
              label:'北京',
              children:[
                {
                  value:111,
                  label:'海定区'
                },
                {
                  value:112,
                  label:'朝阳区'
                },

              ]



            },
            {
              value:22,
              label:'上海'


            },
          ]

        }




      ]



    }



  }
}
</script>

<style scoped>

</style>