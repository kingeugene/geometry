<template>
    <div>
        <div>От стол­ба вы­со­той 9 м к дому на­тя­нут провод, ко­то­рый кре­пит­ся на вы­со­те 3 м от земли (см. рисунок).
            Рас­сто­я­ние от дома до стол­ба 8 м. Вы­чис­ли­те длину провода.</div>
        <div><img style="margin: 20px" src="https://oge.sdamgia.ru/get_file?id=15772" alt=""></div>
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
                correctAnswer: 10,
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