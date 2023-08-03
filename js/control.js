let input = document.getElementById('inputTask');
let buttonAdd = document.getElementById('btnAdd');
let main = document.getElementById('listArea');

function addTask(){
    let inputValue = input.inputValue;

    if ((inputValue !== "") && (inputValue!== null) && (inputValue !== undefined)){
        
        let newItem = `<div class="item">
        <div class="item-icon">
        <i class="fa-regular fa-circle"></i>
        </div>
        <div class="item-name">
        ${inputValue}
        </div>
        <div class="item-button">
            <button class="delete"><i class ="fa-solid fa-trash"></i>Deletar</button>
        </div>
    </div>`;

    main.innerHTML += newItem;   

    input.inputValue = "";
    input.focus();

    }
}