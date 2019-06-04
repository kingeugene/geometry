<template>
  <div id="app">
      <header-site></header-site>
      <div class="content">
          <!-- отображаем тут компонент, для которого совпадает маршрут -->
          <router-view></router-view>
      </div>
      <footer-site></footer-site>
  </div>
</template>

<script>
  import Home from './components/layouts/Home.vue'
  import Theory from './components/layouts/Theory.vue'
  import Practice from './components/layouts/Practice.vue'
  import HeaderSite from './components/template/Header.vue'
  import FooterSite from './components/template/Footer.vue'

  export default {
    name: 'app',
    components: {
      Home, Theory, Practice, HeaderSite, FooterSite
    }
  }
</script>


