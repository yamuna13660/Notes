
let btn=document.querySelector(".btn");
let container=document.querySelector(".notes");
let notes=document.querySelectorAll(".input-box");

function show()
{
    container.innerHTML=localStorage.getItem("notess");
}
show();
function updatestorage()
{
localStorage.setItem("notess",container.innerHTML);
}
btn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="delete.png";
    container.appendChild(inputbox).appendChild(img);
})
container.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG")
{
   e.target.parentElement.remove();
   updatestorage();
}else if(e.target.tagName==="p")
{
    n=document.querySelectorAll(".input-box");
   n.forEach(nt => {
    nt.onkeyup=function(){
        updatestorage();
    }
   });
}
})