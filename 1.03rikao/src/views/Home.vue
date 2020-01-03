<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from "../axios/index.js"
const axios = require("axios")

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      listData:[]
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    getListData(){
      axios.get("/api/list").then(res=>{
        console.log(res.data.list)
        this.listData = res.data.list;
      })
    }
  },
}
</script>
