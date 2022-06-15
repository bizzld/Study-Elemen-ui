<template>
 <div class="form">
<!--   变成一行:inline="true"-->
   <el-form   :model="form"  :inline="true"  :rules="rules"  ref="form">
     <el-form-item label="活动名称"   prop="name">
       <el-input  v-model="form.name"></el-input>
     </el-form-item>
     <el-form-item    >
       <el-button @click="onsubmit('form')"    >提交表单</el-button>

     </el-form-item>

   </el-form>


 </div>

</template>

<script>
export default {
  name: "Form",
  data(){
    return {
      form: {
        name: '',
      },
      rules:{
        name:[
          {required:true, message: '请输入活动名称',trigger:'blur'},
          {min:3, max:5,message:'长度在3-5个字符', trigger: 'blur'}

        ]
      }

    }

  },
  methods:{
    onsubmit(formName){
      this.$refs[formName].validate((valid) =>{
        if(valid){
          alert('sumbit')

        }else {
          return false
        }


      })
    }

  }
}
</script>

<style scoped>

</style>