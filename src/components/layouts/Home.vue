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

    <paralax></paralax>

    <lihtbox-gallery></lihtbox-gallery>

    <div class="container">
      <h2>Как проходят наши занятия</h2>
      <p style="text-align: center; margin-bottom: 30px;">Обучение предполагается как процесс интеллектуально-практической деятельности, основанной на жизненном опыте учащихся. Дедуктивные умозаключения, отдельные рассуждения, способствующие усвоению учащимися в дальнейшем систематического курса геометрии, вводятся постепенно. Уделяется внимание развитию речи: работе с терминами, понятиями, определениями.</p>
      <slider-gallery></slider-gallery>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.457611637175!2d34.09510751500175!3d44.97501427397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eadd8a11dc792b%3A0xd8c284d608261726!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgMTM3LCDQodC40LzRhNC10YDQvtC_0L7Qu9GM!5e0!3m2!1sru!2sua!4v1559727930437!5m2!1sru!2sua" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
import Paralax from '../modules/Parallax'
import LihtboxGallery from '../modules/Gallery'
import SliderGallery from '../modules/Slider'

  export default {
    name: 'Home',
    components: {
      Paralax, LihtboxGallery, SliderGallery
    }
  }
</script>
<style scoped>

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

