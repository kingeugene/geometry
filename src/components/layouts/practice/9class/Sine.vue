<template>
    <div class="container">
        <div>
            <div style="margin-left: 130px">B</div>
            <img class="gxs-resource-image" alt="Taisnl.png" src="//ykl-res.azureedge.net/399efddc-e9f0-4b8f-ae53-f94902606471/Taisnl.png" width="360" height="186">
            <div><span>P</span><span style="margin-left: 110px"> E </span><span style="margin-left: 200px">N</span></div>
            <div>Закончи предложения соответствующей информацией о треугольниках.</div>
            <div>1. Сумма углов треугольника PBN равна <input type="text" size="5" v-model="answerTask.first"> градусов.</div>
             <p :class="checkClass(0)" v-if="checkAnswer">{{answerText[0]}}</p>

            <div>2. Сумма углов ∡BPE и ∡PBE равна <input type="text" size="5" v-model="answerTask.second"> градусов</div>
            <p :class="checkClass(1)" v-if="checkAnswer">{{answerText[1]}}</p>

            <input type="submit" value="Ответить" @click="checkAll()">&nbsp;


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rightAnswers: ['180', '90'],
                answerTask: {
                    first: '',
                    second: ''
                },
                checkAnswer: false,
                answerText: []
            }

        },
        methods: {

            checkAll() {
                this.checkAnswer = false;
                this.checkOne();
                this.checkTwo()
                this.checkAnswer = true

            },
            checkOne() {
                if (this.answerTask.first == this.rightAnswers[0]) {
                    this.answerText[0] = 'Правильно'
                }else this.answerText[0] = 'Неправильно'
            },
            checkTwo() {
                if (this.answerTask.second == this.rightAnswers[1]) {
                    this.answerText[1] = 'Правильно'
                }else this.answerText[1] = 'Неправильно'
            },
            checkClass(val) {
                return {
                    'messAnsOk' : this.answerText[val] == 'Правильно',
                    'messAnsError' : this.answerText[val] == 'Неправильно'
                }
            }
        }
    }
</script>

<style scoped>

</style>
