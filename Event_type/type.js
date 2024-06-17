function getEventType(event){
    const log=document.getElementById("log")
    log.innerText=`${event.type}\n ${log.innerText}`
}

    //Keyboard events
    document.addEventListener("keydown",getEventType,false);
    document.addEventListener("keypress",getEventType,false);
    document.addEventListener("keyup",getEventType,false);

    //Mouse events
    document.addEventListener("mousedown",getEventType,false);
    document.addEventListener("mouseup",getEventType,false);
    document.addEventListener("click",getEventType,false);

