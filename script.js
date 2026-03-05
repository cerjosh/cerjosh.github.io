// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

const modal = document.getElementById("projectModal");
const modalContent = modal.querySelector(".modal-content");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalImage = document.getElementById("modalImage");
const closeIcon = document.querySelector(".close-icon");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title || "";
        modalDescription.textContent = card.dataset.description || "";
        modalTech.textContent = card.dataset.tech || "";

        if (card.dataset.image) {
            modalImage.src = card.dataset.image;
            modalImage.style.display = "block";
        } else {
            modalImage.style.display = "none";
        }

        modal.style.display = "flex";

        // Add show class for animation
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
    });
});

function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // wait for animation
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