class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Successfully deposited ${amount} into account ${this.accountNumber}.`);
        } else {
            console.log(" Please deposit a positive amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Successfully withdrew ${amount} from account ${this.accountNumber}.`);
            } else {
                console.log(" Cannot withdraw more than current balance.");
            }
        } else {
            console.log("Please withdraw a positive amount.");
        }
    }

    getBalance() {
        console.log(`Current balance of account ${this.accountNumber}: ${this.balance}`);
    }
}


const account1 = new BankAccount("123456789", "John Doe", 1000);
const account2 = new BankAccount("987654321", "Jane Smith", 500);


account1.deposit(600);   
account1.withdraw(300);   
account1.getBalance();     
account2.withdraw(700);    
account2.deposit(-120);    
account2.getBalance();     
