<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="header">
      <span>猫眼电影</span>
      <router-link to="/tab1">首页</router-link>
      <router-link to="/tab2">电影</router-link>
      <router-link to="/tab3">影院</router-link>
      <router-link to="/tab4">演出</router-link>
      <router-link to="/tab5">榜单</router-link>
      <router-link to="/tab6">热点</router-link>
      <router-link to="/tab7">商城</router-link>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.header{
  width: 70vw;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

  a {
    display: inline-block;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    // background: #0ff;
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fff;
      background: #0ff;
    }
  }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
