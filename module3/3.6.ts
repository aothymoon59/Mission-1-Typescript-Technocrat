{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set deposite(amount: number) {
      this._balance = this._balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // getter
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManuserAccount = new BankAccount(123, "Moon", 500);

  //   goribManuserAccount.addDeposit(20);  //function call korte hocche
  goribManuserAccount.deposite = 20; //propety er moto kore
  //   const myBalance = goribManuserAccount.getBalance();  //function call korte hocche

  const myBalance = goribManuserAccount.balance; //propety er moto kore
  console.log(myBalance);
  //
}
