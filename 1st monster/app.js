new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage

            this.turns.unshift({
                isPlayer: true,
                text: 'Тоглогчийн зүгээс мангасыг ' + damage + '-оор цохилоо.'
            })

            if(this.checkWin()){
                return;
            }
            
            this.monsterAttack();
        },
        specialAttack: function(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Тоглогчийн зүгээс мангасыг тусгай ' + damage + '-оор цохилоо.'
            })


            if(this.checkWin()){
                return;
            }
            this.monsterAttack();

        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Тоглогч амиа нөхлөө...'
            })

            this.monsterAttack();
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        monsterAttack(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            this.turns.unshift({
                isPlayer: false,
                text: 'Мангасын зүгээс таныг ' + damage + '-оор цохилоо.'
            })

            this.checkWin();
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random()*max)+1, min);
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('Та хожлоо! Шинээр тоглолтыг эхлүүлэх үү?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm('Мангас хожлоо! Шинээр тоглолтыг эхлүүлэх үү?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});