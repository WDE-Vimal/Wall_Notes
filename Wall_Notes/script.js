var popup_background=document.querySelector(".popup-overlay");
var popup_foregorund=document.querySelector(".popup-box");


var plus_btn=document.getElementById("plus-btn");

plus_btn.addEventListener("click",function(){
   popup_background.style.display="block";
   popup_foregorund.style.display="block";
})



var cancel_btn=document.getElementById("cancel-popup");

function cancel(event){
    event.preventDefault();
    popup_background.style.display="none";
    popup_foregorund.style.display="none";
}


// selecting container,add-book btn,book-title,,book-author,book-description

var container=document.querySelector(".container");
var addnotes=document.getElementById("add-notes");
var notestitle=document.getElementById("notes-title");
var noteskeywords=document.getElementById("notes-keywords");
var notesdescription=document.getElementById("notes-description");

addnotes.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","notes-container")
    div.innerHTML=`<h2>${notestitle.value}</h2>
            <h5>${noteskeywords.value}</h5>
            <p>${notesdescription.value}</p>
              <button onclick="erase(event)">Delete</button>`
    container.append(div)
    popup_background.style.display="none";
    popup_foregorund.style.display="none";
    notestitle.value="";
    noteskeywords.value="";
    notesdescription.value="";
})


function erase(event){
    event.target.parentElement.remove();
}