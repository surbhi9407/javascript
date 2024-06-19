const log=document.querySelector("#log")
window.addEventListener("mousemove",logkey)

function logkey(e){
    log.textContent=`the ctrl key was pressed while the cursor was moving:${e.ctrlKey}`
}