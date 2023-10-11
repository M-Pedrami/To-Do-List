// Defining the DOM Elements
const addTaskBtn = document.querySelector(".header button")
const taskInputBox = document.querySelector(".taskInput")
const addInputBtn = document.querySelector(".inputBtn")
const appBody = document.querySelector(".app")
const inputBox = document.querySelector(".form-control")


//creating a function to make the inputbox visible and invisible

const showInput = () =>{
  taskInputBox.style.display = "block"
}

const hideInput = () => {
  taskInputBox.style.display = "none"
}

// creating a function to create tasks as div and append to appBody
const creatTask = () =>{
//creating the elements that constitute a task and giving them classes and Ids that will be targeted via css(predefined)
const inputValue = inputBox.value
console.log(inputValue, "line 23") // console log each step to see where the problem is 👈👈👈

const newTask = document.createElement('div');
newTask.classList.add('task')
console.log(newTask, "line 27") //👈👈👈

const changeBgBtn = document.createElement("i")
changeBgBtn.classList.add("bi", "bi-palette")
changeBgBtn.id = "changeBg"

const taskTitle = document.createElement("div")
taskTitle.classList.add("taskTitle")

const checkBox = document.createElement("i")
checkBox.classList.add("bi", "bi-check-square")

const taskName = document.createElement("h5")
taskName.innerText = inputValue

const icons = document.createElement("div")
icons.classList.add("icons")

const alarm = document.createElement("i")
alarm.classList.add("bi", "bi-alarm")

const trash = document.createElement("i")
trash.classList.add("bi", "bi-trash")

//Appending the created elements together to follow the same structure as the designed layout(that we created using html and css)

newTask.append(changeBgBtn)
newTask.append(taskTitle)
taskTitle.append(checkBox, taskName)
newTask.append(icons)
icons.append(alarm, trash)
appBody.append(newTask)

/* } */

}

//adding eventListeners

addTaskBtn.onclick = showInput
addInputBtn.addEventListener('click', () => {
  hideInput();
  creatTask();
});

creatTask() // test your functions to see if they are properly working. for example in this case the function should creat an empty div with all the stylings and related stuffs. if one part does not work console log every single step of the function body to find out where the problem is ☝☝☝ thank fully it appears that the creatTast function works because when we run it the who structure appears on the screen. now lets connect it to the button and add inner html to h5







