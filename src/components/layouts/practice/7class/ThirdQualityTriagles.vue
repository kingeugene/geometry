<template>
    <div class="container">
        <div>
            <img class="gxs-resource-image" alt="4.jpg" src="//ykl-res.azureedge.net/3213959a-a6ee-4705-b31a-559528e1893f/4.jpg" width="528" height="286">
        </div>
        <div>Используй информацию, данную на рисунке, и определи величину угла  ∡EGH , если  ∡GEF   =  41 ° .</div>
        <div>1. Назови равные треугольники:</div>
        <div>Δ E <input type="text" size="5" v-model="equalTriangles.first[0]"  >&nbsp;	<input type="text" size="5" v-model="equalTriangles.first[1]" > = Δ H <input v-model="equalTriangles.second[0]" type="text" size="5"   >&nbsp;	 <input v-model="equalTriangles.second[1]" type="text" size="5"   ></div>
        <p :class="checkClass(0)" v-if="showMess">{{answerTask[0]}}</p>

        <div>2. Назови угол, соответственно равный данному углу:</div>
        <div>∡GEF  = ∡ <input type="text" size="5" v-model="equalTriangles.equalAngles"></div>
        <p :class="checkClass(1)" v-if="showMess">{{answerTask[1]}}</p>

        <div>3. ∡EGH = <input type="text" size="5" v-model="equalTriangles.magnitudeAngle"> °</div>
        <p :class="checkClass(2)" v-if="showMess">{{answerTask[2]}}</p>

        <div><input type="submit" value="Проверить" @click="checkTaskAll()"></div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                correct: ['FG', 'GE', 'EHG', '41'],
                equalTriangles: {
                    first: [],
                    second: [],
                    equalAngles: '',
                    magnitudeAngle: ''

                },
                showMess: false,
                answerTask: []


            }

        },

        methods: {

            checkTaskAll() {
                this.showMess = false

                this.checkTask1();
                this.checkTask2();
                this.checkTask3();

                this.showMess = true
            },

            checkTask1() {
                let  arr1 = this.correct[0].split('');
                let  arr2 = this.correct[1].split('');

                let cheсkVal1 = false;
                let cheсkVal2 = false;

                if(this.equalTriangles.first.length) {
                    cheсkVal1 = this.equalTriangles.first.every((item) => {
                        item = item.toUpperCase();

                        if (arr1.indexOf(item) !== -1) {
                            arr1.splice(arr1.indexOf(item), 1);
                            return true
                        }else return false
                    });

                }

                if (this.equalTriangles.second.length) {
                    cheсkVal2 = this.equalTriangles.second.every((item) => {
                        item = item.toUpperCase();

                        if (arr2.indexOf(item) !== -1) {
                            arr2.splice(arr2.indexOf(item), 1);
                            return true
                        }else return false
                    });
                }

                if (cheсkVal1 && cheсkVal2) {
                    this.answerTask[0] = 'Правильно'
                }else this.answerTask[0] = 'Неправильно';


            },

            checkTask2() {
                let arr3 = this.correct[2].split(''),
                arrCheck = this.equalTriangles.equalAngles.split(''),
                    cheсkVal = false
                if (arrCheck.length) {
                    cheсkVal = arrCheck.every((item) => {
                        item = item.toUpperCase();

                        if (arr3.indexOf(item) !== -1) {
                            arr3.splice(arr3.indexOf(item), 1);
                            return true
                        }else return false
                    });
                }


                if (cheсkVal)  {
                    this.answerTask[1] = 'Правильно'
                }else this.answerTask[1] = 'Неправильно';
            },

            checkTask3() {
              if (this.equalTriangles.magnitudeAngle == this.correct[3]) {
                  this.answerTask[2] = 'Правильно'
              }else this.answerTask[2] = 'Неправильно'

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

</style>
