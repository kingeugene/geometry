<template>
    <div>
        <div class="taskText"  v-html="taskText"></div>
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
                answerText: "",
            }
        },

        props: {
            taskText: String,
            correctAnswer: String,
        },

        computed: {
            flagsText() {
                return (this.answerText === "Правильно");
            }
        },

        methods: {
            reply() {
                this.answer === this.correctAnswer
                    ?  this.answerText = "Правильно"
                    : this.answerText = "Неправильно";
            }
        }
    }
</script>

<style scoped>
.taskText {
    font-style: italic;
    margin: 10px 0;
}
</style>