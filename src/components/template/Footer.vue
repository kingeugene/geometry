<template>
    <div class="footer">
        <div class="container footer-wrapper">
            <div class="footer-logo">
                <img src="../../assets/logo/logo.png" alt="">
                <div class="footer-logo__copyright">
                    &copy; Сайт геометрии 2019
                </div>
            </div>
            <div class="footer-menu">
                <div class="footer-menu__title"><router-link to="/" class="btn">Главная</router-link></div>
                <div class="footer-menu__title"><router-link to="/theory" class="btn">Теория</router-link></div>
                <div class="footer-menu__title"><router-link to="/practice" class="btn">Практика</router-link></div>
            </div>
            <div class="footer-social">
                <div class="footer-social__title">Мы в соцсетях:</div>
                <div class="footer-social__icon">
                    <img src="../../assets/iconsSociel/icon-facebook.png" alt="">
                    <img src="../../assets/iconsSociel/icon-instagram.png" alt="">
                    <img src="../../assets/iconsSociel/icon-twitter.png" alt="">
                    <img src="../../assets/iconsSociel/icon-vk.png" alt="">
                    <img src="../../assets/iconsSociel/icon-youtube.png" alt="">
                </div>
            </div>
            <div class="footer-contacts">
                <div class="footer-contacts__title">Наши контакты: </div>
                <div>Телефоны: <span style="font-weight: bold">0991280388</span>, <span style="font-weight: bold">0505025438</span></div>
                <div>Почта: <span style="font-weight: bold">info-geometry@mail.ru</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

