//when I press on menu icon the side bar needs to toggle

//when I press on the close button the side bar needs to disapear

//declaring both buttons and sidebar (just use the dot when declaring)
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');


//toggle button (arrow function)
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    });

//close button (old function)
closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
});