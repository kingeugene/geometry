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
            <li>Соотношение между сторонами и углами треугольника</li>
            <ol>
                <li><router-link to="/theory/sumTriagles">Сумма углов треугольника</router-link></li>
                <li><router-link to="/theory/aspectRation">Соотношения между сторонами и углами треугольника</router-link></li>
                <li><router-link to="/theory/rightTriangles">Прямоугольные треугольники</router-link></li>
            </ol>
        </ol>
        <h2>8 Класс</h2>
        <ol class="list-title" style="list-style-type: upper-roman;">
            <li>Четырёхугольники</li>
            <ol>
                <li><router-link to="/theory/polygons">Многоугольники</router-link></li>
                <li><router-link to="/theory/parallelogram">Параллелограмм и трапеция</router-link></li>
                <li><router-link to="/theory/rhombus">Прямоугольник, ромб, квадрат</router-link></li>
            </ol>
        </ol>
        <h2>9 Класс</h2>
        <ol class="list-title" style="list-style-type: upper-roman;">
            <li>Соотношение между сторонами и углами треугольника</li>
            <ol>
                <li><router-link to="/theory/sine">Синус, косинус, тангенс угла</router-link></li>
                <li><router-link to="/theory/relationsBetween">	Соотношения между сторонами и углами треугольника</router-link></li>

            </ol>
        </ol>

    </div>
</template>


<script>
    import QulityTrianglesF from './practice/7class/QulityTrianglesF'
    import SecondMedians from './practice/7class/SecondMedians'
    import ThirdQualityTriagles from './practice/7class/ThirdQualityTriagles'


    export default {
        data() {
            return {
                task: {
                    first: false,
                    second: false,
                    third: false

                }
            }
        },
        components: {
            'app-triangles-first' : QulityTrianglesF,
            'app-second-medians' : SecondMedians,
            ThirdQualityTriagles
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
