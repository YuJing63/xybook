<template>
  <div class="chapterblock">
    <span @click="opencp()"><input type = "checkbox" :checked='cp.sel' @change="handlecp(cp.id)" v-if="isSel">
    {{cp.title}}</span>
  </div>
</template>

<script>

export default {
  name: 'BookChapter',
  props:["cp","checkcp","isSel","openCp"],
  methods:{
      handlecp(id){
          this.checkcp(id)
      },
      opencp(){
          // this.openCp(id)
              this.$router.push({
              name:'createcontent',
              // query:{
              //     chaptername:title,
              // }
        })
      }
  }
//   components:{
//       BookTitle,
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chapterblock{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
