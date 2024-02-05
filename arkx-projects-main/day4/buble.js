
    function decroissant(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] < arr[j + 1]) { 
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    
    function croissant(arr) {
     

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        
            return arr;
        }
        
    function sortbuble(arr,condtion){

        if(condtion="az"){
            return croissant(arr);
        }
        else if(condition="za"){
            return  decroissant(arr);

        }



    }
    array=[4,2,9,7,4,6,3];
    result=sortbuble(array,"za");
    console.log(result);
