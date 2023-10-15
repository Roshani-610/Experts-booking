// **************** navbar ***************** //
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = [
      {text: 'Home', href: 'index.html', id:'home', imagePath:'./images/home.png'},
      { text: 'Bookings', href: '#', imagePath: './images/calendar.png'},
      { text: 'Mentors', href: '#', imagePath: './images/Explore.png'},
      { text: 'Chat', href: '#', imagePath: './images/chat.png' },
      {text: 'Notification', href:'#', imagePath: './images/notifications active.png'},
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


// Define an array of expert data
const experts = [
    {
      name: "wini Desai",
      position: "Product Manager at Google",
      tech: "Tech",
      field: "Medical",
      experience: "+3",
      imageSrc: "./images/imgpro 2.png"
    },
    {
      name: "Ash Desai",
      position: "Product Manager at Google",
      tech: "Tech",
      field: "Medical",
      experience: "+3",
      imageSrc: "./images/images (2) 3.png"
    },
    {
      name: "shwini Desai",
      position: "Product Manager at Google",
      tech: "Tech",
      field: "Medical",
      experience: "+3",
      imageSrc: "./images/images (2) 3.png"
    },
    {
      name: "Ashwini Desai",
      position: "Product Manager at Google",
      tech: "Tech",
      field: "Medical",
      experience: "+3",
      imageSrc: "./images/images (2) 3.png"
    },
    {
      name: "Ani Desai",
      position: "Product Manager at Google",
      tech: "Tech",
      field: "Medical",
      experience: "+3",
      imageSrc: "./images/images 1.png"
    },

    {
        name: "wini Desai",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        imageSrc: "./images/imgpro 2.png"
      },

      {
        name: "Ani Desai",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        imageSrc: "./images/images 1.png"
      },

      {
        name: "Ani Desai",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        imageSrc: "./images/images 1.png"
      },

      {
        name: "shwini Desai",
        position: "Product Manager at Google",
        tech: "Tech",
        field: "Medical",
        experience: "+3",
        imageSrc: "./images/images (2) 3.png"
      },
  ];
  
  // Get the container element
  const expertsContainer = document.getElementById("AllExperts");
  
  // Use the map function to generate expert cards dynamically
  experts.forEach((expert) => {
    const expertCard = document.createElement("div");
    expertCard.className = "experts-card__container";
  
    expertCard.innerHTML = `
      <img src="${expert.imageSrc}">
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
      </div>
    `;
  
    expertsContainer.appendChild(expertCard);
  });

});
  

document.addEventListener("DOMContentLoaded", function () {
  const sortButton = document.getElementById("sortButton");
  const dropdown = document.getElementById("dropdown");

  sortButton.addEventListener("click", function () {
      dropdown.classList.toggle("hidden");
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
      if (!event.target.matches("#sortButton") && !event.target.matches("#dropdown")) {
          dropdown.classList.add("hidden");
      }
  });
});
