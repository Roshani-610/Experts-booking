// **************** navbar ***************** //
document.addEventListener('DOMContentLoaded', function () {
const navLinks = [
  {text: 'Home', href: 'index.html', id:'home', imagePath:'./images/home.png'},
  { text: 'Bookings', href: '#', imagePath: './images/calendar.png'},
  { text: 'Mentors', href: '#', imagePath: './images/Explore.png'},
  { text: 'Chat', href: '#', imagePath: './images/chat.png' },
  {text: 'Notification', href:'#', imagePath: './images/notifications active.png', className: 'main-nav__hide-icon'},
  {imagePath: './images/Ellipse 10.png', className: 'main-nav__hide-icon'},
  // {imagePath: './images/caret up.png', id:'caret-icon'}
];

const mainNav = document.querySelector('.main-nav__links ul');

navLinks.forEach(linkData => {
  const listItem = document.createElement('li');
  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('my-link-wrapper');
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

  if (linkData.text) {
    const textSpan = document.createElement('span');
    textSpan.textContent = linkData.text;
    linkWrapper.appendChild(textSpan);
  }

  // link.textContent = linkData.text; 

  linkWrapper.appendChild(link); 
  listItem.appendChild(linkWrapper); 
  mainNav.appendChild(listItem); 
});

const extractedLinkData = navLinks.map(linkData => ({
  text: linkData.text,
  href: linkData.href
}));

console.log(extractedLinkData);  



// **************** events slider ***************** //

var swiper = new Swiper(".mySwiper", {
spaceBetween: 20,
slidesPerView: 3,
centeredSlides: true,

// autoplay: {
//   delay: 1500,
//   disableOnInteraction: false,
// },
// // navigation: {
// //   nextEl: ".swiper-button-next", // Define the next button element
// //   prevEl: ".swiper-button-prev", // Define the previous button element
// // },

pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

breakpoints: {
414: {
slidesPerView: 2,
spaceBetween: 10,
},

769: {
slidesPerView: 2,
},

390: {
slidesPerView: 2,
spaceBetween: 10,
},

375: {
slidesPerView: 2,
spaceBetween: 10,
},

360: {
slidesPerView: 2,
spaceBetween: 10,
},

820: {
slidesPerView: 2,
spaceBetween: 1,
},

},

});

// **************** all experts view all button ********************* //


var viewAllButton = document.getElementById('viewAllButton');

  viewAllButton.addEventListener('click', function() {
    window.location.href = 'allExperts.html';
  });

  // **************** experts slider ********************* //

var swiper = new Swiper(".expertsSwiper", {
spaceBetween: -50,
slidesPerView: 4,
centeredSlides: true,

// autoplay: {
//   delay: 1500,
//   disableOnInteraction: false,
// },
// navigation: {
//   nextEl: ".swiper-button-next", // Define the next button element
//   prevEl: ".swiper-button-prev", // Define the previous button element
// },

pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

breakpoints: {
414: {
slidesPerView: 2,
spaceBetween: 10,
},

769: {
slidesPerView: 2,
},

390: {
slidesPerView: 2,
spaceBetween: 10,
},

375: {
slidesPerView: 2,
spaceBetween: 10,
},

360: {
slidesPerView: 2,
spaceBetween: 10,
},

820: {
slidesPerView: 2,
spaceBetween: 1,
},

},

});

// ******************** expert cards **************** //

var expertsContainer = document.getElementById("expertsContainer");

var expertsData = [
    {
        name: "Ashwini Desai",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        image: "./images/imgpro 2.png", 
    },
    {
        name: "Nandhini Desai",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        image: "./images/images (2) 3.png", 
    },
    {
        name: "Ravindra Dhara",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        image: "./images/images 1.png",
    },
    {
      name: "Ashwini Desai",
      position: "Product Manager at Google",
      tech: "Tech",
      field: "Medical",
      experience: "+3",
      image: "./images/imgpro 2.png", 
  },
    
];


var expertCards = expertsData.map(function (expert) {
    
    var expertCard = document.createElement("div");
    expertCard.className = "swiper-slide";

    expertCard.innerHTML = `
        <div class="experts-card__container">
            <img src="${expert.image}" alt="${expert.name}"> <!-- Use the specified image URL -->
            <div class="experts-card__container__title">${expert.name}</div>
            <div class="experts-card__container__position">
                <div class="experts-card__container__icon-img"><img src="./images/job.png"></div>
                <div class="experts-card__container__position-post">${expert.position}</div>
            </div>
            <div class="experts-card__container__flex">
                <div class="experts-card__container__tech">${expert.tech}</div>
                <div class="experts-card__container__field">${expert.field}</div>
                <div class="experts-card__container__experience">${expert.experience}</div>
            </div>
            <div class="experts-card__container__contact">
                <div class="experts-card__container__save"><img src="./images/Save.png"></div>
                <div class="experts-card__container__message"><img src="./images/tabler_message.png"></div> 
                  <button class="experts-card__container__book-btn">Book</button> 
                 <!-- Inside your expert card -->
                <!-- <button class="experts-card__container__book-btn" onclick="bookExpert('Ashwini Desai')">Book</button> -->

            </div>
        </div>
    `;

    return expertCard;
});

expertCards.forEach(function (card) {
    expertsContainer.appendChild(card);
});

// function bookExpert(expertName) {
//     window.location.href = `bookSession.html?expert=${encodeURIComponent(expertName)}`;
// }

// Get a reference to the "Book" button
var bookButtons = document.querySelectorAll('.experts-card__container__book-btn');

  bookButtons.forEach(function (button) {
    button.addEventListener('click', function () {
    window.location.href = 'bookSession.html';
  });
});

});


// var scheduleButtons = document.querySelector('.connect__card__schedule-btn');

//     scheduleButtons.addEventListener('click', function () {
//     window.location.href = 'connect.html';
//   });


  