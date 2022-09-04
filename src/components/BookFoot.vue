<template>
  <div class = "bookfoot" v-if="isSel">
      <span v-if="muluOrRelation">已选择 {{selTotal}} / 总共 {{chapters.length}}</span>
      <span v-else>已选择 {{selre}} / 总共 {{relations.length}}</span>
      <div class = "operation">
          <button @click="selectAll">全选</button>
          <button @click="selectNone">全不选</button>
          <button>导出</button>
          <button @click="delCp">删除</button>
          <button @click="closeSel">完成</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'BookFoot',
    props:["chapters","relations","isSel","cloSel","selAll","selNone","muluOrRelation","delChapter"],
    computed:{
        selTotal(){
            return this.chapters.reduce((pre,current)=> pre + (current.sel?1:0),0)
        },
        selre(){
            return this.relations.reduce((pre,current)=> pre + (current.sel?1:0),0)
        }
    },
    methods: {
      closeSel(){
          this.cloSel()
      } ,
      selectAll(){
          this.selAll()
      },
      selectNone(){
          this.selNone()
      },
      delCp(){
          this.delChapter()
      }
    },
}
</script>

<style>
.bookfoot{
    height:200px;
    padding: 10px;
    padding-top:20px;
}
.operation{
    height: 100px;
    margin-top: 10px;
    text-align: center;
}
.operation button{
    border-radius: 10px;
    border-width: 0;
    color: aliceblue;
    background-color: rgb(126, 203, 153);
    height: 30px;
    width:60px;
    margin: 10px;
}
</style>