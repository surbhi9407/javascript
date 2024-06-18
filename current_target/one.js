const output=document.querySelector("#output")
const parent=document.querySelector("#parent")

parent.addEventListener("click",(event)=>{


    const currentTarget=event.currentTarget.getAttribute("id")
    const target=event.target.getAttribute("id")

    output.textContent=`current Target:${currentTarget}\n`
    output.textContent +=`target:${target}`;
})
const reset=document.querySelector("#reset")
reset.addEventListener("click",()=>document.location.reload())