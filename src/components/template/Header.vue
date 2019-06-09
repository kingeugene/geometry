<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="header-logo"><router-link to="/"><img src="../../assets/logo/logo.png" alt="logo"></router-link></div>
                <div class="header-mode">Режим работы: c 9:00 до 16:00</div>
                <ul class="header-menu">
                        <router-link tag="li" to="/" active-class="active" exact class="header-menu__title"><a class="btn">Главная</a></router-link>
                        <router-link tag="li" to="/theory" active-class="active" class="header-menu__title"><a class="btn">Теория</a></router-link>
                        <router-link tag="li" to="/practice" active-class="active" class="header-menu__title"><a class="btn">Практика</a></router-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .active {
        background: indigo ;
        color: black;
    }
    .active a {
        color: #fff;
    }
</style>

