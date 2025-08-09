// DOM manipülasyonları (Document object model)

// var text = document.getElementsByClassName("text")

// var text2 = document.getElementById("text")

// document.getElementsByTagName("p")

// document.querySelector("p")

// DOm Olay İzleyicileri

// Click Olay İzleyicisi

var alertBtn = document.querySelector("#give-alert")

// console.log(alertBtn)

alertBtn.addEventListener("click", function(){
    alert("Uyarı butonuna tıkladınız!")
})

// Drag Olay izleyicisi

var dragBtn = document.querySelector("#drag-btn")

// console.log(dragBtn)

dragBtn.addEventListener("dragstart", function(){
    console.log("Sürükleme Başladı")
})
dragBtn.addEventListener("dragend", function(){
    console.log("Sürükleme Bitti")
})


var themeBtn = document.querySelector(".theme-btn")

var exampleWrapper = document.querySelector("#example-wrapper")

themeBtn.addEventListener("click", function(){
   exampleWrapper.classList.toggle("bg-color")
})

// Form Olay izleyici

var form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault() // Sayfa Yenileme Engelle


    console.log(event.target[0].value)
    console.log(event.target[1].value)


    event.target[0].value = "";
    event.target[1].value = "";
})


var createBtn = document.querySelector("#create-btn");
var kapsıyıcı = document.querySelector(".kapsayıcı");

console.log(createBtn)
console.log(kapsıyıcı)

createBtn.addEventListener("click", function(){
    var yeniDiv = document.createElement("div")

    yeniDiv.innerHTML = "Yeni Div"

    yeniDiv.classList.add("new-eleman");

    kapsıyıcı.appendChild(yeniDiv);
})

var resimKapsayıcı = document.querySelector(".resim-kapsayıcısı");

console.log(resimKapsayıcı)

resimKapsayıcı.innerHTML = "<img src='https://picsum.photos/200/300' />"