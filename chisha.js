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


//Image carousel containing slides
const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;                                           //Slide timer speed can be changed here without affecting startSlide function

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);                    //Inbuilt JS method to clone a html element - 1st image
const lastClone = slides[slides.length - 1].cloneNode(true);     //Inbuilt JS method to clone a html element - last image

firstClone.id = 'first-clone'                                    //Giving clones an ID tag
lastClone.id = 'last-clone'

slide.append(firstClone);                                        //1st clone go to end
slide.prepend(lastClone);                                        //Last clone go to start

const slideWidth = slides[index].clientWidth;                    //Inner width mm of the slide
slide.style.transform = `translateX(${-slideWidth * index}pxn)`; //Transform and rearrange slide. Move image so it covers whole size


const startSlide = () => { //Transform and slide over next slide AUTOMATICALLY
                                                                // setInterval(() => {
                                                                //index++;
                                                                // slide.style.transform = `translateX(${-slidewidth * index}px)`;
                                                                //slide.style.transition = '.7s';
                                                                //}, interval);
  slideId = setInterval(() => {  
  moveToNextSlide();
  }, interval);
  };
    

const getSlides = () => document.querySelectorAll('.slide');   //Variable created to grab all slides   

slide.addEventListener('transitionend', () => {
      slides = getSlides();
  if (slides[index].id === firstClone.id){
      slide.style.transition = 'none';
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}pxn)`;
    }
  if (slides[index].id === lastClone.id){
      slide.style.transition = 'none';
      index = slides.length - 2;                                //Subtract 2 from last slide to get original cloned
      slide.style.transform = `translateX(${-slideWidth * index}pxn)`;
    }
});

const moveToNextSlide = () => {
     slides = getSlides();
     if (index >= slides.length - 1) return;
     index++;
     slide.style.transform = `translateX(${-slideWidth * index}pxn)`;
     slide.style.transition = '.7s';
}

const moveToPreviousSlide = () => {
    if(index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}pxn)`;
    slide.style.transition = '.7s';
  }


slideContainer.addEventListener('mouseenter', () => {
     clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();