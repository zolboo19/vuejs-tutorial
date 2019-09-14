<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Хашилт</button>
                <button @click="selectedComponent = 'appAuthor'">Зохиогч</button>
                <button @click="selectedComponent = 'appNew'">Шинэ</button>
                <hr>
                <p> {{ selectedComponent }} </p>
                <hr>

                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
                <!-- <app-quote>
                        <h2 slot="title"> {{ quoteTitle }} </h2>
                        <div>
                            <small>Hello хашилт</small>
                            <p>гарчиг</p>
                        </div>
                        <h1 slot="title">Hello</h1>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data: function(){
            return {
                quoteTitle: 'Гайхамшигт хашилт',
                selectedComponent: 'appQuote'
            }
        },
        components:{
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
