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



//Image Carousel Automatic slideshow
var slideIndex = 0;
var timer = setInterval(showAllSlides, 4000);                         //Declare variable timer showAllSlides @ 4secs

function showAllSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
}



//Image Carousel Left Right slideshow
let sliderImages = document.querySelectorAll('.mySlides');          //Grab all images
    right = document.querySelector('#next');                        //Grab next right button
    left = document.querySelector('#prev');                         //Grab prev left button 
    current = 0;                                                    //Set current image to 0 index

//Clear all images
function reset(){                                                   //Before showing image on next/prev clears all images 
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

//Initialise slider 
function startSlide(){                                              //Grab image[0] and show first image manual
  reset();
  sliderImages[0].style.display = 'block';
}

//Show Previous LEFT
function slideLeft(){                        
  reset();
  sliderImages[current - 1].style.display = 'block';               //Reset wipe clear, take current -1 then display -1 image 
  current--;                                                       //Decrement the image at index -1
}

//Show Next RIGHT
function slideRight(){                                   
  reset();                                                         //Rest wipe all images clear
  sliderImages[current + 1].style.display = 'block';               //Show(block) image +1 and keep incrementing 
  current++;
}

//EVENT LISTENER click -LEFT
left.addEventListener('click', function(){                         //LEFT Listener for click on Prev button then fire LEFTfunction
  if(current === 0){                                               //If current slide is [0] which it will be cause reset
    current = sliderImages.length;                                 //Set current to max slideLength (last image in collection) then -1
  }
  slideLeft();                                                     //Fire the function slideLeft
});

//EVENT LISTENER click -RIGHT
right.addEventListener('click', function(){                        //RIGHT Listener for click on Next button then fire RIGHTfunction
  if(current === sliderImages.length - 1){                         //If current slide is last image in collection
    current = -1;                                                  //Current is equal to 2nd from last image -1 slide index 
  }
  slideRight();                                                    //Fire the function slideRight
});
startSlide();                                                      //Fire the function startSlide


// //PAUSE ON HOVER 
//  var i = 0;
// // var timer = setInterval(showAllSlides, 3000);
//  var slidesPath = document.getElementById("mySlides");

//  function pauseSlideOnHover(){
//   document.getElementById("mySlides");
//  if (i < slidesPath.length - 1){
//    i++;
//  } else {
//   i = 0;
// }
//  timer = setTimeout("pauseSlideOnHover()", 3000);
//  }
// function stopShow() {
//    clearInterval(timer);
//  }
//  function runShow(){
//   pauseSlideOnHover();
//  }


//CHECK PAUSE BUTTON
  //var timer = setInterval(showAllSlides, 4000);
  // var pauseButton = document.getElementById("pause");          //Grab pause button
  // let play = true;


  // function stopStart(){
  //   if (play){
  //     clearInterval(timer); 
  //     pauseButton.innerHTML = "Play me";
  //     play = false; 
     
  //   } else {
  //     play = true;
  //     timer = setInterval(showAllSlides, 4000);
  //     pauseButton.innerHTML = "Pause me";
  //   }
  // }
  //  pauseButton.addEventListener("click", function(){
  //   console.log("Did this work?");
   
  // stopStart();
	// });

  
  

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


// Change Clickbox background colour if correct answer 
var correctText = document.getElementById("username");                  //Grab textbox users answer will go
var colorBtnChangeA = document.getElementById("blueButton");            //Grab button that will check/change colour
   
var names = ["Bora Bora", "Aruba", "Cuba", "Varadero", "Mexico", "Cape Verde", "Sal",
            "Gambia", "Thailand", "Koh Samui", "Tahiti", "Saint Lucia", "St Lucia"];

function changeCorrectColor(event) {                                     //Listen for the event-actions-to-fire in addEventListener
   if (names.indexOf(correctText.value) != -1) {                         //If value in correctText IS (opposite of -1 not there) in NAMES then do something...
   event.target.classList.toggle("blue");                                //Toggle over button color change to blue
    } 
   } 
colorBtnChangeA.addEventListener("click", changeCorrectColor);           //Button addEvenListen out for 'click' to fire above function


//Count letters for longest spelling destination 
const input = document.getElementById("longestCountry");                 //Grab textbox     
let count = document.getElementById("character-count");                  //Grab chrCount element create new variable to pass through function
input.addEventListener("input", updateValue);                            //Listen for text input fire function called updateValue

function updateValue(){                                                  //Call function updateValue fire action
count.textContent = input.value.length + ' characters';                  //Count text.length number & add to word characters
}



//Timer Countdown Function
function startTimer(duration, display) {            //create function to display the duration time
    var timer = duration, minutes, seconds;         //timer is duration passed thru calulated in mins and secs
    setInterval(function () {                       //setInterval calls a function to set the specified intervals in milliseconds
   
        minutes = parseInt(timer / 60, 10);         //Calulation passes string time and passes to number mins
        seconds = parseInt(timer % 60, 10);         //Calulation passes string time and passes to number secs

        minutes = minutes < 10 ? "0" + minutes : minutes;  //If number is less than 10 add 0 and remaining minutes
        seconds = seconds < 10 ? "0" + seconds : seconds;  //If number is less than 10 add 0 and remaining seconds

        display.textContent = minutes + ":" + seconds;     //Display the set mins and secs

        if (--timer < 0) {                         //If timer is less than 0 it is equal to the duration Counter starts again!!
            timer = duration;
        }
    }, 1000);                                      //The secs and mins will change each 1000 1sec
}

//window.onload = function () {                     //onload event timer countdown will start as soon as pageSummary is fully loaded within <body> tag
var summaryTab = document.getElementById("summaryTab"); //Grab SummaryTab by ID name

summaryTab.addEventListener("click", function(){  //Added EventListener to click of tab fire function
  //alert("Did I work");
  var twoMinutes = 60 * 2,                        //Run 2 mins duration countdown timer 
  display = document.querySelector('#time');      //Grab the timeID and show countdown time next to word Timer
startTimer(twoMinutes, display);

});  
