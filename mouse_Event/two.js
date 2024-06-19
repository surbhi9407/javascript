let log=document.querySelector("#log")
document.addEventListener("click",logkey);

function logkey(e){
    log.textContent=`The alt key is pressed:${e.altKey}`;
}