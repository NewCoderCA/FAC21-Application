//Tabs and tabs contents page 
const tabs = document.querySelectorAll('[data-tab-target]')           //Create variable for tabs. Grabs x3tabs from [data-tab-target]
const tabContents = document.querySelectorAll('[data-tab-content]')   //Create variable for tabContents. Grab x3tabContents from [data-tab-content]

tabs.forEach(tab => {                                                 //ForEach tab fire function
  tab.addEventListener('click', () => {                               //Add eventListener to fire function on click
    const target = document.querySelector(tab.dataset.tabTarget)      //Selector used to grab the div-id tabContent element based on when clicked
    tabContents.forEach(tabContent => {                               //ForEach tabContents fire function
      tabContent.classList.remove('active')                           //Remove the tabContents that is NOT active NOT clicked
    })
    tabs.forEach(tab => {                                             //ForEach tab for function
      tab.classList.remove('active')                                  //Remove the tab that is NOT active NOT clicked
    })
    tab.classList.add('active')                                       //Add show the active tab so its visible
    target.classList.add('active')                                    //Add show the active tabContent so its visible                        
  })
})


//Image carousel and slides function 
var slideIndex = 0;
showSlides(slideIndex);

//Automatic slideshow
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 6000);  // Change image every 6 seconds
}


//Next Previous arrows slideshow
showASlides(slideIndex);

function plusSlides(n) {
  showASlides(slideIndex += n);
}
function currentSlide(n) {
  showASlides(slideIndex = n);
}
function showASlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
}


//PAUSE PAUSE BUTTON ?? not working
// var playing = true;
// var pauseButton = document.getElementById('pause');
// const setInterval = setTimeout(showSlides,2000); //new variable which autoplays slideshow

// function pauseSlideshow(){
// 	pauseButton.innerHTML = 'Play';
// 	playing = false;
//   clearInterval(setInterval);
//   //alert("is pause working"); //CHECK ?? 
// }

// function playSlideshow(){
// 	pauseButton.innerHTML = 'Pause';
//   playing = true; //if pause button clicked slideshow stopped
//   //!clearInterval(setInterval); //THIS WORKS WHY??
//   setInterval(setTimeout()); //play slideshow again
//   //alert("is play working"); //CHECK ??
// }

// pauseButton.onclick = function(){
// 	if(playing){ pauseSlideshow(); } //if pausebutton is playing-ON-pause Slideshow
// 	else{ playSlideshow(); }         //else pausebutton not playing-OFF-play Slideshow
// };


//PAUSE MOUSEOVER/ MOUSELEAVE ?? not working
// document.getElementsByClassName("slideshow-container").addEventListener("mouseenter", mouseEnter);
// document.getElementsByClassName("slideshow-container").addEventListener("mouseleave", mouseLeave);
// function mouseEnter() {
//   clearTimeout(setTimeout);
// }
// function mouseLeave() {
//   setTimeout(showSlides, 6000);
// }



//Destination Textbox for user input 
var inputElement = document.getElementById("username");
    inputElement.addEventListener("change", function(){
var textLength = inputElement.value.length;
  if(textLength > 5) {  
inputElement.style.borderColor = "#FF0000";  //red
} else {
inputElement.style.borderColor = "#00FF00"; //green
}
})


//Change Text-color
const divs = document.querySelectorAll('.textColor');
divs.forEach(function (div) {
div.addEventListener("mouseover", function() {
   div.style.color = 'white'})
});


// Change clickbox colour if answer correct 
// function changeBackground() {
// var correctText = document.getElementById("username");
// var button = document.getElementById("blueButton"); 

// var names = ["Bora Bora", "Aruba", "Cuba", "Varadero", "Mexico", "Cape Verde", "Sal",
//             "Gambia", "Thailand", "Koh Samui", "Tahiti", "Saint Lucia", "St Lucia"];

//    //if(correctText.indexOf("names")){ //TRY THIS VERSION OF
//    if(correctText.value === "names"){
//   button.style.backgroundColor = "blue";
//    }
//    alert("changeColor"); //CHECK ??
// } 
// button.addEventListener("click", button.style.backgroundColor = "blue");


// Grab the element
// var clickColor = document.querySelector("#blueButton");
// var correctText = document.getElementById("username")
// // Define the actions
// function blueBackground(event) {
// event.target.classList.toggle("blue");
// if (correctText.innerHTML == "Cuba");
// } 
// // Listen for an event, and fire the function
// blueButton.addEventListener("click", blueBackground)

