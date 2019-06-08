<template>
    <div class="container">
        <div class="gxst-title">Синус, косинус и тангенс угла</div>
        <div>В системе координат построим полуокружность радиуса 1 с центром в начале координат.</div><div>&nbsp;</div>
        <div><img class="gxs-resource-image" alt="Vienibas_pusr.png" src="//ykl-res.azureedge.net/0e4299fb-28ae-4a30-8eac-27acc76e5385/Vienibas_pusr.png" width="522" height="331"></div>
        <div>&nbsp;</div><div>Как уже известно, в прямоугольном треугольнике синус острого угла определяется как отношение противолежащего катета к гипотенузе, а косинус острого угла определяется как отношение прилежащего катета к гипотенузе. </div>
        <div>
            В треугольнике  AOX : <br>
            sinα=AX / AO; cosα=OX / AO . <br>
            Так как радиус полуокружности  R=AO=1 , то  sinα=AX;cosα=OX . <br>
        </div>
        <div class="gxst-theory">
            <div>
                Длина отрезка  AX  равна величине координаты  y  точки  A , а длина отрезка  OX  равна величине координаты  x  точки  A :
                A(cosα;sinα) .
            </div>
        </div>
        <br>
        <div>Следовательно, для углов  0°≤α≤180°  видно, что  −1≤cosα≤1;0≤sinα≤1 .</div>
        <div class="gxst-theory">
            <div>
                В прямоугольном треугольнике тангенс острого угла равен отношению противолежащего катета к прилежащему катету, а значит,
                tgα=AX / OX=sinα / cosα .
            </div>
        </div>
        <br>
        <div>
            Используя единичную полуокружность и рассмотренную информацию, определим синус, косинус и тангенс для  0°;90°;180° .
            <br>

            sin0°=0;cos0°=1;tg0°=0;sin90°=1;cos90°=0;tg90° не существует;sin180°=0;cos180°=−1;tg180°=0.            <br>


            Рассмотрим оба острых угла в треугольнике  AOX . Если вместе они образуют  90° , то оба выразим через  α .            <br>

        </div>
        <div><img class="gxs-resource-image" alt="Vienibas_pusr2.png" src="//ykl-res.azureedge.net/6c0976a7-e83a-4802-bfff-3dae2e51ca1e/Vienibas_pusr2.png" width="501" height="317"></div>
        <div>
            Если  sinα=AX / AO;cosα=OX / AO , то  sin(90°−α)=OX / AO;cos(90°−α)=AX / AO . <br>
            <br>
            Видим, что справедливы равенства: <br>
            cos(90°−α)=sinα;sin(90°−α)=cosα. <br>
            <br>
            Рассмотрим тупой угол, который также выразим через  α . <br>
        </div>
        <br>
        <div><img class="gxs-resource-image" alt="Vienibas_pusr1.png" src="//ykl-res.azureedge.net/5801ddd0-5aa0-4b0e-bda6-1290ccc1b4d5/Vienibas_pusr1.png" width="516" height="327"></div>
        <div>
            Справедливы следующие равенства: <br>
            sin(180°−α)=sinα;cos(180°−α)=−cosα. <br>

        </div>
        <div class="gxst-theory">
            <div>
                Эти формулы называются формулами приведения: <br>
                <br>
                cos(90°−α)=sinα;sin(90°−α)=cosα. <br>
                <br>
                sin(180°−α)=sinα;cos(180°−α)=−cosα. <br>
            </div>
        </div>
        <br>
        <div>Если в треугольнике  AOX  применить теорему Пифагора, получаем  AX2+OX2=1 . Заменив отрезки соответственно синусом и косинусом, мы напишем  </div>
        <div class="gxst-theory">
            <div>
                Главное тригонометрическое тождество <br>
                sin2α+cos2α=1 .
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Sine"
    }
</script>

<style scoped>

</style>
