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

// creating a function to create tasks as div and append to appBody. ❗❗❗❗this function also MUST include any other function or variable that is generated within the function scope, for example clearing the inputBox.value or the random color selector

const creatTask = () =>{
// creating an array of colors and a random number generator for the div.task background. the array can be easily extended without having to change any other part of the code. ❗❗❗❗ first I created the following two variables in the global scope. It lead to a problem that a random color would have selected once and then used for every other newTask generated within the creatTask function. I had to move the to the function scope for it to work as it was intended to ❗❗❗❗. ⚠⚠⚠⚠ MUST use let to assign randomIndex because we want to be abale to reassign its value below(look here:👀) when we press the pallette button. Remember pressing the palette button happens in the same👈❗ iteration as the newTask div is created so if we use const to assign a value, the value cannot be change within the same iteration. the reason it changes for a new newTask div is that by click the add input button we fire another👈❗ iteration of the creatTask function.

const colors = ["#3399FF","#F4F1DE", "#e07a5f", "#3D405B", "#81B29A", "#F2CC8F" ]
let randomIndex = Math.floor(Math.random() * colors.length)

//creating the elements that constitute a task and giving them classes and Ids that will be targeted via css(predefined)

const inputValue = inputBox.value
/* console.log(inputValue, "line 23") */ // console log each step to see where the problem is 👈👈👈

const newTask = document.createElement('div');
newTask.classList.add('task')
newTask.style.backgroundColor = colors[randomIndex]// using the colors array and randomIndex created above to give each div.task a random background color. 
/* console.log(newTask, "line 27") // *//* 👈👈👈 */

const changeBgBtn = document.createElement("i")
changeBgBtn.classList.add("bi", "bi-palette")
changeBgBtn.id = "changeBg"

const taskTitle = document.createElement("div")
taskTitle.classList.add("taskTitle")

const checkBox = document.createElement("i")
checkBox.classList.add("bi", "bi-square")

const taskName = document.createElement("h5")
taskName.innerText = inputValue


const icons = document.createElement("div")
icons.classList.add("icons")

const alarm = document.createElement("i")
alarm.classList.add("bi", "bi-alarm")

const trash = document.createElement("i")
trash.classList.add("bi", "bi-trash")



//⚠⚠❗❗trash.addEventListener("click", ()=> newTask.remove()) be carful with the order of the functions, eventlisteners, assignments. for example you cannot put this eventlistener here because the call back function would remove the newTask div that we need to append to the body below👇👇👇

//Appending the created elements together to follow the same structure as the designed layout(that we created using html and css)

newTask.append(changeBgBtn)
newTask.append(taskTitle)
taskTitle.append(checkBox, taskName)
newTask.append(icons)
icons.append(alarm, trash)
appBody.append(newTask)

// emtpty the inputValue here after we have generated the newTask div and all its children
inputBox.value = ""

// we put the eventListener with the callback function to remove the newTask here at the end.
trash.addEventListener("click", ()=> newTask.remove())
alarm.addEventListener("click", () => alert("⏰When Should We Remind You?⏰")
)

//the event listener to change the newTask div background
changeBgBtn.addEventListener("click",()=>{  
randomIndex = Math.floor(Math.random() * colors.length)//👀👀  
newTask.style.backgroundColor = colors[randomIndex] })

// the event listener to change the empty square icon to checksquare icon 
checkBox.addEventListener ("click", () => {
  if (checkBox.classList.contains("bi-square") && taskName.style.textDecoration === "none")
  {
  checkBox.classList.replace ("bi-square", "bi-check-square")
  taskName.style.textDecoration = "line-through"
  }
  else {
    checkBox.classList.replace ("bi-check-square", "bi-square")
    taskName.style.textDecoration = "none"
  }
})






}

//adding eventListeners for inputBox

addTaskBtn.onclick = showInput
addInputBtn.addEventListener('click', () => {
  hideInput();
  creatTask();
});

/* creatTask() */ // test your functions to see if they are properly working. for example in this case the function should creat an empty div with all the stylings and related stuffs. if one part does not work console log every single step of the function body to find out where the problem is ☝☝☝ thank fully it appears that the creatTast function works because when we run it the who structure appears on the screen. now lets connect it to the button and add inner html to h5







