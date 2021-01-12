let count = document.getElementById("count");
let i = 0;
function plus(){
    i = i + 1;
    count.innerText = `${i}`
}
function minus(){
    i = i - 1;
    if(i<0){
        i = 0;
    }
    count.innerText = `${i}`
}