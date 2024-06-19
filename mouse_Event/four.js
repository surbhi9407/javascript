const log=document.querySelector("#log")
document.addEventListener("click",logkey)

function logkey(e){
    log.textContent=`the shift key is pressed:${e.shiftKey}`;
}