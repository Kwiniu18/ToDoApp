


// DATE 
    const date = new Date()
    const day = date.getDate()
    const month = parseInt(date.getMonth() + 1)
    const NewMonth = ''
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
   ]
   for(var i = 0; i<= 11; i++){
    if(month == i){
      month = months[i]
    }
   }



//CREATE TASK BY CLICKING ADD BUTTON
function creatingTasks(){
    
    var title = document.getElementById("text-input").value
    var task_title = document.createTextNode(title)
    task_title.id = "task_title"
    
    if(title == ''){
        alert("NAME TASK!")
    }
    else{
        var task = document.createElement('div') //making 'task' html div element
        task.className = "task"
        task.id = "task"
  
        task.innerHTML = document.getElementById("task").innerHTML
       
        task.style.margin = "10px"
  
        //CREATING TASKS
        
        document.getElementById('task-list').appendChild(task) 
        
       
        task.appendChild(task_title)
        
    }
    document.getElementById("text-input").value = '' //CLEARING INPUT VALUE
}


//DELETE TASK BY CLICKING BIN BUTTON
function deletingTask(){
    var currentTask = document.querySelectorAll("#bin")
    for(var i = 0; i<currentTask.length; i++){ 
      currentTask[i].onclick = function(){ 
        this.parentNode.remove()
      }
    }
  }


//ADD YELLOW BORDER BY CLICKING STAR BUTTON
function makeItFavouritte(){ 
    var currentTask = document.querySelectorAll("#star")
    for(var i = 1; i<currentTask.length; i++){
      currentTask[i].onclick = function(){ 
        this.parentElement.style.border = "1px solid yellow" 
      }
    } 
}
