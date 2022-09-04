<template>
    <div class = "all">
      <div class="container">
        <div class="form-box" :class="{active:isLogin}">
            <div  class = "register-box" v-if="isLogin">
                <h1>注册</h1>
                <input type = "text" placeholder="用户名" v-model="form.username">
                <input type = "email" placeholder="邮箱" v-model="form.useremail">
                <input type = "password" placeholder="密码" v-model="form.userpwd">
                <!-- <input type = "password" placeholder="确认密码" v-model="form.userpwd"> -->
                <button @click="register">注册</button>
            </div>
            <div  class = "login-box" v-else>
                <h1>登录</h1>
                <input type = "text" placeholder="邮箱" v-model="form.useremail">

                <input type = "password" placeholder="密码" v-model="form.userpwd">
                <!-- <button @click="bookShow()">登录1</button> -->
                
                <button @click="login">登录</button>
            </div>
        </div>
        <div class = "con-box left" >
            <h1>欢迎来到<span>小鑫书库</span></h1>
            <p>快来领取你的专属<span>文章</span></p>
            <img src="../assets/3.png" alt = "">
            <p>已有账号</p>
            <button id = "login" @click="changeType" >去登录</button>
        </div>
        <div class = "con-box right" >
            <h1>欢迎来到<span>小鑫书库</span></h1>
            <p>快来阅读你的专属<span>文章</span></p>
            <img src="../assets/3.png" alt = "">
            <p>没有账号</p>
            <button id = "register" @click="changeType">去注册</button>
        </div>
    </div>
    </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data(){
        return {
            isLogin:false,
            emailError: false,
            passwordError: false,
            existed: false,
            form:{
                username:'',
                useremail:'',
                userpwd:''
            }
        }
    },
    methods:{
        bookShow(){
				this.$router.push({
					name:'bookshow',
				})
			},
        changeType(){
            this.isLogin = !this.isLogin
            this.form.username = ''
            this.form.useremail = ''
            this.form.userpwd = ''

        },
        login() {
           const self = this;
            if (self.form.useremail != "" && self.form.userpwd != "") {
                self.$axios({
                    method:'post',
                    url: 'http://127.0.0.1:10520/api/user/login',
                    data: {
                        email: self.form.useremail,
                        password: self.form.userpwd
                    }
                })
                .then( res => {
                    // alert(res.data.split('|')[0])
                    switch(parseInt(res.data.split('|')[0])){
                        case 0: 
                            alert("你好 "+res.data.split('|')[1]);
                            //建立一个命名路由
                            this.$router.push({
                                name:'bookshow',//使用路由name进行跳转
                                query:{//query传递参数
                                    userName:res.data.split('|')[1],
                                }
                            })
                            break;
                        case 2:
                            this.emailError = true;
                            alert("用户名错误！");
                            break;
                        case 1:
                            this.passwordError = true;
                            alert("密码错！");
                            break;
                    }
                })
                .catch( err => {
                    console.log(err);
                })
            } else{
                alert("请输入用户名及密码！");
            } 
        },
        register(){
				const self = this;
				if(self.form.username != "" && self.form.useremail != "" && self.form.userpwd != ""){
					self.$axios({
						method:'post',
						url: 'http://127.0.0.1:10520/api/user/add',
						data: {
							username: self.form.username,
							email: self.form.useremail,
							password: self.form.userpwd
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
		}
    }

}
</script>

<style>
.all{
    height: 100vh;
    display: flex;
    justify-content: center;
    /* 居中对齐弹性盒各个元素*/
    align-items: center;
}
    .container{
        background-color: #fff;
        width: 650px;
        height: 415px;
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgba(0,0,0,0,1);
        position: relative;
    }
    .form-box{
        position:absolute;
        top:-10%;
        left: 5%;
        background-color: rgb(144, 172, 46);
        width: 320px;
        height: 500px;
        border-radius: 10px;
        box-shadow: 2px 0 10px rgba(0,0,0,0,1);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        transition: 0.5s ease-in-out;
    }
    .register-box,.login-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .hidden{
        display: none;
    }
    h1{
        text-align: center;
        margin-bottom: 5px;
        color: #fff;
    }
    input{

        background-color: transparent;
        width: 70%;
        color: #ffffff;
        border: none;
        border-bottom: 1px solid rgb(245, 252, 208);
        padding:10px 0;
        text-indent: 10px;
        margin: 8px 0;
        font-size: 14px;
        letter-spacing: 2px;
    }
    input::placeholder{
        color: rgb(253, 253, 253);

    }
    input:focus{
        color: rgb(0, 95, 87);
        outline:none;
        border-bottom: 1px solid rgb(18, 54, 45);
        transition: 0.5s;
    }
    input:focus::placeholder{
        opacity: 0;
    }
    .form-box button{
        width: 70%;
        margin-top: 35px;
        background-color: #f6f6f6;
        outline:none;
        border-radius: 8px;
        padding: 13px;
        color: rgb(96, 163, 41);
        letter-spacing: 2px;
        border: none;
        cursor: pointer;
    }
    .con-box{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position:absolute;
        top:50%;
        transform: translateY(-50%);
    }
    .con-box.left{
        left: -2%;
    }
    .con-box.right{
        right:0%;
    }
    .con-box h1{
        color: #363a2a;
        font-size: 25px;
        font-weight: bold;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 4px;
    }
    .con-box p{
        font-size: 12px;
        letter-spacing: 2px;
        color: #222517;
        text-align: center;
    }
    .con-box button{
        margin-top: 3%;
        background-color: #f6f6f6;
        color: #6c832d;
        border: 1px solid #859b48;
        border-radius: 8px;
        padding: 6px 10px;
        letter-spacing: 1px;
        outline: none;
        cursor: pointer;
    }
    .form-box span{
        color: #859b48;
    }
    .con-box span{
        color: #859b48;
    }
    .con-box button:hover{
        background-color: #859b48;
        color: #fff;

    }
    .con-box img{
        width: 120px;
        height: 200px;
    }
    .form-box.active{
        transform: translateX(80%);
		transition: all 0.5s;
    }
    
</style>