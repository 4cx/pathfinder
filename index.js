document.write("Hello World!");

function init(length) {
    var table = document.getElementById("grid");
    for (x = 0; x < length; x++){
        var row = table.insertRow(x);
        for (x = 0; x < length; x++){
            var cell = row.insertCell(y);
            cell.innerHTML = String(x) + String(y);
        }
    }    
}