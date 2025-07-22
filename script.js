const userEnteredValue = document.querySelector("#textId");
const addBtn= document.querySelector("#btnAdd");
const dltBtn=document.querySelector("#btnDlt");
const todolist=document.querySelector(".todoList");

 addBtn.onclick=()=>{
    if(userEnteredValue!=="")
    {
        
     const li = document.createElement("li"); 
    li.textContent = userEnteredValue.value;
    todolist.appendChild(li);
   document.querySelector("#textId").value="";
    }
 }

 dltBtn.onclick=()=>{
    todolist.innerHTML="";
 }