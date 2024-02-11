const fs = require('fs').promises;
const EventEmitter = require('events');
const readline = require('readline');

const eventEmitter = new EventEmitter();

async function saveUserData(users) {
    try {
        await fs.writeFile('users.json', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Erreur lors de l\'écriture des données utilisateur:', error);
    }
}

async function authenticateUser(accountID, pin) {
    try {
        const usersData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(usersData);
        console.log('Utilisateurs trouvés dans le fichier :', users);
        return users.find(u => u['ID de compte'] === accountID && u['épingle'] === pin);
    } catch (error) {
        console.error('Erreur lors de l\'authentification de l\'utilisateur:', error);
        return null;
    }
}

async function deposit(user, amount) {
    try {
        const userData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(userData);
        const currentUser = users.find(u => u['ID de compte'] === user['ID de compte']);
        currentUser.solde += amount;
        currentUser.transactions.push({ type: 'dépôt', montant: amount, date: new Date().toLocaleDateString() });
        await saveUserData(users);
        console.log(`Deposited ${amount} into ${user.nom}'s account.`);
    } catch (error) {
        console.error('Erreur lors du dépôt:', error);
    }
}

async function withdraw(user, amount) {
    try {
        const userData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(userData);
        const currentUser = users.find(u => u['ID de compte'] === user['ID de compte']);
        if (currentUser.solde < amount) {
            throw new Error('Insufficient funds');
        }
        currentUser.solde -= amount;
        currentUser.transactions.push({ type: 'retirer', montant: amount, date: new Date().toLocaleDateString() });
        await saveUserData(users);
        console.log(`Withdrawn ${amount} from ${user.nom}'s account.`);
    } catch (error) {
        console.error('Erreur lors du retrait:', error);
    }
}

async function checkBalance(user) {
    console.log(`${user.nom}'s current balance: ${user.solde}`);
}

function viewTransactions(user) {
    console.log(`${user.nom}'s transaction history:`);
    console.log(user.transactions);
}

eventEmitter.on('deposit', deposit);
eventEmitter.on('withdraw', withdraw);
eventEmitter.on('checkBalance', checkBalance);
eventEmitter.on('viewTransactions', viewTransactions);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const accountID = await askQuestion('Enter account ID: ');
    const pin = await askQuestion('Enter PIN: ');

    const user = await authenticateUser(accountID, pin);
    if (user) {
        console.log('Authentication successful.');
        console.log('1. Check Balance');
        console.log('2. Deposit Money');
        console.log('3. Withdraw Money');
        console.log('4. View Transaction History');

        const choice = await askQuestion('Enter your choice: ');
        switch (choice) {
            case '1':
                eventEmitter.emit('checkBalance', user);
                break;
            case '2':
                const depositAmount = parseFloat(await askQuestion('Enter amount to deposit: '));
                await eventEmitter.emit('deposit', user, depositAmount);
                break;
            case '3':
                const withdrawAmount = parseFloat(await askQuestion('Enter amount to withdraw: '));
                await eventEmitter.emit('withdraw', user, withdrawAmount);
                break;
            case '4':
                eventEmitter.emit('viewTransactions', user);
                break;
            default:
                console.log('Invalid choice');
        }
    } else {
        console.log('Authentication failed.');
    }
    rl.close();
})();

async function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
