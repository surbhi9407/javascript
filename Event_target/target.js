const ul=document.createElement("ul")
document.body.appendChild(ul);

const li1=document.createElement("li")
const li2=document.createElement("li")

ul.appendChild(li1);
ul.appendChild(li2)

function hide(evt){
    // evt.target refer to the clicked <li> element

    // This is different than evt.current target ,which would refer to the parent <ul> in this context.
    evt.target.style.visibility="hidden";
}
 
//Attach the listener to the list 
// it will fire when each<li> is clicked

ul.addEventListener("click",hide,false);