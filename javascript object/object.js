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
  person.lastName = document.getElementById('txtLname').value;
  person.address = document.getElementById('txtAddress').value;
  person.phone = document.getElementById('txtPhone').value;
  person.email = document.getElementById('txtEmail').value;
  person.id = document.getElementById('personId').value;

  sendRequest('POST', 'http://localhost:3000/person/update', person);

  getAllPerson();
}

function deletePerson(id) {
  sendRequest('DELETE', 'http://localhost:3000/person/delete/' + id)
  getAllPerson();

}

function getAllPerson() {
  sendRequest('GET', 'http://localhost:3000/person/getall', {});
}

function sendRequest(method, api, data) {
  console.log('calling ', method, ' for ', api);
  var request = new XMLHttpRequest();
  request.open(method, api, true);
  request.setRequestHeader('Content-Type', 'application/json');
  // onload  means when response is back from api
  request.onload = function () {
    var apiResponse = request;
    if (method === 'GET') {
      showTable(apiResponse.responseText);
    } else {
      document.getElementById("demo").innerHTML = apiResponse.responseText;
    }
  };
  request.send(JSON.stringify(data));

}

function showTable(data) {
  var tbody = document.getElementById('datagrid');
  tbody.innerHTML = '';
  var arrData = JSON.parse(data);
  arrData.forEach(function (item) {
    var str = "<tr><td>" + item.id
      + "</td><td>" + item.firstName
      + "</td><td>" + item.lastName
      + "</td><td>" + item.address
      + "</td><td>" + item.phone
      + "</td><td>" + item.email
      + "</td><td><button onclick='onEditClick(" + JSON.stringify(item)
      + ")'>Edit</button></td><td><button onclick='onDeleteClick(" + item.id 
      + ")'>Delete</button></td></tr>";

    tbody.innerHTML = tbody.innerHTML + str;

  });
}

function onEditClick(personData) {
  const p = personData;
  document.getElementById('txtFname').value = p.firstName;
  document.getElementById('txtLname').value = p.lastName;
  document.getElementById('txtAddress').value = p.address;
  document.getElementById('txtPhone').value = p.phone;
  document.getElementById('txtEmail').value = p.email;
  document.getElementById('personId').value = p.id;
}

function onDeleteClick(id) {
  if (confirm("Are you sure you want to delete this record??")) {
    deletePerson(id);
  }
}

