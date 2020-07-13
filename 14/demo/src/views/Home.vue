<template>
    <div class="index">
        <div class="main">
            <h1>八维</h1>
            <input type="text" v-model="user.username" placeholder="请输入用户名"/>
            <input type="text" v-model="user.password" placeholder="请输入密码"/>
            <button @click="login">登录</button>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    methods: {
        login() {
            Axios.post("/api/login",this.user).then(result=>{
                if(result.data.code){
                    localStorage.setItem("token",result.data.token);
                    this.$router.push("/car")
                }else{
                    alert("很遗憾，账户密码错误 ！！！")
                }
            })
        }
    },
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding:20px;
        h1{
            text-align: center;
        }
        input,button{
            height:45px;
            margin: 10px 0;
        }
    }
}
</style>