<template>
  <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <label>Эшлэл</label>
            <textarea class="form-control" cols="30" rows="10" v-model="quote"></textarea>
            </div>
                <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                    <button class="btn btn-primary" @click.prevent="createNew">Шинэ эшлэл нэмэх</button>
                </div>
        </form>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            quote: ''
        }
    },
    methods:{
        createNew(){
            this.$emit('quoteAdded', this.quote);
            this.quote = ''
        }
    }

}
</script>

<style>

</style>