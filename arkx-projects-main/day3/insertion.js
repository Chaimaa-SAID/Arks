     function Insertion_Sort(tab){
       
            const nbr = tab.length;
            
            for (let i = 1; i < nbr; i++) {
                const current = tab[i];
                let j = i - 1;
                
                while (j >= 0 && tab[j] > current) {
                    tab[j + 1] = tab[j];
                    j--;
                }
                
                tab[j + 1] = current;
            }
            return tab;
            
        

     }
     table=[23,43,45,65,56,443,54544,66];
     result=Insertion_Sort(table);
     console.log(result);