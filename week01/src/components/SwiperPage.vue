<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
            class="swiper-slide"
            v-for="(item,index) in SwiperImg"
            :key="index"
            >
                <img :src="item.img" alt="bin" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
// import Vue from 'vue'
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);

export default {
    data() {
        return {
            SwiperImg:[]
        }
    },
    methods: {
        getSwiperImage(){
            axios.get("/getCarouselList").then(res=>{
                console.log(res.data.list.list);
                this.SwiperImg = res.data.list.list;
            })
        },
        newSwiperFn(){
            new Swiper(".swiper-container",{
                autoplay:true,
                loop:true
            })
        }
    },
    created() {
        this.getSwiperImage()
        this.newSwiperFn()
    },
}
</script>

<style lang="scss">
    
</style>