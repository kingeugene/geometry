<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="header-logo"><img src="../../assets/logo/logo.png" alt="logo"></div>
                <div class="header-mode">Режим работы: c 9:00 до 16:00</div>
                <div class="header-menu">
                        <div class="header-menu__title"><router-link to="/" class="btn">Главная</router-link></div>
                        <div class="header-menu__title"><router-link to="/theory" class="btn">Теория</router-link></div>
                        <div class="header-menu__title"><router-link to="/practice" class="btn">Практика</router-link></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

