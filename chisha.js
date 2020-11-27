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




//Pause Button function 
// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
// 	pauseButton.innerHTML = 'Play';
// 	playing = false;
// 	clearInterval(slideInterval);
// }

// function playSlideshow(){

//   if (playing === 'true'){
//     slideIndex++;
//   }
// 	pauseButton.innerHTML = 'Pause';
// 	playing = true;
// 	slideInterval = setInterval(showSlides,6000);
// }

// pauseButton.onclick = function(){
// 	if(playing){ pauseSlideshow(); }
// 	else{ playSlideshow(); }
// };

// IS IT THIS PAUSE??
// let interval;
// function resumeSlides() {
//   showSlides();
// }
// function pauseSlides() {
//   clearInterval(interval);
// }

//OF IS IT THIS PAUSE??
// mySlides.addEventListener("mouseenter", ()=>{
//   clearInterval(showSlides, 6000);
// });

// mySlides.addEventListener("mouseleave", startSlide);


