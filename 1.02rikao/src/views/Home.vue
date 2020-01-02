<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div class="header">

    </div> -->
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <FooterBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    FooterBar:()=>import("@/components/FooterBar.vue")
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100vw;
    height: 100wh;
    display: flex;
    flex-direction: column;
    .main{
      flex: 1;
      overflow: auto;
    }
    
  }
</style>