<template>
  <div>
    <div class="logoBlock">
      <img class="logoHome" src="../../assets/homeImg/previewHome.jpg" alt="">
      <div class="container logoText">
        <h1 class="logoText-title">ШКОЛЬНОЕ ОБРАЗОВАНИЕ И РАЗВИВАЮЩИЕ ЗАНЯТИЯ ГЕОМЕТРИИ</h1>
        <div class="logoText-small">Развивающие занятия - главный инструмент, позволяющий вырастить из ребенка гения !!! Каждый человек уникален.</div>
      </div>
    </div>
    <div class="container">
      <h2>ПОЧЕМУ МЫ ЛУЧШИЕ СРЕДИ ЦЕНТРОВ ОБУЧЕНИЯ</h2>

        <div class="advantages">
          <div class="advantagesItem">
            <div class="advantagesItem-img"><img src="../../assets/iconsAdvantages/electric-light-bulb.png" alt=""></div>
            <div class="advantagesItem-text">15 Секций и Кружков</div>
          </div>
          <div class="advantagesItem">
            <div class="advantagesItem-img"><img src="../../assets/iconsAdvantages/pencil.png" alt=""></div>
            <div class="advantagesItem-text">3-Х ЧАСОВЫЕ ЗАНЯТИЯ</div>
          </div>
          <div class="advantagesItem">
            <div class="advantagesItem-img"><img src="../../assets/iconsAdvantages/settings-work-tool.png" alt=""></div>
            <div class="advantagesItem-text">Только опытные ПРЕПОДАВАТЕЛИ</div>
          </div>
          <div class="advantagesItem">
            <div class="advantagesItem-img"><img src="../../assets/iconsAdvantages/computer-screen.png" alt=""></div>
            <div class="advantagesItem-text">НОВАЯ СИСТЕМА ОБУЧЕНИЯ</div>
          </div>
        </div>
    </div>
    <!--<paralax></paralax>-->
  </div>
</template>

<script>
import Paralax from '../modules/Parallax'

  export default {
    name: 'Home',
    components: {
      Paralax
    }
  }
</script>
<style scoped>
  h2 {
    text-align: center;
    margin: 30px;
  }
  .logoBlock {
    position: relative;
    height: 500px;
  }
  .logoHome {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .logoText {
    position: absolute;
    width: 100%;
    top: 40%;
    text-align: center;
    color: #fff;
  }
  .logoText-title {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .logoText-small {
    font-size: 20px;
  }
  .advantages {
    display: flex;
    justify-content: space-between;

  }
  .advantagesItem {
    width: 30%;
  }
  .advantagesItem-img {
    margin: 20px;
  }
  .advantagesItem-img img {
    width: 20%;
    margin: auto;
    display: block;
  }
  .advantagesItem-text {
    text-align: center;
    text-transform: uppercase;
  }
</style>

