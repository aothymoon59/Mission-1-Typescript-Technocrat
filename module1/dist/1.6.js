"use strict";
{
    // Learning function
    // normal function
    // arrow function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    // this func give us error, because this function receive only number
    add(2, 4);
    const addArrow = (num1, num2) => num1 + num2;
    //  object --> function --> method
    const poorUser = {
        name: "Moon",
        balance: 0,
        addBalance(balance) {
            return `My new balance is ${this.balance + balance}`;
        },
    };
    const arr = [2, 4, 6];
    const newArr = arr.map((elem) => elem * elem);
}
