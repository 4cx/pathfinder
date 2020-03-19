//document.alert("Hello World!");

function changeClass(cell){
    console.log(12);
}

function init(length) {
   
    var table = document.getElementById('grid');
    
    for (let x = 0; x < length; x++){
        var row = table.insertRow(x);
        for (let y = 0; y < length; y++){
            var cell = row.insertCell(y);
            cell.innerHTML = String(x) + String(y);
            cell.addEventListener("click", changeClass(cell)); 
        }
    }
}

init(5);
document.getElementById('grid').addEventListener("click", changeClass("")); 