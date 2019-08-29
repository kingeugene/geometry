<template>
    <div class="container">
        <h1>Практика по Геометрия</h1>
        <div class="item-wrap" v-for="(item, index) in task" :key="index">
            <h2 v-if="item.wrapTitle">{{ item.wrapTitle }}</h2>
            <div class="list-item" @click="openTask(index)">{{item.taskTitle}}</div>
            <base-task
                    v-if="taskShow[index]"
                    :taskText="item.taskText"
                    :correct-answer="item.correctAnswer"
            ></base-task>
        </div>
    </div>
</template>


<script>
    import BaseTask from './practice/BaseTask'

    export default {
        data() {
            return {
                taskShow: [],
                task: [
                    {
                        wrapTitle: "Практические задачи по геометрии",
                        taskTitle: "Углы",
                        taskText: "Проектор полностью освещает экран A высотой 80 см, расположенный на " +
                            "расстоянии 250 см от проектора. На каком наименьшем расстоянии (в сантиметрах) " +
                            "от проектора нужно расположить экран B высотой 160 см, чтобы он был полностью" +
                            " освещён, если настройки проектора остаются неизменными?",
                        correctAnswer: "500",
                    },
                    {
                        taskTitle: "Теорема Пифагора",
                        taskText: "<div>От столба высотой 9 м к дому натянут провод, который крепится на высоте 3 м от земли (см. рисунок). Расстояние от дома до столба 8 м. Вычислите длину провода.</div><div><img src='https://oge.sdamgia.ru/get_file?id=15772' alt=''></div>",
                        correctAnswer: "10",
                    },
                    {
                        taskTitle: "Подобие треугольников",
                        taskText: "Проектор полностью освещает экран A высотой 80 см, расположенный на расстоянии 250 см от проектора. На каком наименьшем расстоянии (в сантиметрах) от проектора нужно расположить экран B высотой 160 см, чтобы он был полностью освещён, если настройки проектора остаются неизменными?",
                        correctAnswer: "500",
                    },
                    {
                        taskTitle: "Вычисление длин и площадей",
                        taskText: "Площадь прямоугольного земельного участка равна 9 га, ширина участка равна 150 м. Найдите длину этого участка в метрах.",
                        correctAnswer: "600",
                    },
                    {
                        wrapTitle: "Треугольники, четырёхугольники, многоугольники и их элементы",
                        taskTitle: "Углы",
                        taskText: "<p class=\"left_margin\">Биссектрисы  углов  <i>N</i> и  <i>M</i> треугольника &nbsp;<i>MNP</i>&nbsp; пересекаются в точке &nbsp;<i>A</i>. Найдите &nbsp;<img src=\"https://oge.sdamgia.ru/formula/svg/eb/ebd5199deb66d437b090676f57880416.svg\" class=\"tex\" style=\"vertical-align:-2pt\">, если &nbsp;<img src=\"https://oge.sdamgia.ru/formula/svg/a7/a75a4aa09c273936a7619d6059d972ab.svg\" class=\"tex\" style=\"vertical-align:-2pt\">, а &nbsp;<img src=\"https://oge.sdamgia.ru/formula/svg/9c/9cd746aa7045cbd142175d2748b87877.svg\" class=\"tex\" style=\"vertical-align:-2pt\"><div><img src='https://oge.sdamgia.ru/get_file?id=15932' alt=''></div></p>",
                        correctAnswer: "117",
                    },
                    {
                        taskTitle: "Треугольники общего вида",
                        taskText: "У треугольника со сторонами 16 и 2 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 1. Чему равна высота, проведённая ко второй стороне?",
                        correctAnswer: "8",
                    },
                    {
                        taskTitle: "Равнобедренные треугольники",
                        taskText: "<p class=\"left_margin\">В равностороннем треугольнике <i>ABC</i> биссектрисы <i>CN</i> и <i>AM</i> пересекаются в точке&nbsp;<i>P</i>.&nbsp;Найдите <img src=\"https://oge.sdamgia.ru/formula/svg/d5/d51e74d2940d0653a0ea3266e861bbb9.svg\" class=\"tex\" style=\"vertical-align:-2pt\">. <div><img src='https://oge.sdamgia.ru/get_file?id=15891' alt=''></div></p>",
                        correctAnswer: "120",
                    },
                    {
                        taskTitle: "Прямоугольный треугольник",
                        taskText: "<p class=\"left_margin\"><img src=\"/get_file?id=15884\" style=\"float:right;margin:10px\"> В треугольнике <i>ABC</i> угол <i>C</i> прямой, <i>BC</i> = 8 , sin <i>A</i> = 0,4. &nbsp; Найдите&nbsp;<i>AB</i>. <div><img src='https://oge.sdamgia.ru/get_file?id=15884' alt=''></div></p>",
                        correctAnswer: "20",
                    },
                    {
                        taskTitle: "Параллелограмм",
                        taskText: "<div>Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 65° и 50°. Найдите меньший угол параллелограмма.</div><div><img src='https://oge.sdamgia.ru/get_file?id=15865' alt=''></div>",
                        correctAnswer: "65",
                    },
                    {
                        wrapTitle: "Окружность, круг и их элементы",
                        taskTitle: "Центральные и вписанные углы",
                        taskText: "<div>Центральный угол AOB опирается на хорду AB длиной 6. При этом угол OAB равен 60°. Найдите радиус окружности.</div><img src='https://oge.sdamgia.ru/get_file?id=15992' alt=''>  ",
                        correctAnswer: "6",
                    },
                    {
                        taskTitle: "Касательная, хорда, секущая, радиус",
                        taskText: "<div>Радиус OB окружности с центром в точке O пересекает хорду AC в точке D и перпендикулярен ей. Найдите длину хорды AC, если BD = 1 см, а радиус окружности равен 5 см.</div><img src='https://oge.sdamgia.ru/get_file?id=15944' alt=''> ",
                        correctAnswer: "6",
                    },
                    {
                        taskTitle: "Окружность, описанная вокруг многоугольника",
                        taskText: "<div>В окружность вписан равносторонний восьмиугольник. Найдите величину угла ABC.</div><img src='https://oge.sdamgia.ru/get_file?id=15986' alt=''>",
                        correctAnswer: "22.5",
                    },
                    {
                        wrapTitle: "Площади фигур",
                        taskTitle: "Квадрат",
                        taskText: "Сторона квадрата равна 10. Найдите его площадь.",
                        correctAnswer: "100",
                    },
                    {
                        taskTitle: "Прямоугольник",
                        taskText: "В прямоугольнике одна сторона равна 10, другая сторона равна 12. Найдите площадь прямоугольника.",
                        correctAnswer: "120",
                    },
                    {
                        taskTitle: "Параллелограмм",
                        taskText: "<div>Найдите площадь параллелограмма, изображённого на рисунке.</div><img src='https://oge.sdamgia.ru/get_file?id=16073' alt=''>",
                        correctAnswer: "40",
                    },
                    {
                        taskTitle: "Трапеция",
                        taskText: "<div>Найдите площадь трапеции, изображённой на рисунке</div> <img src='https://oge.sdamgia.ru/get_file?id=16094' alt=''>",
                        correctAnswer: "168",
                    },
                    {
                        wrapTitle: "Фигуры на квадратной решётке",
                        taskTitle: "Углы",
                        taskText: "<div>Найдите тангенс угла AOB, изображенного на рисунке.</div> <img src='https://oge.sdamgia.ru/get_file?id=16148' alt=''>",
                        correctAnswer: "2",
                    },
                    {
                        taskTitle: "Расстояние от точки до прямой",
                        taskText: "<div>На клетчатой бумаге с размером клетки 1см x 1см отмечены точки А, В и С. Найдите расстояние от точки А до прямой ВС. Ответ выразите в сантиметрах.</div><img src='https://oge.sdamgia.ru/get_file?id=16164' alt=''>",
                        correctAnswer: "2",
                    },
                    {
                        taskTitle: "Прямоугольный треугольник",
                        taskText: "<div>Найдите тангенс угла А треугольника ABC, изображённого на рисунке.</div> <img src='https://oge.sdamgia.ru/get_file?id=16150' alt=''>",
                        correctAnswer: "0,4",
                    },
                    {
                        taskTitle: "Ромб",
                        taskText: "<div>На клетчатой бумаге с размером клетки 1х1 изображён ромб. Найдите длину его большей диагонали.</div><img src='https://oge.sdamgia.ru/get_file?id=16307' alt=''>",
                        correctAnswer: "6",
                    },
                    {
                        taskTitle: "Трапеция",
                        taskText: "Найдите синус острого угла трапеции, изображённой на рисунке. <div><img src='https://oge.sdamgia.ru/get_file?id=16232' alt=''></div>",
                        correctAnswer: "0,8",
                    },
                ],
            }
        },
        components: {
            'base-task': BaseTask
        },
        methods: {
            openTask(val) {
                this.$set(this.taskShow, val, !this.taskShow[val]);
            }
        },

        beforeMount() {
            for(let i = 0; i < this.task.length; i++) {
                this.taskShow.push(false);
            }
        }
    }
</script>

<style scoped>
.list-item {
    cursor: pointer;
    user-select: none;
    font-size: 20px;
    font-weight: 500;
}
.list-item:hover {
    color: green;
}
</style>
