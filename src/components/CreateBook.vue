<template>
  <div class="createpage">
      <BookTitle pagename = "新建书籍"></BookTitle>
      <div class="crea">
        <div  class = "coverimg">
          <div class="cover">
              添加封面
          </div>
        </div>
        <div class = "create"> 
            <!-- <button id = "ret">-返回主界面</button> -->
            <p class = "book-mes">书籍名称</p>
            <input type = "text" name = "book-name" required class = 'book-input' v-model="bookMes.bookName" >
            <p class = "book-mes">目标字数(万)</p>
            <input type = 'number' name = "word-num" min='0' class = 'book-input' v-model="bookMes.wordNum">
            <p class = "book-mes">文集简介</p>
            <textarea cols= "25" rows = "5" name = "introduction" id = 'intro' placeholder="..." maxlength="150" v-model="bookMes.bookIntro"></textarea>
        </div>

      </div>
      <div class = 'btn'>
          <button id = 'confirm' @click="bookshow1()">确定</button>
          <button id = 'cancel' @click="bookshow1()">取消</button>
      </div>

  </div>
</template>

<script>
import BookTitle from "./BookTitle"
export default {
  name: 'CreateBook',
  components:{
      BookTitle
  },
  data(){
        return {
            bookMes:{
                bookName:'',
                wordNum:'',
                bookIntro:''
            }
        }
    },
    props:["userName"],
  methods: {
        // bookShow1(){
        //     this.$router.push({
        //         name:'bookshow',
        //     })
        // },
        
        bookshow1(){
				const self = this;
				if(self.bookMes.bookName != ""){
					self.$axios({
						method:'post',
						url: 'http://127.0.0.1:10520/api/book/addBook',
						data: {
                            bookName:self.bookMes.bookName,
                            wordNum : self.bookMes.wordNum,
                            bookIntro:self.bookMes.bookIntro,
                            username:self.userName,
						},
                        
					})
					.then( res => {
                        // alert("jinru")
						switch(res.data){
							case 0:
								alert("注册成功！");
                                this.changeType();
                                // this.$router.push({name:'login',})
								// this.login();
								break;
							case -1:
								this.existed = true;
                                alert("已存在");
								break;
						}
					})
					.catch( err => {
						console.log(err);
					})
				} else {
					alert("填写不能为空！");
				}
         },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.createpage{
    width: 100%;
}
/* 输入书的信息 */
.crea{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
/* 书籍名称 */
.create{
    padding: 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
}
.book-mes{
    width: 100%;
}
.book-input{
    height: 40px;
    border: 1px solid rgb(90, 130, 111);
    border-radius: 5px;
}
#intro{
    height: 100px;
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
