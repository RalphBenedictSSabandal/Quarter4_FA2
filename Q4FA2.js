function check(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    if (x<2 || x>10 || y<2 || y>10){
        alert("Please enter numbers between 2 and 10.");
    }
    else{
        table()
    }
}

function table(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    const rows = [];
    const cells = [];
    var a, b, c=1; d=1;
    var table = document.getElementById("table");
    for (a=0; a<y; a++){
        rows[a] = table.insertRow(a);
        for (b=0; b<x; b++){
            cells[b] = rows[a].insertCell(b);
            cells[b].innerHTML = (c*d);
            c++;
        }
        c=1;
        d++;
    }
}

function reset(){
    var a;
    var y = document.getElementById("number2").value;
    for (a=0; a<y; a++){
        document.getElementById("table").deleteRow(0);
    }
}