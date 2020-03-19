//document.write("Hello World!");
<<<<<<< HEAD

function changeClass(cell){
    //console.log(cell.lastChild.data);
    cell.classList.toggle('wall');
}
=======
>>>>>>> 3894086475af96c4f6652004e4f628c9821b1e74

var table = document.getElementById("grid");
function init(length) {
<<<<<<< HEAD
    var table = document.getElementById('grid');
    
    while(table.hasChildNodes())                    // to remove old table if size is changed
    {
        table.removeChild(table.firstChild);
    }
    
    for (let x = 0; x < length; x++){
=======
    for (x = 0; x < length; x++){
>>>>>>> 3894086475af96c4f6652004e4f628c9821b1e74
        var row = table.insertRow(x);
        for (let y = 0; y < length; y++){
            var cell = row.insertCell(y);
            cell.innerHTML = String(x) + String(y);
            //cell.addEventListener("click", changeClass(cell)); 
        }
<<<<<<< HEAD
    }
    table.addEventListener("click", function(e) {
  if (e.target && e.target.nodeName == "TD") {
    //alert('Cell clicked');
    changeClass(e.target);
  }
});
}

function submitNum(){
    var num = document.getElementById('gridLength').value;
    //alert(num);
    init(Number(num));
}
//init(5);
=======
    }    
}
init(5);
>>>>>>> 3894086475af96c4f6652004e4f628c9821b1e74
