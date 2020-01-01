<template>
  <div class="home">
    <div 
    class="tabBox"
    >
      <div 
      class="tabItem"
      v-for="(item,index) in list"
      :key="index"
      :class="tabIndex===index?'active':''"
      @click="handleTabIndex(index)"
      >
        {{item}}
      </div>
    </div>
    <div class="swiperComponent">
      <SwiperPage />
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      list:[
        "发现",
        "排行榜",
        "音乐人企划",
        "音乐人",
        "歌曲",
        "专辑"
      ],
      tabIndex:0
    }
  },
  methods: {
    handleTabIndex(index){
      this.tabIndex = index;
    }
  },
  created() {
    
  },
  name: 'home',
  components: {
    SwiperPage:()=>import("@/components/SwiperPage.vue")
    // HelloWorld
  }
}
</script>

<style lang="scss">
  .home{
        width: 100%;
        height: 100%;
        .tabBox{
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: 100px;
          height: 300px;
        }
        .swiperComponent{
            display: inline-block;
            padding-left: 130px;
            width: 500px;
            height: 300px;
        }
      }
      .tabItem{
        width: 95%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #0ff;
        margin: 2px;
      }
      .active{
        background:#09f!important;
        color:#fff!important;
      }
</style>