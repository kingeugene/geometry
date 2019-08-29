<template>
    <div>
        <div>Колесо имеет 18 спиц. Углы между соседними спицами равны. Найдите угол,
            который образуют две соседние спицы. Ответ дайте в градусах.</div>
        <input type="text"  v-model="answer">
        <p :class="{'messAnsOk': flagsText, 'messAnsError': !flagsText}">{{answerText}}</p>
        <input type="submit" value="Ответить" @click="reply">


    </div>
</template>

<script>
    export default {
        data() {
            return {
                answer: "",
                correctAnswer: 20,
                answerText: "",
            }
        },

        computed: {
            flagsText() {
                return (this.answerText === "Правильно");
            }
        },

        methods: {
            reply() {
                this.answer == this.correctAnswer
                    ?  this.answerText = "Правильно"
                    : this.answerText = "Неправильно";
            }
        }
    }
</script>

<style scoped>

</style>