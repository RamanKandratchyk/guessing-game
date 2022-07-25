class GuessingGame {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.step = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.a = min;
        this.b = max;
        this.step = Math.round((this.b - this.a) / 2);
        this.result = min;
    }

    guess() {
        this.result = this.result + this.step;
        // this.output();
        return this.result;
    }

    lower() {
        this.step = - Math.floor(Math.abs(this.step) / 2);
        // console.log(`lower`);
    }

    greater() {
        this.step = Math.round(Math.abs(this.step) / 2);
        // console.log(`greater`);

    }

    output() {
        // console.log(`a = ${this.a}`);
        // console.log(`b = ${this.b}`);
        console.log(`step = ${this.step}`);
        console.log(`result = ${this.result}`);
        console.log(`*************************`);
    }
}

module.exports = GuessingGame;

const game = new GuessingGame();
game.setRange(0, 4048)

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();