const fs = require('fs').promises;
const EventEmitter = require('events');
const readline = require('readline');
const { v4: uuidv4 } = require('uuid');

const eventEmitter = new EventEmitter();
const MAX_WITHDRAWAL_AMOUNT = 5000;

async function initializeTransactionsFile() {
    try {
        await fs.access('transactions.json');
    } catch (error) {
        // Le fichier transactions.json n'existe pas, donc nous le créons avec une liste vide de transactions
        await fs.writeFile('transactions.json', '[]');
    }
}

async function saveUserData(users, transactions) {
    try {
        await fs.writeFile('users.json', JSON.stringify(users, null, 2));
        await fs.writeFile('transactions.json', JSON.stringify(transactions, null, 2));
    } catch (error) {
        console.error('Erreur lors de l\'écriture des données utilisateur ou des transactions:', error);
    }
}

async function createUser(name) {
    const pin = Math.floor(1000 + Math.random() * 9000); // Génère un code PIN à 4 chiffres
    const newUser = {
        "ID de compte": uuidv4(),
        "nom": name,
        "épingle": pin.toString(),
        "solde": 0,
        "transactions": []
    };
    try {
        const userData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(userData);
        users.push(newUser);
        await saveUserData(users, []);
        console.log(`Utilisateur ${name} ajouté avec succès. Votre ID de compte est ${newUser['ID de compte']} et votre PIN est ${pin}.`);
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
    }
}

async function authenticateUser(accountID, pin) {
    try {
        const usersData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(usersData);
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
        await saveUserData(users, currentUser.transactions);
        console.log(`Dépôt de ${amount} dans le compte de ${user.nom}.`);
    } catch (error) {
        console.error('Erreur lors du dépôt:', error);
    }
}

async function withdraw(user, amount) {
    try {
        const userData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(userData);
        const currentUser = users.find(u => u['ID de compte'] === user['ID de compte']);

        if (amount > MAX_WITHDRAWAL_AMOUNT) {
            throw new Error(`Le montant de retrait dépasse la limite autorisée de ${MAX_WITHDRAWAL_AMOUNT} dh.`);
        }

        if (currentUser.solde < amount) {
            throw new Error('Fonds insuffisants');
        }

        currentUser.solde -= amount;
        currentUser.transactions.push({ type: 'retirer', montant: amount, date: new Date().toLocaleDateString() });
        await saveUserData(users, currentUser.transactions);
        console.log(`Retrait de ${amount} dh du compte de ${user.nom}.`);
    } catch (error) {
        if (error.message.startsWith('Le montant de retrait dépasse la limite autorisée')) {
            console.log(error.message);
            await withdrawPrompt(user); // Appel de la fonction de retrait avec une nouvelle invitation
        } else {
            console.error('Erreur lors du retrait:', error);
        }
    }
}

async function withdrawPrompt(user) {
    const newAmount = parseFloat(await askQuestion('Entrez un nouveau montant à retirer: '));
    await withdraw(user, newAmount);
}

async function checkBalance(user) {
    console.log(`Solde actuel de ${user.nom}: ${user.solde}`);
}

function viewTransactions(user) {
    console.log(`Historique des transactions de ${user.nom}:`);
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
    await initializeTransactionsFile();
    const choice = await askQuestion('1. Connexion\n2. Créer un nouveau compte\n');
    if (choice === '1') {
        const accountID = await askQuestion('Entrez l\'ID du compte: ');
        const pin = await askQuestion('Entrez le PIN: ');

        const user = await authenticateUser(accountID, pin);
        if (user) {
            console.log('Authentification réussie.');
            console.log('1. Vérifier le solde');
            console.log('2. Déposer de l\'argent');
            console.log('3. Retirer de l\'argent');
            console.log('4. Voir l\'historique des transactions');

            const operation = await askQuestion('Entrez votre choix: ');
            switch (operation) {
                case '1':
                    eventEmitter.emit('checkBalance', user);
                    break;
                case '2':
                    const depositAmount = parseFloat(await askQuestion('Entrez le montant à déposer: '));
                    await eventEmitter.emit('deposit', user, depositAmount);
                    break;
                case '3':
                    const withdrawAmount = parseFloat(await askQuestion('Entrez le montant à retirer: '));
                    await withdraw(user, withdrawAmount);
                    break;
                case '4':
                    eventEmitter.emit('viewTransactions', user);
                    break;
                default:
                    console.log('Choix invalide');
            }
        } else {
            console.log('Authentification échouée.');
        }
    } else if (choice === '2') {
        const name = await askQuestion('Entrez votre nom: ');
        await createUser(name);
    } else {
        console.log('Choix invalide');
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
