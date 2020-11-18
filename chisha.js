const tabs = document.querySelectorAll('[data-tab-target]'); 
//create variable called tabs - grab all tabs
const tabContents = document.querySelectorAll('[data-tab-content]');
//create variable called tabContents - grab all tabContents words

tabs.forEach(tab => {                  //4Loop Each time you click on tab fire function
    tab.addEventListener('click', () => { //Function = when click on tab do something...
        const target = document.querySelector(tab.dataset.tabTarget) //new variable called target - grab all tabs
        tabContents.forEach(tabContent => {                         //4Loop Each tabContents remove others that are not active
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {              //4Loop Each time tab button clicked on
            tab.classList.remove('active') //Removes previous active
        })
        tab.classList.add('active')        //Clicked on becomes active

    target.classList.add('active')        //Add clicked on active tab to show
    })
})
