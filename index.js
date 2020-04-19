var tLength = 5;
var startExisting = false;
var endExisting = false;

function changeClass(cell){
    //console.log(cell.lastChild.data);
    //alert(cell.className);
    var type = document.getElementById('boxType').value;
    if (cell.className.includes(type)){
        cell.className = "";
        if(type == "start")
            startExisting = false;
        if(type == "end")
            endExisting = false;
    }
    else if(!((type == "start" && startExisting)||(type == "end" && endExisting))){
        cell.className = type;
        if(type == "start")
            startExisting = true;
        if(type == "end")
            endExisting = true;
    } 
}

function init() {
    var table = document.getElementById('grid');
    while(table.hasChildNodes())                    // to remove old table if size is changed (or reset?)
    {
        table.removeChild(table.firstChild);
    }
    
    for (let x = 0; x < tLength; x++){
        var row = table.insertRow(x);
        for (let y = 0; y < tLength; y++){
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
    document.getElementById('message').innerHTML = "";
    endExisting = false;
    startExisting = false;
    
    var num = document.getElementById('gridLength').value;
    //alert(num);
    tLength = Number(num);
    init();
}
//init(5);

function createArray(rows){         // JavaScript only supports one-dimenional arrays
    var arr = [];
    for (let i = 0; i < rows; i++){
        arr[i] = [];
    }
    return arr
}

function startSearch(){
    if(!(startExisting && endExisting))
        return;
    var start;
    var end;
    var table = document.getElementById('grid');
    var grid = createArray(tLength);
    for (let x = 0; x < tLength; x++){
        for (let y = 0; y < tLength; y++){
            var cell = table.rows[x].cells[y];
            var className = cell.className;
            grid[x][y] = className;
            if(className == "start")
                start = cell;
            else if(className == "end")
                end = cell;
        }
    }

    if (Number(end.innerHTML.charAt(0))>Number(start.innerHTML.charAt(0))){
        table.rows[Number(start.innerHTML.charAt(0))+1].cells[Number(start.innerHTML.charAt(1))].className = "way";
    }

    var messageBox = document.getElementById('message');
    messageBox.innerHTML = "Path found!";
}



