<template>
    <div>

        <br>
        <div>Правильно выбери названия сторон и углов треугольника  KLS .</div>
            <br>
        <p>L</p>
        <div><img class="gxs-resource-image" alt="Trijsturis_platl.png" src="//ykl-res.azureedge.net/81781850-ec4d-4870-bc13-351f43b86ae1/Trijsturis_platl.png" width="565" height="234"></div>
        <div>
            <span style="margin-left: 100px">K</span>
            <span style="margin-left: 450px">S</span>
        </div>
        <br>
        <div>

            <div>1. Сторона, лежащая против угла  ∡S :</div>
            <label><input type="radio" value="SK" v-model="againstСorner[0]"> SK </label>
            <label><input type="radio" value="KL"  v-model="againstСorner[0]"> KL</label>
            <label><input type="radio" value="LS"  v-model="againstСorner[0]"> LS </label>
            <p :class="checkClass(0)" v-if="checkAnswer">{{answerText[0]}}</p>

            <div>2. Угол, лежащий против стороны  LS :</div>
            <label><input type="radio" value="S" v-model="againstСorner[1]"> ∡S </label>
            <label><input type="radio" value="K"  v-model="againstСorner[1]"> ∡K</label>
            <label><input type="radio" value="L"  v-model="againstСorner[1]"> ∡L </label>
            <p :class="checkClass(1)" v-if="checkAnswer">{{answerText[1]}}</p>

            <div>3. Углы, прилежащие к стороне  KL :</div>
            <label><input type="radio" value="SK" v-model="againstСorner[2]"> ∡S;∡K</label>
            <label><input type="radio" value="LS"  v-model="againstСorner[2]"> ∡L;∡S</label>
            <label><input type="radio" value="KL"  v-model="againstСorner[2]"> ∡K;∡L</label>
            <p :class="checkClass(2)" v-if="checkAnswer">{{answerText[2]}}</p>




            <input type="submit" value="Ответить" @click="checkOne()">
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                correctAnswer: ['KL', 'K', 'KL'],
                againstСorner: [],
                checkAnswer: false,
                answerText: [],


            }
        },
        methods: {
            checkOne() {
                this.checkAnswer = false;
                    this.correctAnswer.forEach((item, i) => {
                        if (item == this.againstСorner[i]) {
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

<style>
    label {
        display: block;
    }
    .messAnsOk {
        color: green;
    }
    .messAnsError {
        color: red;
    }
</style>
