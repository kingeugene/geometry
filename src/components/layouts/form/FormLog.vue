<template>
    <div class="container">
        <h2>Онлайн заявка</h2>
        <form>
            <label>Имя <br> <input type="text" v-model="nameUser"></label>
            <label>Номер <br> <input type="text" v-model="phoneNumber"></label>
            <label>Имейл: <br> <input type="text" v-model="mailUser"></label>
           <p style="text-align: center; color: green" v-if="textShow">Спасибо за заявку</p>
                <input type="submit" @click.prevent="sendData()">

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mailUser: '',
                nameUser: '',
                phoneNumber: '',
                testName: this.$store.state.dataUser,
                textShow: false
            }
        }   ,
        computed: {
          dataUser: function () {
              return "Имя: " + this.nameUser + '; Телефон: ' + this.phoneNumber + '; Имейл: ' + this.mailUser;
          }
        },
        methods: {
            sendData() {
                this.$store.commit('pushData', this.dataUser);
                this.textShow = true;
                setTimeout(() => {
                    this.textShow = false;
                },2000)

            }
        }

    }
</script>

<style scoped>
    form {
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    input[type = 'text'] {
        height: 30px;
        width: 250px;
    }
    input[type = 'submit'] {
        margin-bottom: 50px;
    }
    label {
        text-align: center;
        margin-bottom: 15px;
    }

</style>
