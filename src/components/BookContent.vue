<template>
  <div class="bookpage">
    <BookTitle pagename = "首页"></BookTitle>
    <div class = 'thisbook'>
        <p>{{$route.query.bookname}}</p>
    </div>
    <div class = "mulu">
        <p @click="ismulu">目录</p>
        <p @click="isre" >相关</p>
        <div class = 'newcharpter'> 
            <button @click="selcp">选择</button>
            <button @click="newCp()">+新建章节</button> 
        </div>
        
    </div>
    <div class = "charpter">
        <div class = 'char-list' v-if="muluOrRelation">
            <BookChapter 
               v-for="cp in chapters"
              :key="cp.id" 
              :cp="cp" 
              :checkcp="checkcp"
              :isSel="isSel"
              :openCp="openCp"
            ></BookChapter>
        </div>
        <div class = "relate" v-else>
            <BookChapter 
               v-for="cp in relations"
              :key="cp.id" 
              :cp="cp" 
              :checkcp="checkcp"
              :isSel="isSel"
            ></BookChapter>
        </div>
    </div>
    <BookFoot 
    :chapters="chapters" 
    :relations="relations"
    :isSel="isSel" 
    :cloSel="cloSel"
    :selAll="selAll"
    :selNone="selNone"
    :muluOrRelation="muluOrRelation"
    :delChapter="delChapter"
    ></BookFoot>
  </div>
</template>

<script>
import BookTitle from "./BookTitle"
import BookChapter from "./BookChapter"
import BookFoot from "./BookFoot"
import {nanoid} from "nanoid"
export default {
  name: 'BookContent',
  components:{
      BookTitle,
      BookChapter,
      BookFoot
  },
  data(){
      return{
            chapters:[
              {id : "0001" ,title:"第一章",sel:false},
              {id : "0002" ,title:"第二章",sel:false},
              {id : "0003" ,title:"第三章",sel:false},
              {id : "0004" ,title:"第四章",sel:false},
              {id : "0005" ,title:"第五章",sel:false},
              {id : "0006" ,title:"第六章",sel:false}
          ],
          relations:[
              {id : "001" ,title:"任务",sel:true},
              {id : "002" ,title:"人物",sel:true},
              {id : "003" ,title:"地点",sel:false},
          ],
          muluOrRelation:true,
          isSel:false,
          title:"第9章"//之后可以自定义
      }
  },
  methods: {
     openCp(title){
          this.$router.push({
              name:'createcontent',
              query:{
                  chaptername:title,
              }
        })
      },
        newCp(){
          this.$router.push({
              name:'createcontent',
        })
      },
      //添加一个章节或者相关
      ismulu(){
          this.muluOrRelation = true;
      },
      isre(){
          this.muluOrRelation = false;
      },
      addCorR(){
		//将用户的输入包装成一个todo对象

        const aobj = {id:nanoid(),title:this.title,sel:false}
        //通知App组件去添加一个todo对象
            if(this.muluOrRelation){
                this.chapters.push(aobj)
            }
            else{
                this.relations.push(aobj)
            }
        },
      checkcp(id){
        if(this.muluOrRelation){
            this.chapters.forEach((cp)=>{
                if(cp.id === id) cp.sel = !cp.sel
            })
        }
        else{
            this.relations.forEach((re)=>{
                if(re.id === id) re.sel = !re.sel
            })
        }
      },
      //点击选择按钮控制选择框是否出现
      selcp(){
          this.isSel = !this.isSel;
      },
      //点击完成按钮使选择框消失 
      cloSel(){
          this.isSel = false;
      },
      //点击全选按钮进行全选
      selAll(){
        if(this.muluOrRelation){
            this.chapters.forEach((cp)=>{
                cp.sel = true
            })
        }
        else{
            this.relations.forEach((re)=>{
                re.sel = true
            })
        }

      },
      selNone(){
        if(this.muluOrRelation){
            this.chapters.forEach((cp)=>{
                cp.sel = false
            })
        }
        else{
            this.relations.forEach((re)=>{
                re.sel = false
            })
        }
      },
      delChapter(){
        if(this.muluOrRelation){

            this.chapters = this.chapters.filter(cp => cp.sel == false)
        }
        else{
            this.relations = this.relations.filter(cp => cp.sel == false)
        }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bookpage{
    display: flex;
    flex-direction: column;
}
.thisbook{
    height: 50px;
    background-color:rgb(248, 248, 248);
    margin: 10px;
    padding: 10px;
    text-align: left;
    vertical-align: middle;
}
.thisbook p{
    margin-left: 20px;
}
.mulu{
    margin:10px;
    padding-left:10px;
    /* display: flex;
    flex-direction: row; */
}
.mulu p{
    margin-right: 20px;
    float: left;
}
.newcharpter{
    float:right;
    width:300px;
    height: 50.4px;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    text-align: center;
    justify-content: flex-end;
}
.newcharpter button{
    float: right;
    width: 80px;
    margin-top :10px;
    margin-left: 20px;
    height: 30.4px;
}
.charpter{
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: aliceblue;
}
</style>
