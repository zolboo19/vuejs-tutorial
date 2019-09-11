<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Хэрэглэгчийн нэр: {{ switchName() }}</p>
        <button @click="resetFn()">Нэр дахин тохируулах</button>
    </div>
</template>

<script>
    export default{
        props: {
            myName: {
                type: String,
                //required: true
                default: 'Tsogoo'
            },
            resetFn: Function
        },
        methods:{
            switchName(){
                return this.myName.split("").reverse("").join("");
            },
            resetName(){
                this.myName = 'Zolboo';
                this.$emit('nameWasReset', this.myName)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
