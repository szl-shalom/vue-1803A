<template>
    <div class="home">
        <div class="main">
            <div class="is-login" v-if="token">
                欢迎用户 ： {{ token }}
                <button @click="quit">退出登录</button>
            </div>
            <div v-else class="is-register">
                <h1>请登录</h1>
                <input type="text" placeholder="请输入用户名" v-model="user.username" />
                <input type="text" placeholder="请输入密码" v-model="user.password" />
                <button @click="login">登录</button>
            </div>
        </div>
        <div class="footer">
            <!-- 引入全局组件 -->
            <MyFooter></MyFooter>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem("token"),
            user: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            this.$http.post("/api/login", this.user).then(result => {
                let { code, token } = result.data;
                if (code) {
                    this.token = token;
                    localStorage.setItem("token", token);
                } else {
                    alert("账户密码错误");
                }
            });
        },
        quit() {
            this.token = "";
            localStorage.removeItem("token");
        }
    }
};
</script>

<style lang="scss">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
        .is-register {
            display: flex;
            flex-direction: column;
            padding: 20px;
            input,
            button {
                height: 46px;
                margin: 20px 0;
            }
        }
    }
    .footer {
        height: 46px;
    }
}
</style>