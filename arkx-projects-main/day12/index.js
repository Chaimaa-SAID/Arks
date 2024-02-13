const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Liste vide pour stocker les contacts
const contacts = [];

// Fonction pour ajouter un contact
function addContact() {
  rl.question('Entrez le nom: ', name => {
    rl.question('Entrez le numéro de téléphone: ', phoneNumber => {
      const contact = { name, phoneNumber };
      contacts.push(contact);
      console.log('Contact ajouté avec succès!');
      mainMenu();
    });
  });
}

// Fonction pour afficher tous les contacts
function displayContacts() {
  if (contacts.length === 0) {
    console.log('Aucun contact trouvé.');
  } else {
    console.log('Contacts:');
    contacts.forEach(contact => {
      console.log(`Nom: ${contact.name}, Numéro de téléphone: ${contact.phoneNumber}`);
    });
  }
  mainMenu();
}

// Fonction pour rechercher un contact
function searchContact() {
  rl.question('Entrez le nom à rechercher: ', name => {
    const foundContacts = contacts.filter(contact => contact.name === name);
    if (foundContacts.length > 0) {
      console.log('Contacts trouvés:');
      foundContacts.forEach(contact => {
        console.log(`Nom: ${contact.name}, Numéro de téléphone: ${contact.phoneNumber}`);
      });
    } else {
      console.log('Aucun contact trouvé avec ce nom.');
    }
    mainMenu();
  });
}

// Fonction pour afficher le menu principal
function mainMenu() {
  console.log('\nMenu Principal:');
  console.log('1. Ajouter un contact');
  console.log('2. Afficher tous les contacts');
  console.log('3. Rechercher un contact');
  console.log('4. Quitter');

  rl.question('Entrez votre choix: ', choice => {
    switch (choice) {
      case '1':
        addContact();
        break;
      case '2':
        displayContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        console.log('Sortie de l\'application.');
        rl.close();
        break;
      default:
        console.log('Choix invalide. Veuillez entrer un numéro de 1 à 4.');
        mainMenu();
        break;
    }
  });
}

// Démarrer l'application
console.log('Bienvenue dans l\'application de contacts!');
mainMenu();
