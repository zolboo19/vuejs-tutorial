<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Text'"></p>
                <p v-html="'<b>Some text</b>'"></p>
                <p v-highlight:background.delayed="'red'">some one text</p>
                <p v-local-highlight-color:background.delayed.blink="{ mainColor: 'red', secondColor: 'blue', delay: 500 }">local some one text</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight-color': {
                bind: (el, binding, vnode) => {
                    //el.style.backgroundColor = 'blue';
                    //el.style.backgroundColor = binding.value;
                    var delay = 0;

                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }

                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor;
                        let secondColor  = binding.value.secondColor;
                        let currentColor = mainColor;
                        console.log(currentColor);
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background'){
                                    
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor
                                }
                            }, binding.value.delay);
                            
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if(binding.arg == 'background'){
                                    el.style.backgroundColor = binding.value.mainColor;
                                } else {
                                    el.style.color = binding.value.mainColor;
                                }
                        }, delay);
                    }

                    
                }
            }
        }
    }
</script>

<style>

</style>
