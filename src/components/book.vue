<template>
  <div class="con">
      <button @click="test">试一下</button>
      <BookTitle pagename = "我的书籍" :username="$route.query.userName"></BookTitle>
      <div class="bookblock">
        <!-- <button id = "selectbook" @click="selbook">选择</button> -->
        <button id = "selectbook">选择</button>
        <!-- <button id = "deletebk" @click="deletebook">删除</button> -->
        <button id = "deletebk" >删除</button>
        <div class="booklist">
            <div id = 'newabook'>
              <p style="padding-top:30px">+</p>
              <p @click="newbook()">新建</p>
            </div>
            <BookName
              v-for="bkobj in books"
              :key="bkobj.id" 
              :bk="bkobj" 
              :checkbook="checkbook"
              :contentShow="contentShow"
            />
        </div>
      </div>

  </div>
</template>

<script>
import BookTitle from './BookTitle'
import BookName from './BookName'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Book',
  data(){
      return{
          // books:[
          //     {id : "0001" ,title:"longmao",coverimg:require('../assets/1.png'),sel:true},
          //     {id : "0002" ,title:"cghuan",coverimg:require('../assets/2.jpeg'),sel:false},
          //     {id : "0003" ,title:"fsggjsdigi",coverimg:require('../assets/3.png'),sel:false},
          //     {id : "0004" ,title:"hdh",coverimg:require('../assets/4.jpeg'),sel:false},
          //     {id : "0005" ,title:"gsg",coverimg:require('../assets/5.jpeg'),sel:false},
          //     {id : "0006" ,title:"dgfsg",sel:false}
          // ],
          userName:'',
          books:null
        }
  },
  components: {
    BookTitle,
    BookName
  },
  props:["checkbook","deletebook"],
  created(){
  },

  methods: {
      test(){
        const self = this;
        self.userName = this.$route.query.userName;
        if (self.userName != "") {
            alert("hello,"+self.userName)
            self.$axios({
                method:'post',
                url: 'http://127.0.0.1:10520/api/book/showbook',
                data: {
                    userName: self.userName
                }
            })
        .then( res => {
            this.books = res.data;
            alert(this.books[0].bookid)
            // switch(parseInt(res.data.split('|')[0])){
            // }
        })
        .catch( err => {
            console.log(err);
        })
    } else{
        // alert("请输入用户名及密码！");
    }
      },
      newbook(){
				this.$router.push({
					name:'newbook',
          query:{//query传递参数
                userName:this.userName,
                }
				})
			},
      contentShow(title){
          this.$router.push({
              name:'bookcontent',
              query:{
                  bookname:title,
              }
        })
      }
  }
    //   checkbook(id){
    //   this.books.forEach((book)=>{
    //     if(book.id === id) book.sel = !book.sel
    //   })
    //   },
    // deletebook(){
    //   this.books.forEach(()=>{
    //     this.books = this.books.filter(bk => bk.sel === false )
    //   })
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 整个页面 */
.con{
  height: 100%;
  margin : 0px;
  display: flex;
  display: flex;
  flex-direction: column;
}
/* 书列表块 */
.bookblock{
    padding: 20px;
    height: 100%;
    /* background: linear-gradient(200deg,#74d5f0,#e3eeff); */
}
/* 书架 */
.booklist{
    height: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap:  wrap; 
}
/* 选择书籍按钮 */
#selectbook,#deletebk{
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #018d37;
  width: 130px;
  outline:none;
  border-color: aquamarine;
  border-radius: 8px;
  padding: 13px;
  color: rgb(244, 245, 243);
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
}
#newabook{
    margin:20px;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    border-style: dotted;
    border-width: 2px;
    border-color: rgb(27, 75, 59);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: green;
    
}
</style>
