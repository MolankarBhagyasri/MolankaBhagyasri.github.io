function view(num){
    document.getElementById("result").value +=num;
}
function clr(){
    document.getElementById("result").value ="";
}
function cal(){
var output=eval(document.getElementById("result").value);
    //let y= eval(x)
    document.getElementById("result").value=output;
}
    