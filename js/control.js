let inputTask = document.getElementById('inputTask');
let buttonAdd = document.getElementById('buttonAdd');
let main = document.getElementById('listArea');
let counter = 0;


function addTask(){
    let inputValue = inputTask.value;

    if ((inputValue !== "") && (inputValue!== null) && (inputValue !== undefined)){
        
        ++counter;

        let newItem = `<div id="${counter}" class="item">
        <div onclick= "selectTask(${counter})" class="item-icon">
        <i id="icon_${counter}" class="fa-regular fa-circle"></i>
        </div>
        <div onclick= "selectTask(${counter})" class="item-name"> 
        ${inputValue}
        </div>
        <div class="item-button">
            <button onclick="deleteTask(${counter})" class="delete"><i class ="fa-solid fa-trash"></i>Deletar</button>
        </div>
    </div>`;

    main.innerHTML += newItem;  

    inputTask.value = "";
    inputTask.focus();

    }
}

function deleteTask(id){

    var task = document.getElementById(id);
    task.remove();
}

function selectTask(id){
    var item = document.getElementById(id);
    var hasClickedClass = item.classList.contains('clicked');

    if (!hasClickedClass) {
        item.classList.add('clicked');
        var icon = document.getElementById('icon_'+ id);
        icon.classList.remove('fa-regular', 'fa-circle'); 
        icon.classList.add('fa-solid', 'fa-circle-check');
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicked');
        var icon = document.getElementById('icon_'+ id);
        icon.classList.remove('fa-solid', 'fa-circle-check'); 
        icon.classList.add('fa-regular', 'fa-circle');
    }
}


inputTask.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        buttonAdd.click();
    }
})

