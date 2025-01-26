function demo(){
    console.log("Hello World");
    
}

let demo1=document.getElementById("demo1")
console.log(demo1);
demo1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log("Hello Universe");                    
}

let demo2=document.getElementById("demo2")
console.log(demo2);
demo2.onkeyup=()=>{
    let res=Math.floor(Math.random()*1000).toString(16)
    
    document.body.setAttribute("backgroundColor", "`#$(res)`")
    // document.body.style.backgroundColor=`#$(res)`
    console.log(res);
}

let demo3=document.getElementById("demo3")
console.log(demo3);
demo3.onclick=()=>
     {
    let res=document.getElementsByTagName("img")
    console.log(res[0]);
    let display=res[0].classList.toggle("demo5")
    if(display){
        res[0].style.visibility="visible"
    }else{
        res[0].style.visibility="hidden"
    }
    
    
}
