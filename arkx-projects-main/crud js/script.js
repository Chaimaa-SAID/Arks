let data = [];
function addData(){
    
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    if (name && age && address && email) {
        let newData = {
          id: data.length + 1,
          name: name,
          age: age,
          address: address,
          email: email

        };

        data.push(newData);
       console.log(newData);
       showData()
       document.getElementById('dataInput').value = '';
     
      }

}
function showData(){
    people=document.getElementById('dataBody').value;
    html="";
    data.forEach((element,index) =>{
       
        html +="<tr>";
        html +=" <td>"+element.name+"</td>";
        html +=" <td>"+element.age+"</td>";
        html +=" <td>"+element.address+"</td>";
        html +=" <td>"+element.email+"</td>";
        html +=
        '<td><button onclick="deleteData('
          index +
        ')" class="btn btn-danger">Delete</button> <button onclick="updateData(' +
        index +
        ')" class="btn btn-warning m-2">Edit</button> </td>'; html += "</tr>";
        });
        
        document.getElementById("dataBody").innerHTML =html;


}
 
