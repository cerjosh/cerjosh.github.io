// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");

const closeIcon = document.querySelector(".close-icon");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modalTech.textContent = card.dataset.tech;
        modal.style.display = "flex";
    });
});

function closeModal() {
    modal.style.display = "none";
}

closeIcon.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Navbar shrink on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Add EmailJS SDK in your HTML <head> or before </body>
// <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
//
//
//

// Replace these with your EmailJS credentials
const USER_ID = "GbNlSzcFwqvm-hto1";
const SERVICE_ID = "service_xxhf5z5";
const TEMPLATE_ID = "template_wnpblon";

emailjs.init(USER_ID);

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      formMessage.style.color = "green";
      formMessage.textContent = "Message sent successfully! Thank you.";
      form.reset();
    }, (error) => {
      formMessage.style.color = "red";
      formMessage.textContent = "Oops… something went wrong. Please try again.";
      console.error(error);
    });
});