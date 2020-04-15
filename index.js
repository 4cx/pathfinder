//document.write("Hello World!");

function changeClass(cell){
    //console.log(cell.lastChild.data);
    cell.classList.toggle('wall');
}

function init(length) {
    var table = document.getElementById('grid');
    
    while(table.hasChildNodes())                    // to remove old table if size is changed (or reset?)
    {
        table.removeChild(table.firstChild);
    }
    
    for (let x = 0; x < length; x++){
        var row = table.insertRow(x);
        for (let y = 0; y < length; y++){
            var cell = row.insertCell(y);
            cell.innerHTML = String(x) + String(y);
            //cell.addEventListener("click", changeClass(cell)); 
        }
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

function startSearch(){
    
}
