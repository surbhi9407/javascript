function stoplink(event){
    event.preventDefault();
}
function logClick(event){
    const log=document.getElementById("log")

    if(event.target.tagName==="A"){
        log.innerText=event.defaultPrevented ? `Sorry , but you cannot visit this link!\n${log.innerText}` : `Visiting link...\n${log.innerText}`
    }
}
const a=document.getElementById("link2");
a.addEventListener("click",stoplink);
document.addEventListener("click",logClick);