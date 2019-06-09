<template>
    <div class="container">
        <div>Через конечную точку B диагонали BD=14,5 ед. изм. квадрата ABCD проведена прямая перпендикулярно диагонали BD. Проведённая прямая пересекает прямые DA иDC в точках M иN соответственно.
            Определи длину отрезка MN.</div>
        <div>Длина отрезка MN = <input type="text" size="5" v-model="answerTest"> ед. изм.</div>
        <p :class="checkClass()" v-if="checkAnswer">{{answerText}}</p>
        <div v-show="showText">
            Диагонали квадрата перпендикулярны, равны и точкой пересечения делятся пополам. <br>
            BD⊥MN, BD⊥AC, ⇒ <br>
            MN║AC. <br>
            <br>
            ΔDAC  подобен ΔDMN по двум углам (угол D общий, ∠DAC = ∠DMN как соответственные при пересечении MN║AC секущей DM),
            <br>
            AC : MN = DO : DB = 1 : 2. <br>
            <br>
            AC = BD = 14,5 <br>
            MN = 2AC = 29 ед. изм. <br>
        </div>
        <input type="submit" value="Ответить" @click="checkOne()">&nbsp;
        <input type="submit" value="Посмотерть ответ" @click="detail">

    </div>
</template>

<script>
    export default {
        data() {
            return {
                rightAnswers: '29',
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
            detail() {
                this.showText = !this.showText
            },
            checkClass() {
                return {
                    'messAnsOk' : this.answerText == 'Правильно',
                    'messAnsError' : this.answerText == 'Неправильно'
                }
            }
        }
    }
</script>

<style scoped>

</style>
