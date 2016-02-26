// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var objArray =[];

function Employee (name, empId, salary, reviewScore){
this.name = name;
this.empId = empId;
this.salary = salary;
this.reviewScore = reviewScore;    
}

function buildObjects(array){
  
  for(var i = 0; i < array.length; i++){
      var name = array[i][0];
      var empId = array[i][1];
      var salary = array[i][2];
      var reviewScore = array[i][3];
      
      employee = new Employee(name,empId,salary,reviewScore);
      objArray.push(employee);
  }  
};
buildObjects(array);
console.log('showing object array', objArray);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < objArray.length; i++){
	 calculateSTI(objArray[i]);
 	newEl = document.createElement('li');
	newText1 = document.createTextNode(objArray[i].name);
	newText2 = document.createTextNode(objArray[i].percentOfBonus);
    newText3 = document.createTextNode(objArray[i].totalSalary);
    newText4 = document.createTextNode(objArray[i].totalBonus);
    newText5 = document.createTextNode(' ');
    newText6 = document.createTextNode(' ');
    newText7 = document.createTextNode(' ');
    newEl.appendChild(newText1);
    newEl.appendChild(newText5);
    newEl.appendChild(newText2);
    newEl.appendChild(newText6);
    newEl.appendChild(newText3);
    newEl.appendChild(newText7);
    newEl.appendChild(newText4);
	position.appendChild(newEl);
}

function calculateSTI(person){
console.log(person);
//   var newArray = [];

//   newArray[0] = array[0];
//   
//   var employeeNumber = array[1];
//   var baseSalary = array[2];
//   var reviewScore = array[3];

  var bonus = getBaseSTI(person.reviewScore) + getYearAdjustment(person.empId) - getIncomeAdjustment(person.salary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  person.percentOfBonus = bonus;
  person.totalSalary = Math.round(person.salary * (1.0 + bonus));
  person.totalBonus = Math.round(person.salary * bonus);
//   console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
 console.log('object to be returned',person)
 return person;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent ;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}