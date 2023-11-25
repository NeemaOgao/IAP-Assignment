document.addEventListener("DOMContentLoaded", ()=>{
    //Query for the submit button and input task field
    var submit= document.querySelector("#submit");
    var newTask= document.querySelector('input[type="text"]');

    //Disable the submit button by default 
    submit.disabled=true; 
    newTask.addEventListener('input', function(){
        //Enable or disable the submit button based on whether the input field is empty or not
        submit.disabled= newTask.value.length==0;
     });
     
    //Listen for the submission of the form 
    document.querySelector('form').addEventListener('submit', function(e){ 
        e.preventDefault();
        console.log(e)
        //Get the task that has been entered 
        var taskText = newTask.value.trim();
        //Create a new list item for the new task 
        var newTaskItem= document.createElement('li');
        newTaskItem.textContent = taskText;
        //Add the element to the list
        document.querySelector('ul').appendChild(newTaskItem); 
        newTask.value='';
        //Prevent the default submission of the form
        return false;
    }); 
});