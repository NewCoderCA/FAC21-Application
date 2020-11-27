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

//Next Previous Arrows slideshow
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


//Destination Textbox for user input 
var inputElement = document.getElementById("beach");
    inputElement.addEventListener("change", function(){
var textLength = inputElement.value.length;
  if(textLength > 5) {  
inputElement.style.borderColor = "#FF00FF";  //fusia Hexcode
} else {
inputElement.style.borderColor = "#00FF00"; //green Hexcode
}
})

