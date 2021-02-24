// реализуйте функцию по созданию счётчика

function createCounter(initialValue = 0) {
    return {

        currentValue: initialValue,

        showValue() {
            return this.currentValue;
        },

        increment(number = 1) {
            return this.currentValue += number;
        },

        decrement(number = 1) {
            return this.currentValue -= number;
        },

        discard() {
            return this.currentValue = initialValue;
        }

    }
}

