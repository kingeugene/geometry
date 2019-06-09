<template>
    <div class="container">
        <h1>Практика по Геометрия</h1>
        <h2>7 Класс</h2>
        <ol class="list-title" style="list-style-type: upper-roman;">
            <li>Треугольники</li>
            <ol>
                <li @click="openTask('first')">Первый признак равенства треугольников</li>
                <app-triangles-first v-if="task.first"></app-triangles-first>

                <li @click="openTask('second')">Медианы, биссектрисы и высоты треугольника</li>
                <app-second-medians v-if="task.second"></app-second-medians>

                <li @click="openTask('third')">Второй и третий признаки равенства треугольников</li>
                <third-quality-triagles v-if="task.third"></third-quality-triagles>
            </ol>
        </ol>
        <h2>8 Класс</h2>
        <ol class="list-title" style="list-style-type: upper-roman;">
            <li>Четырёхугольники</li>
            <ol>

                <li @click="openTask('four')">Многоугольники</li>
                <app-polygons v-if="task.four"></app-polygons>

                <li @click="openTask('five')">Параллелограмм и трапеция</li>
                <app-parallelogram v-if="task.five"></app-parallelogram>

                <li @click="openTask('six')">Прямоугольник, ромб, квадрат</li>
                <app-rhombus v-if="task.six"></app-rhombus>
            </ol>
        </ol>
        <h2>9 Класс</h2>
        <ol class="list-title" style="list-style-type: upper-roman;">
            <li>Соотношение между сторонами и углами треугольника</li>
            <ol>

                <li @click="openTask('seven')">Синус, косинус, тангенс угла</li>
                <app-sine v-if="task.seven"></app-sine>

                <li @click="openTask('eight')">Соотношения между сторонами и углами треугольника</li>
                <app-relationsBetween v-if="task.eight"></app-relationsBetween>
            </ol>
        </ol>

    </div>
</template>


<script>
    import QulityTrianglesF from './practice/7class/QulityTrianglesF'
    import SecondMedians from './practice/7class/SecondMedians'
    import ThirdQualityTriagles from './practice/7class/ThirdQualityTriagles'
    import Polygons from './practice/8class/Polygons'
    import Parallelogram from './practice/8class/Parallelogram'
    import Rhombus from './practice/8class/Rhombus'
    import Sine from './practice/9class/Sine'
    import RelationsBetween from './practice/9class/RelationsBetween'

    export default {
        data() {
            return {
                task: {
                    first: false,
                    second: false,
                    third: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false

                }
            }
        },
        components: {
            'app-triangles-first' : QulityTrianglesF,
            'app-second-medians' : SecondMedians,
            ThirdQualityTriagles,
            'app-polygons': Polygons,
            'app-parallelogram': Parallelogram,
            'app-rhombus' : Rhombus,
            'app-sine' : Sine,
            'app-relationsBetween' : RelationsBetween

        },
        methods: {
            openTask(val) {
                this.task[val] = !this.task[val]
            }
        }
    }
</script>

<style scoped>
    ol>ol>li {
        cursor: pointer;
    }
</style>
