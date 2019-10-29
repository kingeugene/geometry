<template>
    <div class="container">
        <div v-show="enterLogin">
            <h1>Вход</h1>
            <form >
                <div style="color: red; text-align: center; margin: 10px">{{errorMess}}</div>
                <input type="text" placeholder="Логин" v-model="login"> <br>
                <br>
                <input type="text" placeholder="Пароль" v-model="password"><br>
                <input style="margin: auto" value="Войти" type="submit" @click.prevent="checkAcc()">
            </form>

        </div>
        <div v-if="formAdmin">
            <h1>Онлайн заявки</h1>

            <ul>
                <li v-for="(item, index) in history" :key="item">{{item}} <span style="float: right; cursor: pointer; color: red" @click="deleteMess(index)">Удалить</span></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

                login: '',
                password: ''

            }
        },
        computed: {
            formAdmin() {
                return this.$store.state.formAdmin;
            },
            enterLogin() {
                return this.$store.state.enterLogin;
            },
            errorMess() {
                return this.$store.state.errorMess;
            },
            history() {
                return this.$store.state.dataUser;
            }
        },

        methods: {
            checkAcc() {
                this.$store.commit('checkAcc', {login: this.login, password: this.password} );
            },
            deleteMess(val) {
                this.$store.commit('deleteMess', val)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
    li {
        padding: 10px 10px;
    }
    li:nth-child(even) {
        background: aqua;
    }
    li:nth-child(odd) {
        background: aquamarine;
    }
    form {
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    input[type = 'text'] {
        height: 30px;
    }

</style>
