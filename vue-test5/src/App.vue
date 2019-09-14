<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDelete="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Мэдээлэл: Эшлэл дээр дарж устгана уу?
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';
    export default {
        data: function(){
            return {
                quotes: [
                    'Энэ бол шүлэг.'
                ],
                maxQuotes: 10
            }
        },
        components:{
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Эшлэлүүдээс устгана уу? Зөвшөөрөгдсөн хамгийн ух утгаас хэтэрсэн байна.')
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index, 1)
            }
        }
    }
</script>

<style>
</style>
