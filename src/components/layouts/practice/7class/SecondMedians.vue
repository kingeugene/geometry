<template>
    <div class="container">
        <br>
        <div><img class="gxs-resource-image" alt="Trijst_vs.png" src="//ykl-res.azureedge.net/9880da50-ebfd-4bfb-8460-efe817094079/Trijst_vs.png" width="314" height="358"></div>
        <div>ΔABC — равнобедренный, AB=BC, ∡A+∡C= 55°. Определи величину∡A.</div>
        <div>1. Назови равные углы в этом треугольнике:</div>
        <div class="answer">∡<input type="text" size="5" v-model="nameAngle[0]"  > = ∡<input type="text" v-model="nameAngle[1]" size="5"></div>
        <p :class="checkClass(0)" v-if="showMess">{{answerTask[0]}}</p>

        <div>2. ∡A = <input type="text" size="5" v-model="magnitudeAngle"  > °</div>
        <p :class="checkClass(1)" v-if="showMess">{{answerTask[1]}}</p>

        <input type="submit" value="Ответить" @click="checkTask()">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                correct: ['ac', '27.5'],
                nameAngle: [],
                magnitudeAngle: '',
                showMess: false,
                answerTask: []

            }
        },
        methods: {
            checkTask() {
                if(this.nameAngle.join('').toLowerCase() == this.correct[0]) {
                    this.answerTask[0] = 'Правильно'
                }else if (this.nameAngle.reverse().join('').toLowerCase() == this.correct[0]) {
                    this.answerTask[0] = 'Правильно'
                }else this.answerTask[0] = 'Неправильно';

                if (this.magnitudeAngle == this.correct[1]) {
                    this.answerTask[1] = 'Правильно'
                }else this.answerTask[1] = 'Неправильно';

                this.showMess = true
            },
            checkClass(val) {
                return {
                    'messAnsOk' : this.answerTask[val] == 'Правильно',
                    'messAnsError' : this.answerTask[val] == 'Неправильно'
                }
            }
        }
    }
</script>

<style scoped>
    input {
        text-align: center;
        font-size: 16px;
    }
    .messAnsOk {
        color: green;
    }
    .messAnsError {
        color: red;
    }
</style>
