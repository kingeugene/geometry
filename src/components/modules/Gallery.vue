<template>
    <div class="container">
        <h2>Наши преподаватели</h2>
        <ul>
            <li
                    v-for="(image, index) in images"
                    class="listLightbox"
            >
                <img
                        v-lazy="image.src"
                        class="imgLightbox"
                        style="height: 300px"
                        @click="openGallery(index)"
                >
            </li>
        </ul>
        <LightBox
                :images="images"
                ref="lightbox"
                :show-caption="true"
                :show-light-box="false"
        >
        </LightBox>

    </div>
</template>

<script>
    import LightBox from 'vue-image-lightbox'
    const images = [
        {
            thumb: 'img/portfolio/image1.png',
            src: 'img/portfolio/image1.png',
            caption: '<h4>Боднарюк Людмила</h4>',
        },
        {
            thumb: 'img/portfolio/image2.jpg',
            src: 'img/portfolio/image2.jpg',
            caption: '<h4>Жук Олександр</h4>',
        },
        {
            thumb: 'img/portfolio/image3.jpg',
            src: 'img/portfolio/image3.jpg',
            caption: '<h4>Браташ Алена</h4>',
        },
        {
            thumb: 'img/portfolio/image4.jpg',
            src: 'img/portfolio/image4.jpg',
            caption: '<h4>Голоднюк Наталия</h4>',
        },
        {
            thumb: 'img/portfolio/image5.jpg',
            src: 'img/portfolio/image5.jpg',
            caption: '<h4>Рудницкая Наталья</h4>',
        },
        {
            thumb: 'img/portfolio/image6.jpg',
            src: 'img/portfolio/image6.jpg',
            caption: '<h4>Стельмах Светлана</h4>',
        },
        {
            thumb: 'img/portfolio/image7.jpg',
            src: 'img/portfolio/image7.jpg',
            caption: '<h4>Хилюк Леся</h4>',
        },
        {
            thumb: 'img/portfolio/image8.jpg',
            src: 'img/portfolio/image8.jpg',
            caption: '<h4>Корольчук Надежда</h4>',
        }
    ];

    export default {
        components: {
            LightBox,
        },
        data () {
            return {
                images,
            }
        },
        methods: {
            openGallery(index) {
                this.$refs.lightbox.showImage(index)
            }
        }
    }
</script>

<style scoped>
    .imgLightbox {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    .listLightbox {
        display: inline-block;
        width: 25%;
    }

</style>
