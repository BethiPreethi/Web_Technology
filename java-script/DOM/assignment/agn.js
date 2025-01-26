let table=document.createElement("table")
console.log(table);
document.body.appendChild(table)
table.setAttribute("border", "5")
// table.setAttribute("cellspacing", "10")
table.setAttribute("cellpadding", "20")
table.setAttribute("width","100%")
table.style.textAlign="center"
// table.style.backgroundImage="./imgaes/i2-bg.png"
// table.setAttribute("backgroundImage", "./imgaes/i2-bg.png")
table.style.backgroundColor="black"

// ROW1
let tr11= document.createElement("tr")
console.log(tr11);
table.appendChild(tr11)

// ROW1 and data1 - table
let td11=document.createElement("td")
console.log(td11);
tr11.appendChild(td11)



// content
let tr1= document.createElement("tr")
console.log(tr1);
td11.appendChild(tr1)
// td11.style.alignItems="center"
td11.setAttribute("width","50%")

let th1=document.createElement("th")
console.log(th1);
tr1.appendChild(th1)
th1.textContent="Name"
// th1.style.fontSize="70px"
th1.setAttribute("width","300px")
th1.style.backgroundColor="pink"
let th2=document.createElement("th")
console.log(th2);
tr1.appendChild(th2)
th2.textContent="id"
// th2.style.fontSize="70px"
th2.setAttribute("width","300px")
th2.style.backgroundColor="pink"

let tr2= document.createElement("tr")
console.log(tr2);
td11.appendChild(tr2)
let td1=document.createElement("td")
console.log(td1);
tr2.appendChild(td1)
td1.textContent="Abhi"
// td1.style.fontSize="50px"
td1.style.backgroundColor="pink"
let td2=document.createElement("td")
console.log(td2);
tr2.appendChild(td2)
td2.textContent="1"
// td2.style.fontSize="50px"
td2.style.backgroundColor="pink"

let tr3= document.createElement("tr")
console.log(tr3);
td11.appendChild(tr3)
let tdt1=document.createElement("td")
console.log(tdt1);
tr3.appendChild(tdt1)
tdt1.textContent="Rahul"
// tdt1.style.fontSize="50px"
tdt1.style.backgroundColor="pink"

let tdt2=document.createElement("td")
console.log(tdt2);
tr3.appendChild(tdt2)
tdt2.textContent="2"
// tdt2.style.fontSize="50px"
tdt2.style.backgroundColor="pink"


// row1 and data2 - list
let td12=document.createElement("td")
console.log(td12);
tr11.appendChild(td12)

let ol=document.createElement("ol")
console.log(ol);
td12.appendChild(ol)
// ol.style.textAlign="center"
let li1= document.createElement("li")
console.log(li1);
ol.appendChild(li1)
li1.textContent="Java"
li1.style.color="red"
li1.style.fontSize="50px"

let li2= document.createElement("li")
console.log(li2);
ol.appendChild(li2)
li2.textContent="Web"
li2.style.color="red"
li2.style.fontSize="50px"

let li3= document.createElement("li")
console.log(li3);
ol.appendChild(li3)
li3.textContent="Sql"
li3.style.color="red"
li3.style.fontSize="50px"



// ROW2
let tr22= document.createElement("tr")
console.log(tr22);
table.appendChild(tr22)

// ROW2 - links
let td21=document.createElement("td")
console.log(td21);
tr22.appendChild(td21)
let anchor=document.createElement("a")
console.log(anchor);
td21.appendChild(anchor)
anchor.textContent="Click for Prime"
anchor.setAttribute("href","http://www.primevideo.com")
anchor.setAttribute("target", "blank")

// let br=document.createElement(br)
// console.log(br);
// td21.appendChild(br)
// br.textContent=""

anchor.insertAdjacentHTML("afterend","<br>")

let anchor2=document.createElement("a")
console.log(anchor2);
td21.appendChild(anchor2)
anchor2.textContent="Click for Flipkart"
anchor2.setAttribute("href","http://www.flipkart.com")
anchor2.setAttribute("target", "blank")


let td22=document.createElement("td")
console.log(td22);
tr22.appendChild(td22)
let img=document.createElement("img")
console.log(img);
td22.appendChild(img)
img.setAttribute("src", "./imgaes/i1.png")
img.setAttribute("alt","Error")