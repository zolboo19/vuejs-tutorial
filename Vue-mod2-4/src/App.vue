<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <br><br>
                <select v-model="animationName" >
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>

                <transition :name="animationName" appear>
                    <div class="alert alert-info" v-show="show">Энэ бол фаде трансишн</div>
                </transition>

                <transition name="slide" type="transition" appear>
                    <div class="alert alert-info" v-if="show">Энэ бол слайд трансишн</div>
                </transition>

                <transition 
                    appear
                    enter-to-class="animated bounce"
                    leave-to-class="animated shake"
                    mode="in-out"
                    >
                    <div class="alert alert-info" v-show="show">Энэ бол фаде трансишн animated ашиглав.</div>
                </transition>

                <transition :name="animationName" appear>
                    <div class="alert alert-info" v-if="show" key="true"> v-if үнэн. Энэ бол олон трансишн</div>
                    <div class="alert alert-warning" v-else key="false">v-if худал.Энэ бол олон трансишн</div>
                </transition>

                <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
                <br><br>
                <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    v-on:enter-cancelled="enterCancelled"

                    v-on:before-leave="beforeLeave"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave"
                    v-on:leave-cancelled="leaveCancelled"
                    appear
                    >
                    <div style="width: 100px; height: 100px;  background-color: green" v-if="load"></div>
                </transition>

                <br><br>
                <button class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
                    >Компонент сонгох</button>
                    <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>

                <button class="btn btn-primary" @click="addNumber">Санамсаргүй тоо жагсаалтанд нэмэх</button>
                <br> <br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                            class="list-group-item" 
                            v-for="(number, index) in numbers" 
                            @click="removeNumber(index)"
                            style="cursor: pointer"
                            :key="number"
                            > {{ number }} 
                        </li>
                    </transition-group>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';
    export default {
        data() {
            return {
                show : true,
                load: true,
                animationName: "fade",
                elementWidth: 100,
                selectedComponent: "app-success-alert",
                numbers: [1, 2, 3, 4, 5, 6]
            }
        },
        methods:{
            beforeEnter(el){
                console.log("beforeEnter");
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done){
                console.log("enter");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el){
                console.log("afterEnter");
            },
            enterCancelled(el){
                console.log("enterCancelled");
            },
            beforeLeave(el){
                console.log("beforeLeave");
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done){
                console.log("Leave");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el){
                console.log("afterLeave");
            },
            leaveCancelled(el){
                console.log("leaveCancelled");
            },

            addNumber(){
                console.log(this.numbers.length);
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1)
            },
            removeNumber(index){
                this.numbers.splice(index, 1);
            }
        },
        components:{
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        /* opacity: 1; */
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
    }
    .slide-enter-active {
        animation: slide-in 1s ease-in forwards;
        transition: opacity 2s;
        opacity: 1;
        
    }
    .slide-move {
        transition: transform 1s;
    }
    .slide-leave {
        
    }
    .slide-leave-active {
        animation: slide-out 1s ease-in-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px)
        }

        to {
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0)
        }

        to {
            transform: translateY(20px)
        }
    }
</style>
