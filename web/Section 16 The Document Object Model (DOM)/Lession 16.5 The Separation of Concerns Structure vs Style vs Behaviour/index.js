var btn =document.querySelector("button")
console.log(document.querySelector("button").classList)
btn.classList.add("test-red")
btn.classList.remove("test-red")
btn.classList.toggle("test-red")

document.querySelector("#title").classList.add("text-fontSize")
var test = document.querySelector(".float-right");
console.log(test)
document.querySelector(".float-right").innerHTML="<b>test sadfasdf</b>"

var link = document.querySelector("a")
console.log(link.attributes)
console.log(link.getAttribute("href"))
link.setAttribute("href","http://localhost:8081/ShopmeAdmin/login")