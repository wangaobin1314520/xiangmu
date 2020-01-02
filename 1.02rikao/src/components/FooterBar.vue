<template>
  <div class="footerPage">
      <router-link to="/home/tab1">消息</router-link>
      <router-link to="/home/tab2">我的</router-link>
      <router-link to="/home/tab3">空间</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footerPage{
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
          color: #000;
          text-decoration: none;
          &.router-link-exact-active {
            color: #0f0;
          }
      }
    }
</style>