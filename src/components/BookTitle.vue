/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="top">
      <div class="my_book">
        {{pagename}}
      </div>
      <div class="user_name">{{username}}
      </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BookTitle',
  props:["pagename","username"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top{
    width: 100%;
    height: 50px;
    background-color: #416901;
    color: aliceblue;
    font-size: 140%;
    /* display: flex; */
    /* flex-direction: row; */
}
.my_book{
    height: 100%;
    justify-content: center;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    float: left;
}
.user_name{
    height: 100%;
    justify-content: center;
    float:right;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
