<template>
  <div>
      <h1>New component</h1>
      <button @click="counter++">Нэмэх</button>
      <button @click="counter--">Хасах</button>
      <p> {{ counter }} </p>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            counter: 0
        }
    },
    created(){
        console.log('new vue instance үүслээ...');
    },
    destroyed(){
        console.log('new vue instance устлаа...');
    },
    deactivated(){
        console.log('new vue instance идэвхигүй боллоо...');
    },
    activated(){
        console.log('new vue instance идэвхижлээ...')
    }

}
</script>

<style>

</style>