// Account object with same payments
const account1 = [
    {
        monthNumber: 0,
        account: {
            balance: {amount: 0},
        },
    },
    {
        monthNumber: 1,
        account: {
            balance: {amount: 100},
        },
    },
    {
        monthNumber: 2,
        account: {
            balance: {amount: 200},
        },
    },
    {
        monthNumber: 3,
        account: {
            balance: {amount: 300},
        },
    },
    {
        monthNumber: 4,
        account: {
            balance: {amount: 400},
        },
    },
    {
        monthNumber: 5,
        account: {
            balance: {amount: 500},
        },
    }
]

// Account object with different payments
const account2 = [
    {
        monthNumber: 0,
        account: {
            balance: {amount: 0},
        },
    },
    {
        monthNumber: 1,
        account: {
            balance: {amount: 100},
        },
    },
    {
        monthNumber: 2,
        account: {
            balance: {amount: 200},
        },
    },
    {
        monthNumber: 3,
        account: {
            balance: {amount: 300},
        },
    },
    {
        monthNumber: 4,
        account: {
            balance: {amount: 400},
        },
    },
    {
        monthNumber: 5,
        account: {
            balance: {amount: 501},
        },
    }
]

// Not enough account history
const account3 = [
    {
        monthNumber: 0,
        account: {
            balance: {amount: 0},
        },
    },
    {
        monthNumber: 1,
        account: {
            balance: {amount: 100},
        },
    }
]


/**
 * Assume array is sorted and contiguous
 *
 * @param account
 * @returns boolean
 */
const hasSamePayments = (account) => {

    if (account.length < 3) {
        throw('Account history must have at least 3 consecutive months')
    }

    samePayments = null
    index = 0;
    do {
        if
        (
            (account[index + 1].account.balance.amount - account[index].account.balance.amount)
            ===
            (account[index + 2].account.balance.amount - account[index + 1].account.balance.amount)
        ) {
            samePayments = true
        } else {
            samePayments = false
        }
        index++
    } while (index < account.length - 2 && samePayments === true)

    return samePayments;
}
/**
 *
 * @param accountBalanceHistory
 * @returns {string}
 */
const accountTypeChecker = (accountBalanceHistory) => {
    return hasSamePayments(accountBalanceHistory) ? "B" : "A";
};

// True
console.log(accountTypeChecker(account1))
// False
console.log(accountTypeChecker(account2))
// Broken
console.log(accountTypeChecker(account3))
