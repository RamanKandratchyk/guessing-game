class GuessingGame {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    setRange(min, max) {
        this.a = min;
        this.b = max;
    }

    guess() {
        this.result = Math.round((this.a + this.b) / 2);
        // this.output();
        return this.result;
    }

    lower() {
        this.b = this.result;
        // console.log(`lower`);
    }

    greater() {
        this.a = this.result;
        // console.log(`greater`);

    }

    output() {
        console.log(`a = ${this.a}`);
        console.log(`b = ${this.b}`);
        console.log(`result = ${this.result}`);
        console.log(`*************************`);
    }
}

module.exports = GuessingGame;