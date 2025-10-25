

var myInput = document.getElementById("my-input");
var myRow = document.getElementById("my-table");
var addBtn = document.getElementById("add-btn");
var updateBtn = document.getElementById("update-btn");

var globalIndex;

var allTasks = [];
// console.log(myInput.value);

if(localStorage.getItem("tasks")){
    allTasks = JSON.parse(localStorage.getItem("tasks"));
    display();
}

// arr.lenght -1  == 5

// add task to table
function addTask(){
    // console.log(myInput.value);
    allTasks.push(myInput.value);
    localStorage.setItem("tasks",JSON.stringify(allTasks));
    // console.log(allTasks);
    display();
    clearInput();
    
    // allTasks.splice(0,0,"Dasds")
    
}


function display(){
    var box="";
    for(var i=0 ; i< allTasks.length;i++){
        box += ` <tr>
                    <td>${allTasks[i]}</td>
                    <td><button class="btn btn-danger" onClick="deleteRow(${i})" > <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                    <td><button class="btn btn-warning" onClick="setUpUpdate(${i})"> <i class="fa-solid fa-pen-to-square"></i> Edit</button></td>
                </tr>`
    }
    myRow.innerHTML = box;
}


function clearInput(){
    myInput.value = "";
}


function deleteRow(index){
    // console.log("hello");
    // console.log(index);
    
    allTasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(allTasks));
    // console.log(allTasks);
    display();
    
    
}

function setUpUpdate(index){
    // console.log("test");

    // console.log(allTasks[index]);
    globalIndex = index;
    myInput.value = allTasks[index];
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
    
}

function updateData(){
    console.log("test");
    allTasks.splice(globalIndex,1,myInput.value);
    localStorage.setItem("tasks",JSON.stringify(allTasks));
    display();
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
    clearInput();   
}

// create reed update delete