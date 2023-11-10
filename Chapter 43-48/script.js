// Chapter 43-48
function deleteInfo(){
    
    
    var text = document.getElementById("Info");
    const data1 = text.innerHTML;
    text.innerHTML = "";
}

// function increase(){
// var text = document.getElementById("counter");
// var data1 = text.innerHTML;
// text.innerHTML = data1 +++ 1; }
// function decrease(){
//     var text = document.getElementById("counter");
//     var data1 = text.innerHTML;
//     text.innerHTML = data1 --- 1; }
 

// function decrease(){
//     var text = document.getElementById("Info");
//     
var counter = 0;

function changecounter(change){
    counter += change;
    document.getElementById("counter").innerHTML=counter;
}