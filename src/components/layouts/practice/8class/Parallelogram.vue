<template>
    <div class="container">
        <div>В разных сторонах от прямой даны точки A и B в расстояниях 10,2 см и 4,8 см от прямой соответственно. Определи расстояние серединной точки C отрезка AB до прямой.</div>
        <br>
        <div>Ответ: расстояние от точки C до прямой равно <input type="text" size="5" v-model="answerTest"></div>
        <p :class="checkClass()" v-if="checkAnswer">{{answerText}}</p>
        <div v-show="showText">
            АВ пересекается с прямой в точке О. <br>
            Перпендикуляр из точки А к прямой: АН=10,2 <br>
            Перпендикуляр из точки В к прямой: ВК=4,8 <br>
            Прямоугольные ΔАОН и ΔВОС подобны по 2 углам (углы АОН и ВОС равны как вертикальные, углы АНО и ВСО прямые), значит
            <br>
            АН/ВС=АО/ВО <br>
            АО/ВО=10,2/4,8=17/8 <br>
            АО=17ВО/8 <br>
            АВ=АО+ВО=17ВО/8+ВО=25ВО/8 <br>
            Середина АС=СВ=АВ/2=25ВО/16 <br>
            АО=АС+СО <br>
            СО=АО-АС=17ВО/8-25ВО/16=9ВО/16 <br>
            Расстояние от С до прямой - это перпендикуляр СМ. <br>
            Прямоугольные ΔАОН и ΔСОМ подобны по 2 углам (углы АОН и СОМ совпадают, углы АНО и СМО прямые), значит <br>
            АН/СМ=АО/СО <br>
            СМ=АН*СО/АО=(10,2*9ВО/16) / 17ВО/8=2,7 <br>
            Ответ: 2,7см <br>
        </div>

        <input type="submit" value="Ответить" @click="checkOne()">
        &nbsp;
        <input type="submit" value="Посмотерть ответ" @click="detail">

    </div>
</template>

<script>
    export default {
        data() {
            return {
                rightAnswers: '2.7',
                answerTest: '',
                checkAnswer: false,
                answerText: '',
                showText: false
            }
        },

        methods: {

            checkOne() {
                this.checkAnswer = false;
                    if (this.answerTest == this.rightAnswers) {
                        this.answerText = 'Правильно'
                    }else this.answerText = 'Неправильно'
                this.checkAnswer = true;
            },

            checkClass() {
                return {
                    'messAnsOk' : this.answerText == 'Правильно',
                    'messAnsError' : this.answerText == 'Неправильно'
                }
            },
            detail() {
                this.showText = !this.showText
            }
        }
    }
</script>
