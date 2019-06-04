<template>
    <hooper :progress="true" :autoPlay="true" :playSpeed="1000000">
        <slide>
            <img src="../../assets/sliderImg/images1.jpg" alt="">
        </slide>
        <slide>
            <img src="../../assets/sliderImg/images2.jpeg" alt="">
        </slide>
        <slide>
            <img src="../../assets/sliderImg/images3.jpg" alt="">
        </slide>
        <slide>
            <img src="../../assets/sliderImg/images4.jpg" alt="">
        </slide>
        <slide>
            <img src="../../assets/sliderImg/images5.jpg" alt="">
        </slide>
    </hooper>
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        components: {
            Hooper,
            Slide,
        }
    }
</script>
