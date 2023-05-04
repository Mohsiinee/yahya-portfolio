document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('close');
    });
  
    navLinks.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        navLinks.classList.remove('show');
        hamburger.classList.remove('close');
      }
    });
});

$(document).ready(function() {
  $('.carousel').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


function checkScrollPosition() {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}
// Call the function when the page is scrolled
window.addEventListener('scroll', checkScrollPosition);
// Call the function on page load in case the user reloads the page while scrolled down
document.addEventListener('DOMContentLoaded', checkScrollPosition);


function openResumeModal() {
  document.getElementById('pdf-modal').style.display = 'block';
  document.getElementById('pdf-viewer').src = './assets/documents/yahya-sabiri-resume-cv.pdf';
}

function closeResumeModal() {
  document.getElementById('pdf-modal').style.display = 'none';
  document.getElementById('pdf-viewer').src = '';
}

document.getElementById('navbar-resume').addEventListener('click', openResumeModal);
document.getElementById('footer-resume').addEventListener('click', openResumeModal);

document.getElementById('close-modal').addEventListener('click', closeResumeModal);

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('pdf-modal')) {
    closeResumeModal();
  }
});

document.getElementById("year").innerHTML = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  const footerColumns = document.querySelectorAll(".footer-column");
  for (let i = 0; i < footerColumns.length; i++) {
    if (footerColumns[i].querySelector(".logo")) {
      footerColumns[i].style.borderRight = "1px solid gray";
      footerColumns[i].style.paddingRight = "5rem";
      break;
    }
  }
});