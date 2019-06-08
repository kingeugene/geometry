import Vue from 'vue';


import Home from '../components/layouts/Home.vue'
import Theory from '../components/layouts/Theory.vue'
import Practice from '../components/layouts/Practice.vue'
import Errors from '../components/Errors/404'
import FirstQuality from '../components/layouts/theory/7class/FirsteQualityTriangles'
import SecondMedians from '../components/layouts/theory/7class/SecondMedians'
import ThirdQuality from '../components/layouts/theory/7class/ThirdQualityTriagles'
import SumTriagles from '../components/layouts/theory/7class/SumTriagles'
import AspectRation from '../components/layouts/theory/7class/AspectRatio'
import RightTriangles from '../components/layouts/theory/7class/RightTriangles'
import Parallelogram from '../components/layouts/theory/8class/Parallelogram'
import Polygons from '../components/layouts/theory/8class/Polygons'
import Rhombus from '../components/layouts/theory/8class/Rhombus'
import Sine from '../components/layouts/theory/9class/Sine'
import RelationsBetween from '../components/layouts/theory/9class/RelationsBetween'
import QulityTrianglesF from '../components/layouts/practice/7class/QulityTrianglesF'



import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/theory', component: Theory },
    { path: '/practice', component: Practice },

    //Теория
    { path: '/theory/firstQuality', component: FirstQuality},
    { path: '/theory/secondMedians', component: SecondMedians },
    { path: '/theory/thirdQuality', component: ThirdQuality },
    { path: '/theory/sumTriagles', component: SumTriagles },
    { path: '/theory/aspectRation', component: AspectRation },
    { path: '/theory/rightTriangles', component: RightTriangles },
    { path: '/theory/parallelogram', component: Parallelogram },
    { path: '/theory/polygons', component: Polygons },
    { path: '/theory/rhombus', component: Rhombus },
    { path: '/theory/sine', component: Sine },
    { path: '/theory/relationsBetween', component: RelationsBetween },
    //Конец Теории

    //Практика
    { path: '/theory/qulityTrianglesF', component: QulityTrianglesF},



    { path: '*', component: Errors }
];

export const router = new VueRouter({
    routes,
    mode: 'history'

});
