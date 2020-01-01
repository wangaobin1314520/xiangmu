<template>
    <div class="login">
        <div 
        class="loginLeft" 
        v-for="(item,index) in imgData" 
        :key="index"
        >
            <img :src="item.img" alt="bin" />
        </div>
        <div class="loginRight">
            <h3>虾米账号密码登录</h3>
            账号: <input type="text" v-model="user" /> <br/>
            密码: <input type="text" v-model="pwd" /> <br/>
            <div 
            class="loginBtn"
            @click="handleLogin"
            >
                登录
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            imgData:[],
            user:"",
            pwd:""
        }
    },
    methods: {
        getLoginImg(){
            axios.get("/api/loginimg").then(res=>{
                console.log(res.data.list.list);
                this.imgData = res.data.list.list
            })
        },
        handleLogin(){
            console.log(this.user,this.pwd);
            axios.get(`/api/login?user=${this.user}&pwd=${this.pwd}`).then(res=>{
                console.log(res.data);
                if(res.data.errCode===0){
                    console.log("登录成功");
                    this.$router.push({
                        path:"/home"
                    })
                }else{
                    console.log("登录失败，请重新登录");
                }
            })
        }
    },
    created() {
        this.getLoginImg()
    },
}
</script>

<style lang="scss">
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        .loginLeft{
          flex: 3;
          background:#0f0;
          img{
              width:100%;
              height:100%;
          }
        }
        .loginRight{
            padding-left: 30px;
            flex: 2;
            background: #0ff;
            h3{
                line-height: 50px;
                margin-bottom: 15px;
            }
            input,.loginBtn{
                margin-top: 15px;
            }
        }
      }
    .loginBtn{
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #f90;
        color: #fff;
      }
</style>