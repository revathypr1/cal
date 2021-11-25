let x = document.getElementById("a")
let y = document.getElementById("b")

function add(){
    add_total = parseInt(x.value) + parseInt(y.value)
    console.log(add_total);
    document.getElementById("result").value=add_total
    // document.getElementById("result").innerHTML=add_total
}

function sub(){
    add_total = parseInt(x.value) - parseInt(y.value)
    console.log(add_total);
    document.getElementById("result").value=add_total;

}
function mul(){
    add_total = parseInt(x.value) * parseInt(y.value)
    console.log(add_total);
    document.getElementById("result").value=add_total;
}
function div(){
    add_total = parseInt(x.value) / parseInt(y.value)
    console.log(add_total);
    document.getElementById("result").value=add_total;

}

function per(){
    add_total = parseInt(x.value) % parseInt(y.value)
    console.log(add_total);
    document.getElementById("result").value=add_total;

}
