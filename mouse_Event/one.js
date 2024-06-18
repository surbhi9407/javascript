let screenlog=document.querySelector("#screen-log")
document.addEventListener("mousemove",logkey)

function logkey(e){
    screenlog.innerText=
    `Screen X/Y :${e.screenX},${e.screenY}
    client X/Y:${e.clientX},${e.clientY}`;
}