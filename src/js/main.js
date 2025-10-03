// Sidebar effect:
window.onscroll = function() {myFunction()};

function myFunction() {
    var bar = document.getElementById('my-bar');
    var links = document.querySelectorAll('#my-bar a');

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        bar.style.backgroundColor = "#444";
        bar.style.padding = "10px 10px";
        links.forEach(link => {
            link.style.fontSize = "15px";
            link.style.color = "white";
        });
    } else {
        bar.style.backgroundColor = "#f4f4f6";
        links.forEach(link => {
            link.style.fontSize = "20px";
            link.style.color = "var(--main-color)";
        });
    }
}

// Scrollspy to highlight active menu item
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("div[id], section[id]");
  const navLinks = document.querySelectorAll("#my-bar a");

  let current = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 80 && rect.bottom >= 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Images are clickable 
function openPhotoModal(img) {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");

  modal.style.display = "block";   
  modalImg.src = img.src;         
  modalCaption.innerHTML = img.alt; 
}

function closePhotoModal() {
  const modal = document.getElementById("photoModal");
  if (modal) modal.style.display = "none";
}

// Close modal when clicking outside of content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("photoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Loop slides - Carousel 
let slideIndex = 0;
showSlides();

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.getElementsByClassName("carou-slide");
  if (slides.length === 0) return;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Auto-play
setInterval(() => { changeSlide(1); }, 2000);

// Video play
document.addEventListener('DOMContentLoaded', (event) => {
  const triggerSection = document.getElementById('videoSection');
  const myVideo = document.getElementById('myvideo');

  triggerSection.addEventListener('mouseenter', () => {
    myVideo.play();
  });

  triggerSection.addEventListener('mouseleave', () => {
    myVideo.pause();
    myVideo.currentTime = 0; 
  });
});