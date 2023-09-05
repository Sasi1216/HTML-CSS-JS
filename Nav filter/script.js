const cont=document.getElementById("nav-bar");

cont.addEventListener("click",toclisk);

function toclisk(event){

    const removeactive=document.querySelectorAll(".active");
    removeactive.forEach((value)=>{
        value.classList.remove("active");
    })
    const pages=document.querySelectorAll(".page")

    pages.forEach((valueq)=>{
        valueq.classList.remove("page-active")
    })


    event.target.parentElement.className+='active';
    const id=event.target.href.split("#")[1];
    const page=document.getElementById(id);
    page.classList.add("page-active");

    const btn=document.querySelector("button")
        btn.addEventListener("click",(e)=>{
        e.preventDefault()
})
}
