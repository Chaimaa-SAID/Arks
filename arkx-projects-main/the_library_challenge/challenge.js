const books = require("./books.json");

function priceOfBook(bookName) {
  // write your code here
  //boucle pour parcourir table books
  for (let i = 0; i < books.length; i++) {
    // tester l'existance de 
    if (books[i].title === bookName) {
        return books[i].price;
    }
}
return "Livre non trouvé";
}



function affordableBooks(budget) {
  // write your code here
  const affordableBooksList = [];
  for (let i = 0; i < books.length; i++) {
      if (books[i].price <= budget) {
          affordableBooksList.push(books[i]);
      }
  }
  return affordableBooksList;
}

function findBookByGenre(genre) {
  // write your code here
  const genreBooks = [];
  //la boucle pour parcourir la table books
    for (let i = 0; i < books.length; i++) {
        //  boucle Verifier  chaque genre du livre
        const bookGenres = books[i].genres;
        for (let j = 0; j < bookGenres.length; j++) {
          //tester l'existance de le genre 
            if (bookGenres[j] === genre) {
              //ajouter a nouvelle tablau 
                genreBooks.push({ title: books[i].title, price: books[i].price });
                break; // Arrêter la boucle interne dès qu'un genre correspond
            }
        }
    }
    return genreBooks;
}

function groupByGenre() {
  // write your code here


    const groupedBooks = {};
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].genres.length; j++) {
        const genre = books[i].genres[j];
        if (!groupedBooks[genre]) {
          groupedBooks[genre] = [{ title: books[i].title, price: books[i].price }];
        } else {
          groupedBooks[genre].push({ title: books[i].title, price: books[i].price });
        }
      }
    }
    return groupedBooks;
  }
 
  
  



function sortBooksByPrice() {
  // write your code here
  const n = books.length;

  // Utiliser l'algorithme de tri à bulles
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Comparer les prix et échanger si nécessaire
      if (books[j].price > books[j + 1].price) {
        const temp = books[j];
        books[j] = books[j + 1];
        books[j + 1] = temp;
      }
    }
  }

  return books;
}


(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();


// afficher le prix par nom 
console.log("la liste des prix par nom : ");
prixliste=priceOfBook("To Kill a Mockingbird");
console.log(prixliste);

//afficher la liste des livres par mon budjet
console.log("la liste des livres par mon budjet : ");
boksliste=affordableBooks(15);
console.log(boksliste);
// afficher la liste des livres par genre
console.log("la liste des livres par mon budjet : ");
const bookslistgenre = findBookByGenre("Adventure");
console.log(bookslistgenre);
// grouper les livres par genre
console.log("grouper des livres par le genre : ");
groupbooks=groupByGenre();
console.log(groupbooks) ;
//trier les livres par prix
console.log("grouper des livres par le genre : ");
bookstrier=sortBooksByPrice();
console.log(bookstrier);




 



