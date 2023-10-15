// **************** navbar ***************** //
    const navLinks = [
      { text: 'Home', href: 'index.html', id:'home', imagePath: './images/home-icon.png'},
      { text: 'Messaging', href: '#', imagePath: './images/tabler_message.png'},
      { text: 'Bookings', href: '#', imagePath: './images/calendar.png' },
      {text: 'Notification', href:'#', imagePath: './images/notification.png'},
      {imagePath: './images/Ellipse 10.png' },
      // {imagePath: './images/caret up.png', id:'caret-icon'}
    ];
    
    const mainNav = document.querySelector('.main-nav__links ul');
    
    const currentPage = window.location.href.toLowerCase();
    document.addEventListener('DOMContentLoaded', function () {
      const links = document.querySelectorAll('.main-nav__link');
      links.forEach(link => {
        if (link.href.toLowerCase() === currentPage) {
          link.classList.add('active');
        }
      });
    });
    
    navLinks.forEach(linkData => {
      const listItem = document.createElement('li');
      const linkWrapper = document.createElement('div');
      const image = document.createElement('img');
      const link = document.createElement('a');
    
      link.href = linkData.href;
      link.className = 'main-nav__link';
    
      if (linkData.id) {
        link.id = linkData.id;
      }
    
      if (linkData.imagePath) {
        image.src = linkData.imagePath; 
       // image.alt = linkData.text; // Set the alt attribute for accessibility
        linkWrapper.appendChild(image);
      }
    
      link.textContent = linkData.text; 
    
      linkWrapper.appendChild(link); 
      listItem.appendChild(linkWrapper); 
      mainNav.appendChild(listItem); 
    });
    
    const extractedLinkData = navLinks.map(linkData => ({
      text: linkData.text,
      href: linkData.href
    }));
    
    console.log(extractedLinkData);  


// selected date box 

var boxes = document.querySelectorAll(".select-date__week-card");

boxes.forEach(function(box) {
  box.addEventListener("click", function() {
    
    boxes.forEach(function(b) {
      b.classList.remove("selected");
    });
    
    box.classList.add("selected");
  });
});


// content hide and show (booking page)

const bookNowButton = document.getElementById("book-now-button");

const initialContent = document.getElementById("initial-content");
const hiddenContent = document.getElementById("hidden-content");

bookNowButton.addEventListener("click", () => {

  initialContent.style.display = "none";
  hiddenContent.style.display = "block";
});