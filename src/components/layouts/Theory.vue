<template>
    <div class="container">
        <h1>Теория по Геометрия</h1>
        <h2>7 Класс</h2>
        <ol class="list-title" style="list-style-type: upper-roman;">
            <li>Треугольники</li>
            <ol>
                <li><router-link to="/theory/firstQuality">Первый признак равенства треугольников</router-link></li>
                <li><router-link to="/theory/secondMedians">Медианы, биссектрисы и высоты треугольника</router-link></li>
                <li><router-link to="/theory/thirdQuality">Второй и третий признаки равенства треугольников</router-link></li>
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
    export default {

    }
</script>
<style>

    .list-title>li  {
        font-size: 24px;
        text-transform: uppercase;
        margin: 10px 0;
    }
    .list-title>ol {
        margin-left: 20px;
        line-height: 30px;
        font-size: 20px;
    }
</style>

