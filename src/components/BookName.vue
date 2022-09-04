<template>
  <div class="book">
    <img id = "bookcover" :src = "bk.coverimg">
    <div>    
        <input id = "selebox" type="checkbox" :checked="bk.sel" @change="handleCheck(bk.id)"/>
        <span id = "bookname" @click ="CS(bk.bookname)">{{bk.bookname}}</span>
    </div>
  </div>

</template>

<script>
export default {
    name: 'BookName',
    data(){
        return{
            bookname:"guchuanjin"
        }
    },
    //声明接受bk对象
    props:['bk','checkbook','contentShow'],
    methods: {
        handleCheck(id){
        //通知App组件将对应的todo对象的done值取反
            this.checkbook(id)
        },
        CS(id){
            this.contentShow(id)
        }

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book{
    margin:20px;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    background-color: rgb(246, 252, 250);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 5px rgb(151, 148, 148);
}
#bookcover{
    margin-top: 15%;
    width:100px;
    height: 130px;
    text-align: center;
    margin-bottom: 10%;
}
#bookname{
    color: rgb(89, 141, 25);
    text-align:center ;
}
#selebox{
    float: left;
}

</style>
