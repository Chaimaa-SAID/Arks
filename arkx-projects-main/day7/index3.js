 async  function recupererDonnes(){
    
        try {
            const data= await fetch("https://dummyjson.com/users");
        const res = await data.json();
        return res.users;
        console.log(res.users);
        } catch (error) {
        console.error(error);
        }
    

}

async function DonnéesProcessus() {
  try {
    const datafetch = await recupererDonnes();
    const datafeltrer = datafetch.filter((user) => {
      return user.gender === 'male';
    });
    const arrayMp = datafeltrer.map((user) => {
      return `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;
    });

    console.log('Processed Users:');
    arrayMp.forEach(user => {
      console.log(`- ${user}`);
    });

    return datafeltrer;
  } catch (error) {
    console.error(error);
  }
}

async function lasommeage(){
    const datafetch= await recupererDonnes();
    const datafeltrer= await DonnéesProcessus();
    const ageAccumilation = await datafeltrer.reduce((acc, user)=>{
        return acc + user.age
      },0)
      console.log(ageAccumilation);

}
async function dispaly(){
  await DonnéesProcessus();
  lasommeage()
}
dispaly()

 