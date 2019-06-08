<template>
    <div class="container">
        <div><div class="gxst-title"><div>Соотношение между углами и сторонами треугольника</div></div></div>
        <div><div class="gxst-theory"><div><div>В треугольнике против большей стороны лежит больший угол. </div></div></div><div><img class="gxs-resource-image" alt="Lenki_malas1.png" src="//ykl-res.azureedge.net/39304c0b-7f66-4dff-b59c-4f92c18f5b2b/Lenki_malas1.png" width="432" height="273"><br><strong>&nbsp;</strong></div><div><strong>Доказательство</strong>.</div><div>&nbsp;</div></div>
        <div>Пусть в треугольнике  ABC  сторона  AB  больше стороны  AC .</div>
        <div>Докажем, что  ∡  C>  ∡  B .</div><div>&nbsp;</div>
        <div>Отложим на стороне  AB  отрезок, равный стороне  AC . <br> Так как  AD< AB , то точка  D  лежит между точками  A  и  B . <br>
                           Следовательно, угол  1  является частью угла  C  и, значит  ∡  C>  ∡  1 . <br>
            <br>
            Угол  2  — внешний угол треугольника  BDC , поэтому  ∡  2>  ∡  B .<br>
            ∡  1=  ∡  2  как углы при основании равнобедренного треугольника  ADC .<br>
            Таким образом,  ∡  C>  ∡  1=  ∡  2>  ∡  B .<br>
            <br>
            Отсюда следует, что ∡  C>  ∡  B .<br>
            <br>
            <strong>Справедлива и обратная теорема.</strong>
        </div>
        <div class="gxst-theory"><div>В треугольнике против большего угла лежит большая сторона. <br></div></div>
        <div><div>Следствия.</div><div>&nbsp;</div><div><div><span class="gxst-emph">Следствие 1</span>. Если два угла треугольника равны, то треугольник равнобедренный (признак равнобедренного треугольника).</div><div>&nbsp;</div><div><span class="gxst-emph">Следствие 2</span>.&nbsp;Если три угла треугольника равны, то треугольник равносторонний.</div><div>&nbsp;</div><div><span class="gxst-emph">Следствие 3</span>. В прямоугольном треугольнике гипотенуза больше катета. <br><div class="gxst-title">Неравенство треугольника</div></div></div></div>
        <div class="gxst-theory"><div>Каждая сторона треугольника меньше суммы двух других сторон. <br></div></div>
        <div><img class="gxs-resource-image" alt="Lenki_malas2.png" src="//ykl-res.azureedge.net/6194fd92-0b0c-4a9d-b630-ff3b47aff2bc/Lenki_malas2.png" width="444" height="254"></div><div>&nbsp;</div>
        <div><strong>Доказательство</strong>.</div>
        <div>&nbsp;</div>
        <div>
            Рассмотрим треугольник  ABC  и докажем, что  AB < AC+BC <br>
            <br>
            Продолжим сторону  AC  и отложим отрезок  CD=BC .<br>
            Треугольник  BCD  — равнобедренный, следовательно ∡  1=  ∡  2 .<br>
            В треугольнике  ABD  очевидно, что ∡  ABD>  ∡  1 , что значит  ∡  ABD>  ∡  2 .<br>
            <br>
            Так как против большего угла лежит большая сторона,  AB < AD , а   AD=AC+BC , значит  AB< AC+BC .<br>
            <br>
            Следствие 4. Для любых трёх точек  A,B  и  C , не лежащих на одной прямой, справедливы неравенства:<br>
            AB < AC+CB,AC < AB+BC,BC < AB+AC .<br>
        </div>



    </div>
</template>

<script>
    export default {
        name: "AspectRatio"
    }
</script>

<style scoped>

</style>
