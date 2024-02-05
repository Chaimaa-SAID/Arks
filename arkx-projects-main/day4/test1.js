// task 1
let personne = {
    firstname: "John",
    lastname: "Doe",
    age: 30,

    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    },

    set fullname(newname) {
      this.firstname = newname;
      this.lastname = newname;
    },
  
  
    afficherDetails: function () {
      console.log(`Prénom: ${this.firstname}, Nom: ${this.lastname}, Âge: ${this.age}`);
    }
  };
  
  // Utilisation de l'objet
  personne.afficherDetails();

  console.log(`Nom complet: ${personne.fullname}`);

  // task 2

  
  
  personne.fullname = "Alice Smith";

  personne.afficherDetails();
  

