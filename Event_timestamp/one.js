function gettime(event){
    const time=document.getElementById("time")
    time.firstChild.nodeValue=event.timeStamp;
}
document.body.addEventListener("keypress",gettime);