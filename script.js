//State Variable
let toDoListArray = [];

//UI variable
let input = document.getElementById("todo");
let submit = document.getElementById("submit");
let list = document.getElementById("toDoList");

function addTask() {
  if (input.value !== "") {
    let listItem = document.createElement("li");
    let task = input.value;
    listItem.innerText = task;
    listItem.style.listStyle = "none";
    list.appendChild(listItem);

    //Completed Task Function For Each List Item
    listItem.addEventListener("click", () => {
      listItem.style.textDecoration = "line-through";
    });

    //Adding Edit Button 
    let editButton = document.createElement('button');
    listItem.appendChild(editButton);
    editButton.style.marginLeft = '2vh';
    //style for hover effect using DOM
    editButton.addEventListener('mouseover' , () => {
      editButton.style.background = 'cyan';
      editButton.style.borderColor = 'cyan'; 
    })
    editButton.addEventListener('mouseout' , () =>{
      editButton.style.background = 'lightcyan';
      editButton.style.borderColor = 'lightcyan';  
    })
    editButton.style.background = 'lightcyan';
    editButton.style.borderColor = 'lightcyan';  
    editButton.innerText = 'Edit'


    //Adding Edit Functionality 
    editButton.addEventListener('click' , (itemId) => {
    let newValue = prompt('Enter Your Edited Task')
    if(newValue){
      listItem.innerText = newValue
      listItem.appendChild(editButton);
      listItem.appendChild(removeButton)
    } else{
      return
    }
    })

    // Adding remove button for each list item
    let removeButton = document.createElement("button");
    removeButton.style.margin = '2vh'
    removeButton.style.backgroundColor = 'red'
    removeButton.style.borderColor = 'red'
    listItem.appendChild(removeButton);
    removeButton.innerText = "X";

    removeButton.addEventListener("click", () => {
      listItem.remove();
    });


    input.value = "";
    console.log(toDoListArray);
  } else {
    alert("Enter Task");
  }
}

//submit function
submit.addEventListener("click", addTask);
