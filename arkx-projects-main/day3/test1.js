function sockMerchant(sockCount) {
  // creer un tableau vide  qui stocker les socks meme types
  let socks = [];
  //parcourir table seckscountr et mettre a jour socks
  for (let i = 0; i < sockCount.length; i++) {
    if (socks[sockCount[i]]) {
      socks[sockCount[i]]++;
    } else {
      socks[sockCount[i]] = 1;
    }
    
  }
  let pairs = 0;
  // boucle pour parcourir cle de chaque table socks

  for (let key in socks) {
    pairs += Math.floor(socks[key] / 2);
  }
  return pairs;
}
resultat=sockMerchant([2,1,3,5]);
console.log(resultat);