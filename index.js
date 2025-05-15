document.addEventListener("DOMContentLoaded", function() {
  var text = [
    "> Hello!",
    "> My name is Viveka Pandiaraj.",
    "> I am a Full Stack Developer based in Vancouver, BC.",
    "> I enjoy creating responsive and user-friendly web applications.",
    "> I’m passionate about both front-end design and back-end logic.",
    "> If you're interested to know more about me, you're in the right place :)"
  ];

  var i = 0; // To track the current line
  var speed = 100; // Delay between typing each character in ms
  var lineSpeed = 500; // Delay between lines (after one line is typed) in ms
  var typingElement = document.getElementById("typing");

  function typeLine() {
    if (i < text.length) {
      var currentLine = text[i];
      var j = 0; // To track the current character in the line
      var lineElement = document.createElement("div"); // Create a new div for each line
      typingElement.appendChild(lineElement); // Add the div to the container

      function typeCharacter() {
        if (j < currentLine.length) {
          lineElement.innerHTML += currentLine[j];
          j++;
          setTimeout(typeCharacter, speed);
        } else {
          i++; // Move to the next line
          setTimeout(typeLine, lineSpeed); // Wait before typing next line
        }
      }

      typeCharacter();
    }
  }

  typeLine(); // Start typing effect
});

// ===== PROJECTS — SINGLE-CARD OVERLAY CAROUSEL LOGIC =====
// Updated Projects Carousel Logic
const carousel = document.querySelector('.carousel');
const cards = Array.from(carousel.children);
let current = 0;

function updateCarousel() {
  cards.forEach((card, i) => {
    card.classList.remove('left','center','right','off-right');
    if (i < current - 1) {
      card.classList.add('off-right');
    } else if (i === current - 1) {
      card.classList.add('left');
    } else if (i === current) {
      card.classList.add('center');
    } else if (i === current + 1) {
      card.classList.add('right');
    } else {
      card.classList.add('off-right');
    }
  });
}

carousel.addEventListener('click', e => {
  const clicked = e.target.closest('.project_card');
  if (!clicked) return;
  const idx = cards.indexOf(clicked);
  if (idx > current) {
    current = idx;
  } else if (idx < current) {
    current = idx;
  }
  updateCarousel();
});

// Initial render
updateCarousel();
window.addEventListener('resize', updateCarousel);




// ===== CONTACT FORM HANDLER =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name    = this.name.value.trim();
  const email   = this.email.value.trim();
  const message = this.message.value.trim();
  const feedbackEl = document.getElementById('formFeedback');

  // Validation: Empty fields
  if (!name || !email || !message) {
    feedbackEl.style.color = '#8c2e3e';
    feedbackEl.textContent = 'Please fill out all fields.';
    return;
  }

  // Validation: Email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedbackEl.style.color = '#8c2e3e';
    feedbackEl.textContent = 'Please enter a valid email.';
    return;
  }

  // Send Email using EmailJS
  emailjs.sendForm('service_j3s6vj5', 'template_zv8a9ad', this)
    .then(function(response) {
      feedbackEl.style.color = '#2c8c86';
      feedbackEl.textContent = `Thanks, ${name}! Your message has been sent.`;
      document.getElementById('contactForm').reset();
    }, function(error) {
      feedbackEl.style.color = '#8c2e3e';
      feedbackEl.textContent = 'Oops! Something went wrong. Please try again later.';
      console.error('EmailJS Error:', error);
    });
});
