// selecting popu-box popupoverlay and button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// select cancel btn

var cancelbutton = document.getElementById("cancel-popup")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})




//select conatiner,add-book,booktitle,bookauthor

var conatiner=document.querySelector(".container")

var addbook=document.getElementById("add-book")

var booktitleinput=document.getElementById("book-title-input")

var authorinput=document.getElementById("book-author-input")

var description =document.getElementById("book-description-input")

// addbook.addEventListener("click",function(event){
//     event.preventDefault()    
//     var div= document.createElement("div")
//     div.setAttribute("class","book-container")
//     div.innerHTML=`<h1>${booktitleinput.value}</h1>`
//     conatiner.append(div)
    
// })

function add(event){

    event.preventDefault()
       
    var div= document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`

    console.log(authorinput.value)
    
            
    conatiner.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


}

function deletebook(event){
    event.target.parentElement.remove()
}



