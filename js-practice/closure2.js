function createBankAccount() {
    let balance = 1000

    function deposit(num) {
        if (num > 0) {
            balance += num
        } else {
            console.log("Amount must be greater than 0")
        }
        return balance
    }


    function withdraw(num) {
        if (num <= 0) {
            console.log("Amount must be greater than 0")
        } else if (balance < num) {
            console.log("Insufficient Balance!!!")
        } else {
            balance -= num
        }
        return balance
    }

    function getBalance() {
        return balance
    }

    return { deposit, withdraw, getBalance }

}

const account = createBankAccount()

account.deposit(500)
console.log(account.getBalance())

account.withdraw(200)
console.log(account.getBalance())

account.withdraw(1400)
console.log(account.getBalance())