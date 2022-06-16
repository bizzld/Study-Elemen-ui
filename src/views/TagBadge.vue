<template>
  <div class="class">

    <el-row>
      <el-tag>标签</el-tag>
      <el-tag type="success">标签</el-tag>
      <el-tag type="success" closable>标签</el-tag>



    </el-row>
    <hr>


      <el-tag :key="tag"   v-for="tag in tags" closable    @close="closeTag(tag)">{{tag}}</el-tag>


    <hr>
    <el-badge  :value="12">
      <el-button>

        评论
      </el-button>

    </el-badge>
    <hr>
    <el-badge  is-dot>
      <el-button >
        小红点


      </el-button>

    </el-badge>







  </div>

</template>

<script>
export default {
  name: "TagBadge",
  data(){
    return{
      tags:['标签1','标签2']

    }


  },
  methods:{
    closeTag(tag){
      //console.log(tag)
      //console.log(this.tags.indexOf(tag))
      this.tags.splice(this.tags.indexOf(tag),  1)




    }

  }
}
</script>

<style scoped>

</style>