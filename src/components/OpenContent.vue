<template>
  <div class="createpage">
      <BookTitle pagename = "新建书籍"></BookTitle>
        <div class = "create"> 
            <!-- <button id = "ret">-返回主界面</button> -->
            <p class = "book-mes">章节名称</p>
            <input type = "text" name = "book-name" required class = 'book-input' v-model="charname">
            <p class = "book-mes">大纲</p>
            <textarea  name = "introduction" id = 'intro' placeholder="..." maxlength="5000"></textarea>
            <p class = "book-mes">内容</p>
            <textarea  name = "introduction" id = 'content' placeholder="..." maxlength="5000"></textarea>
      </div>
      <div class = 'btn'>
          <button id = 'confirm' @click="returnbooklist()">确定</button>
          <button id = 'cancel' @click="back()">取消</button>
      </div>

  </div>
</template>

<script>
import BookTitle from "./BookTitle"
export default {
  name: 'CreateContent',
  data(){
      return {
          charname:""
      }
  },
  components:{
      BookTitle
  },
  methods: {
        returnbooklist(){
          this.$router.push({
              name:'bookcontent',
              query:{
                  charname:this.charname,
              }
        })
      },
      back(){
          this.$router.back();
      }    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.createpage{
    width: 100%;
}

/* 书籍名称 */

.book-mes{
    width: 100%;
}
.book-input{
    width: 100%;
    height: 40px;
    border: 1px solid rgb(90, 130, 111);
    border-radius: 5px;
    background-color: aliceblue;
}
#intro{
    height: 100px;
    resize: none;
    border: 1px solid rgb(90, 130, 111);
    border-radius: 5px;

}
#content{
    height: 300px;
    resize: none;
    border: 1px solid rgb(90, 130, 111);
    border-radius: 5px;

}

/* 导入书籍封面 */
.coverimg{
    width: 50%;
    height: 344px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cover{
    width: 140px;
    height: 200px;
    color: rgb(59, 59, 59);
    background-color: aliceblue;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    border: 1px dashed rgb(90, 130, 111);
    border-radius: 5px;
    box-shadow: 4px 4px 5px rgb(151, 148, 148);
}
/* 确认创建书籍或者退出 */
.btn{
    margin-bottom: 20px;
    text-align: center;
    padding-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: right;
}
.btn button{
    
    margin-left: 4%;
    margin-right: 4%;
    width: 70px;
    height: 30px;
    border: 1px solid rgb(50, 103, 58);
    border-radius: 15px;
}
#confirm{
    background-color: rgb(50, 103, 58);
    color: aliceblue;
}
#cancle{
    border-radius: 15px;
    background-color: rgb(225, 225, 225);
}
</style>
