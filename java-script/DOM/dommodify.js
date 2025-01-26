let body=document.body
console.log(body);

body.innerHTML +="<h1>Hello World</h1>"

body.innerHTML +="<p> this is about my protfolio. qswxdecfrvgtbhynjumkiolopiytr </p>"

let demo=document.getElementById("demo")
console.log(demo);

demo.innerHTML += ` <ol id="demo1" >
<li>Item1</li>
<li>Item2</li>
<li>Item3</li>
<li>Item4</li> 
</ol>`

let demo1= document.getElementById("demo1")
console.log(demo1);
demo1.style.border= "2px solid"
demo1.setAttribute("type", "1")
demo1.setAttribute("start", "100")



// createElemwnt()

let a=document.body
console.log(a);

let h1= document.createElement("h1")
console.log(h1);
h1.textContent="React"
a.appendChild(h1)

// eg2

let div = document.createElement("div")
console.log(div);
a.appendChild(div)
div.style.border="2px solid"

let ol = document.createElement("ol")
console.log(ol);
div.appendChild(ol)

let li1= document.createElement("li")
console.log(li1);
li1.textContent="Dom1"
ol.appendChild(li1)
li1.setAttribute("type", "A")
li1.style.color="red"

let li2= document.createElement("li")
console.log(li2);
li2.textContent="Dom2"
ol.appendChild(li2)
li2.setAttribute("type", "A")
li2.style.color="red"

let li3= document.createElement("li")
console.log(li3);
li3.textContent="Dom3"
ol.appendChild(li3)
li3.setAttribute("type", "A")
li3.style.color="red"

let li4= document.createElement("li")
console.log(li4);
li4.textContent="Dom4"
ol.appendChild(li4)
li4.setAttribute("type", "A")
li4.style.color="red"









