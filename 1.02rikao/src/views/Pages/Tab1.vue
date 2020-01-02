<template>
  <div class="tab1">
    tab1页面
    <hr />
    <input type="text" placeholder="请输入搜索内容" v-model="iptValue" />
    <br />
    <div v-if="!searchData.length">
      <div v-for="item in listData" :key="item.id">
        <img :src="item.img" alt="bin" />
        <br />
        <span>姓名:{{item.name}}</span>
        <br />
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="searchBox" v-for="item in searchData" :key="item.id">
        <img :src="item.img" alt="bin" />
        <br />
        <span>姓名:{{item.name}}</span>
        <br />
        <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../../../public/mock/index.js";

export default {
  data() {
    return {
      listData: [],
      iptValue: "",
      searchData: []
    };
  },
  methods: {
    getListData() {
      axios.get("/api/list").then(res => {
        console.log(res.data);
        this.listData = res.data;
      });
    }
  },
  created() {
    this.getListData();
  },
  watch: {
    iptValue(v) {
      console.log(v);
      let flag = this.listData.filter(item => {
        return item.name.includes(v);
      });
      this.searchData = flag;
      console.log(flag);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab1 {
  width: 100%;
  height: 93vh;
}
</style>