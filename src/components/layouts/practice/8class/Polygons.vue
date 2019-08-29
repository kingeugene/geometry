<template>
    <div class="container">
        <div>У простой замкнутой ломаной линии  4  звена. Возможны ли данные длины звеньев ломаной?</div>
        <div>1. 4 см, 4 см, 4 см, 4 см.</div>
        <label><input type="radio" value="Да" v-model="answerTest[0]"> Да</label>
        <label><input type="radio" value="Нет" v-model="answerTest[0]"> Нет</label>
        <p :class="checkClass(0)" v-if="checkAnswer">{{answerText[0]}}</p>

        <div>2. 2 см, 3 см, 4 см, 5 см.</div>
        <label><input type="radio" value="Да" v-model="answerTest[1]"> Да</label>
        <label><input type="radio" value="Нет" v-model="answerTest[1]"> Нет</label>
        <p :class="checkClass(1)" v-if="checkAnswer">{{answerText[1]}}</p>

        <div>3. 1 см, 1 см, 1 см, 3 см.</div>
        <label><input type="radio" value="Да" v-model="answerTest[2]"> Да</label>
        <label><input type="radio" value="Нет" v-model="answerTest[2]"> Нет</label>
        <p :class="checkClass(2)" v-if="checkAnswer">{{answerText[2]}}</p>

        <input type="submit" value="Ответить" @click="checkOne()">


    </div>
</template>

<script>
    export default {
        data() {
            return {
                rightAnswers: ['Да', 'Да', 'Нет'],
                answerTest: [],
                checkAnswer: false,
                answerText: []
            }
        },

        methods: {

            checkOne() {
                this.checkAnswer = false;
                this.rightAnswers.forEach((item, i) => {
                    if (item == this.answerTest[i]) {
                        this.answerText[i] = 'Правильно'
                    }else {
                        this.answerText[i] = 'Неправильно'
                    }
                });
                this.checkAnswer = true;
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
