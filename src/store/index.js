import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dataUser: [],
        adminPanel: {
            user: 'admin',
            password: 'password'
        },
        formAdmin: false,
        enterLogin: true,
        errorMess: ''
    },
    mutations: {
        pushData(state, payload) {
            state.dataUser.push(payload)
        },
        checkAcc(state, payload) {
            if (payload.login === state.adminPanel.user && payload.password === state.adminPanel.password) {
                state.errorMess = '';
                state.formAdmin = true;
                state.enterLogin = false;
            }else {
                state.errorMess = 'Неверные доступы'
            }
        },
        deleteMess(state, payload) {
            console.log(state.dataUser);
            state.dataUser.splice(payload.val, 1);
            console.log(state.dataUser);

        }
    }
});
