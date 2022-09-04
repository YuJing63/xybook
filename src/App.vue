<template>
  <div id="app">
    <!-- <Book :books="books" :checkbook="checkbook" :deletebook="deletebook"></Book> -->
    <!-- <CreateBook></CreateBook> -->
    <!-- <BookContent></BookContent> -->
    <!-- <router-link  active-class="1" to="/login">About</router-link> -->
    <router-view></router-view>
    <!-- <Login></Login> -->
  </div>
</template>

<script>
// import Book from './components/book'
// import CreateBook from './components/CreateBook.vue'
// import BookContent from './components/BookContent'
// import Login from './components/login'
export default {
  name: 'App',
  components: {
    // Book
    // CreateBook
    // BookContent
    // Login
  },
}
</script>

<style>
body{
    height: 100vh;
    width: 100%;
    display: flex;
    margin: 0%;
    flex-direction: column;
    justify-content: flex-start;
    /* justify-content: center; */
    /* 居中对齐弹性盒各个元素*/
    /* 创建头部开始的线性渐变 */
    background: linear-gradient(200deg,#2c8497,#e3eeff);
}
/* #app {
  height: 100vh;
}  */
</style>
