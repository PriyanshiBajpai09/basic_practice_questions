class bankAccount{
    balance=0;
    constructor(credit, debit){
        this.credit=credit;
        this.debit = debit;
    }
    deposit(){
        this.balance+= this.credit;
        console.log(this.balance);
    }
    withdraw(){
        this.balance-= this.debit;
        console.log(this.balance);
    }
    getBalance(){
        console.log(this.balance);
    }

}

const account = new bankAccount(1000,100);
account.deposit();
account.withdraw();
account.getBalance();
