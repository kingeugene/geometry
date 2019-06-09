<template>
    <div class="parallax-container">
        <div class="parallax-title">
            <div class="container">
                <h2>Курс по Геометрии</h2>
                <p>Своеобразие геометрии, выделяющее её среди других разделов математики, да и всех наук вообще, заключается в неразрывном органическом соединении живого воображения со строгой логикой. Геометрия в своей сути и есть пространственное воображение, пронизанное и организованное строгой логикой.</p>

                <h2>Мы изучаем такие темы:</h2>
                <div class="geometryList">
                    <ul>
                        <li>Треугольники</li>
                        <li>Соотношение между сторонами и углами треугольника</li>
                    </ul>

                    <ul>
                        <li>Четырехугольники</li>
                        <li>Площадь</li>
                    </ul>
                </div>


            </div>
        </div>
        <parallax :speed-factor="0.2"  :sectionHeight=90>
            <img src="../../assets/homeImg/classGeometry.jpg">
        </parallax>
    </div>
</template>

<script>
    import Parallax from 'vue-parallaxy'

    export default {
        components: {
            Parallax
        }
    }
</script>

<style scoped>
    .parallax-container {
        position: relative;
        margin: 50px 0;

    }
    .parallax-title {
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        padding: 20px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        text-align: center;
    }
    .geometryList {
        display: flex;
        justify-content: space-around;
    }
    .geometryList li {
        font-size: 21px;
        text-align: left;
    }

</style>
