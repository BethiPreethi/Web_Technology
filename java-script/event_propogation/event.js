let parent=document.querySelector("#parent")
console.log(parent);
parent.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
    console.log("parent clicked");
    
}, false)

let child=document.querySelector("#child")
console.log(child);
child.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
    console.log("child clicked");
    
}, false)

let ol=document.querySelector("ol")
console.log(ol);
ol.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        console.log("Hello World");
    }   
} )

let btn=document.getElementById("btn")
console.log(btn);
btn.addEventListener("click" (e))

