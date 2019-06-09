<template>
    <hooper :progress="true" :autoPlay="true" :playSpeed="2000" :itemsToSlide="1" :itemsToShow="3" :transition="800" :infiniteScroll="true">
        <slide class="sliderWrap" v-for="item in imagesSlider" :key="item">
            <img class="sliderImg"  :src="srcImg + item"  alt="">
        </slide>

    </hooper>
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    let imagesSlider = [ 'images1.jpg', 'images2.jpeg', 'images3.jpg', 'images4.jpg', 'images5.jpg', 'images6.jpg', 'images7.jpg', 'images8.jpg', 'images9.jpg', 'images10.jpg', 'images11.jpg' ],
        srcImg = 'img/sliderImg/';

    export default {
        data() {
          return {
              imagesSlider,
              srcImg
          }
        },
        components: {
            Hooper,
            Slide,


        }
    }
</script>

<style scoped>
    .sliderWrap {
        margin-bottom: 40px;
    }
    .sliderImg {
        padding: 0 30px;
        height: 300px;
        object-fit: cover;
    }
</style>
