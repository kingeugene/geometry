<template>
    <div class="container">
        <div><span style="margin-left: 90px">L</span><span style="margin-left: 180px">C</span></div>
        <img class="gxs-resource-image" alt="Vs_trapece.png" src="//ykl-res.azureedge.net/d8fc9849-53a3-4b36-a9e8-f7533b59e477/Vs_trapece.png" width="383" height="189">
        <div><span>A</span><span style="margin-left: 360px">N</span></div>
        <div>Длинное основание AN равнобедренной трапеции ALCN равно 34 см, короткое основание LC и боковые стороны равны. Определи периметр трапеции, если острый угол трапеции равен 65° (в расчётах округли числа до сотых).</div>
        <div>P ALCN=  <input type="text" size="5" v-model="answerTask"> см</div>
        <p :class="checkClass()" v-if="checkAnswer">{{answerText}}</p>
        <div v-show="showText">
            <img src="img/answerTask.png" alt="">
        </div>

        <input type="submit" value="Ответить" @click="checkAll()">&nbsp;
        <input type="submit" value="Посмотерть ответ" @click="detail">


    </div>
</template>

<script>
    export default {
        data() {
            return {
                rightAnswers: '89,26',
                answerTask: '',
                checkAnswer: false,
                answerText: '',
                showText: false
            }

        },
        methods: {
            checkAll() {
                this.checkAnswer = false

                if (this.answerTask == this.rightAnswers) {
                    this.answerText = 'Правильно'
                } else this.answerText = 'Неправильно'
                this.checkAnswer = true
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
