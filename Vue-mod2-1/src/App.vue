<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Формтой ажиллах</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Цахим хаяг</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="password">Нууц үг</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                                {{ userData.password }}
                    </div>
                    <div class="form-group">
                        <label for="age">Нас</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Мессеж</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Цахим шуудан илгээх
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Инфомайл илгээх
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Эрэгтэй"
                                v-model="gender"> Эрэгтэй
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Эмэгтэй"
                                v-model="gender"> Эмэгтэй
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Тэргүүлэх чиглэл</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option v-for="priority in priorities"> {{ priority }} </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Илгээх!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Таны оруулсан өгөгдлүүд</h4>
                    </div>
                    <div class="panel-body">
                        <p>Цахим хаяг: {{ userData.email }}</p>
                        <p>Нууц үг: {{ userData.password }}</p>
                        <p>Нас: {{ userData.age }}</p>
                        <p style="white-space: pre">Мессеж: {{ message }}</p>
                        <p><strong>Майл явуулах?</strong></p>
                        <ul>
                            <li v-for="mailItem in sendMail">{{ mailItem }}</li>
                        </ul>
                        <p>Хүйс: {{ gender }}</p>
                        <p>Тэргүүлэх чиглэл: {{ selectedPriority }}</p>
                        <p>Солих: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Switch from './Switch.vue'
    export default {
        data(){
            return{
                userData:{
                    email: '',
                    password: '',
                    age: 20
                },
                message: 'Энэ бол мессеж textarea',
                sendMail: [],
                gender: 'Эрэгтэй',
                priorities: ['Нэг', 'Хоёр', 'Гурав'],
                selectedPriority: 'Гурав',
                dataSwitch: true,
                isSubmitted: false
            }
        },
        components:{
            appSwitch: Switch
        },
        methods:{
            submitted(){
                this.isSubmitted = true
            }        
        }
    }
</script>

<style>

</style>
