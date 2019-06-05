<template>
    <div class="container">
        <h2>Наши преподаватели</h2>
        <transition-group tag="div" class="galleryBlock">
            <img v-for="item in gallery"
                 :key="item"
                 :src="hrefItem + item"
                 class="galleryBlock-item"
            />
        </transition-group>
        <!--<lightbox id="mylightbox"-->
                  <!--ref="lightbox"-->
                  <!--:images="gallery"-->
                  <!--:directory="hrefItem"-->
                  <!--:timeoutDuration="5000"-->
        <!--/>-->
    </div>
</template>

<script>
    // import Lightbox from 'vue-my-photos'

    let gallery = ['image1.png', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg' ];
    export default {
        name: "Gallery",
        // components: Lightbox,
        data() {
            return {
                gallery,
                hrefItem: 'img/portfolio/'
            }
        }
    }
</script>

<style scoped>
    .galleryBlock {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .galleryBlock-item {
        width: 25%;
        height: 300px;
        object-fit: cover;
    }
</style>
