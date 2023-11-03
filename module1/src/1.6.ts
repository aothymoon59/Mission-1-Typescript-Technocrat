// Learning function
// normal function
// arrow function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// this func give us error, because this function receive only number
add(2, true);

const addArrow = (num1: number, num2: number): number => num1 + num2;

//  object --> function --> method

const poorUser = {
  name: "Moon",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [2, 4, 6];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
