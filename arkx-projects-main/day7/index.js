async function fetchUserData() {
    try {
      const data = await fetch("https://dummyjson.com/users/");
      const result = await data.json();
      return result.users;
    } catch (error) {
      console.log('FATAL ERROR: ', error.message);
    }
  }
  
  async function processUserData(i) {
    try {
      const content = await fetchUserData();
      const filteredUsers = await content.filter((user) => {
        return user.gender !== 'male';
      });
     
      const arrayMp = filteredUsers.map((user)=>{
        return `name: ${user.firstName} ${user.lastName}, age: ${user.age}`;

      })
  
      const {id,...rest}= filteredUsers[i];
  
      
      
      
  console.log("Processed Users : ")
     
      console.log("Array Map",arrayMp)
      console.log("female Proprieties: ",rest);
      console.log("female Users: ",filteredUsers);
      
    } catch (error) {
      console.log('FATAL ERROR: ', error.message);
    }
  }
  
  async function summarizeAge(){
    try{
      const content = await fetchUserData();
      const maleFiler = await content.filter((user)=>{
        return user.gender !== 'female' ;
      })
      
      
      const ageAccumilation = await maleFiler.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.age
      },0)
      console.log("Total Age of Active Users: ",ageAccumilation)
  
    }catch(error){
      console.log(error.message)
    }
  }
  
  
  async function dispaly(){
    await processUserData(1);
    summarizeAge()
  }
  dispaly()