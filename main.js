const sliderContainers = document.querySelectorAll(".description");

sliderContainers.forEach((container) => {
  const slider = container.querySelector(".slider");
  const images = container.querySelectorAll(".slider img");

  let currentIndex = 0;
  const intervalTime = 4000; // Change slide every 4 seconds

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  }

  function updateSlide() {
    if (screen.width < 810) {
      slider.style.transform = `translateX(-${currentIndex * 107}%)`;
    }
    else {
      slider.style.transform = `translateX(-${currentIndex * 102}%)`;
    }
    
  }

  setInterval(nextSlide, intervalTime);
});



function openProject1(index) {
  document.querySelectorAll("[id='project']")[index].style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Function to close the project div and hide the overlay
function closeProject1(index) {
  document.querySelectorAll("[id='project']")[index].style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}





const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: 'forwards'})
})


const linksButtons = document.querySelectorAll('a, button');

linksButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '60px';
      cursorOutline.style.height = '60px';
  });

  button.addEventListener('mouseleave', () => {
    cursorOutline.style.width = '20px';
    cursorOutline.style.height = '20px';
  });
});


// Function to handle smooth scrolling
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
      // Calculate the offset of the target element from the top
      const offset = targetElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to the target element with smooth behavior
      window.scrollTo({
          top: offset,
          behavior: 'smooth'
      });
  }
}

// Attach click event listeners to the navigation links
const navLinks = document.querySelectorAll('header a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default jump-to behavior
      const targetId = link.getAttribute('href').slice(1); // Remove the "#" symbol
      smoothScroll(targetId); // Call the smoothScroll function
  });
});




const button = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
// Add a click event listener to the button
button.addEventListener('click', () => {
    // Toggle the display of the dropdown content
    if (dropdownContent.style.opacity === '1') {
        dropdownContent.style.opacity = '0';
    } else {
        dropdownContent.style.opacity = '1';
    }
});


var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-150px";
    if (dropdownContent.style.opacity === '1') {
      dropdownContent.style.opacity = '0';
  }
  }
  prevScrollpos = currentScrollPos;
}