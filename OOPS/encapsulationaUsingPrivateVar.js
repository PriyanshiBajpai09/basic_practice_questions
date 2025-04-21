class bank{
    #balance;
    constructor (accountno,balance){
        this.accountno=accountno;
        this.#balance= balance;
    }
    getBalance(){
        console.log(`${this.#balance}`);
    }
}

const jklu= new bank("ABCD",100000);
console.log(jklu.accountno);
console.log(jklu.balance);
jklu.getBalance();
