<template>
    <div>
        <p>Гарчиг: {{ title }}</p>
        <button @click="changeTitle">Гарчиг өөрчлөх</button>
    </div>
</template>

<script>
export default{
    data: function(){
        return {
            title: 'Гарчиг-1'
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Гарчиг-2'
        }
    }
}
</script>

<style>

</style>