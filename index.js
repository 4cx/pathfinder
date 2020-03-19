//document.write("Hello World!");

var table = document.getElementById("grid");
function init(length) {
    for (x = 0; x < length; x++){
        var row = table.insertRow(x);
        for (x = 0; x < length; x++){
            var cell = row.insertCell(y);
            cell.innerHTML = String(x) + String(y);
        }
    }    
}
init(5);
