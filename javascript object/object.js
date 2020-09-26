var person = {
  id: 0,
  firstName: '',
  lastname: '',
  address: '',
  phone: '',
  email: ''
};

var btn1 = document.getElementById("btnInsert");
btn1.addEventListener('click', insertPerson);

var btn2 = document.getElementById("btnUpdate");
btn2.addEventListener('click', updatePerson);

var btn3 = document.getElementById("btnDelete");
btn3.addEventListener('click', deletePerson);


function onPageLoad() {
  console.log('calling page load');
  getAllPerson();
}

function insertPerson() {

  person.firstName = document.getElementById('txtFname').value;
  person.lastName = document.getElementById('txtLname').value;
  person.address = document.getElementById('txtAddress').value;
  person.phone = document.getElementById('txtPhone').value;
  person.email = document.getElementById('txtEmail').value;

  sendRequest('POST', 'http://localhost:3000/person/insert', person);

}




function updatePerson() {
  person.firstName = document.getElementById('txtFname').value;
  person.lastname = document.getElementById('txtLname').value;
  person.address = document.getElementById('txtAddress').value;
  person.phone = document.getElementById('txtPhone').value;
  person.email = document.getElementById('txtEmail').value;
  person.id = document.getElementById('personId').value;

  sendRequest('POST', 'http://localhost:3000/person/update', person);
}

function deletePerson() {
  var id = document.getElementById('personId').value;
  sendRequest('DELETE', 'http://localhost:3000/person/delete/' + id)

}

function getAllPerson() {
  sendRequest('GET', 'http://localhost:3000/person/getall', {});
}

function sendRequest(method, api, data) {

  var request = new XMLHttpRequest();
  request.open(method, api, true);
  request.setRequestHeader('Content-Type', 'application/json');
  // onload  means when response is back from api
  request.onload = function () {
    var apiResponse = request;
    console.log(apiResponse);
    if (method === 'GET') {
      showTable(apiResponse.responseText);
    } else {
      document.getElementById("demo").innerHTML = apiResponse.responseText;
    }
  };
  request.send(JSON.stringify(data));

}

function showTable(data) {
  console.log('yeah data table main show karo.');
  console.log(data);
}

