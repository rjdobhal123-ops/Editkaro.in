/* =========================================================
   1. MOBILE MENU TOGGLE
   When the hamburger button is clicked, show or hide the nav
========================================================= */
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

/* Close the mobile menu whenever a nav link is clicked */
var allNavLinks = navLinks.querySelectorAll("a");
allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});


/* =========================================================
   2. PORTFOLIO FILTER
   Show only the cards that match the selected category
========================================================= */
var filterButtons = document.querySelectorAll(".filter-btn");
var cards = document.querySelectorAll(".card");
var noResultsText = document.getElementById("noResults");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    // Remove "active" style from every button, then add it to the clicked one
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    // Get the category we want to show (e.g. "gaming" or "all")
    var selectedCategory = button.getAttribute("data-category");
    var visibleCount = 0;

    // Loop through every card and show/hide it
    cards.forEach(function (card) {
      var cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "block";
        visibleCount = visibleCount + 1;
      } else {
        card.style.display = "none";
      }
    });

    // If nothing matched, show the "no results" message
    if (visibleCount === 0) {
      noResultsText.style.display = "block";
    } else {
      noResultsText.style.display = "none";
    }
  });
});


/* =========================================================
   3. VIDEO PREVIEW MODAL (LIGHTBOX)
   Clicking a card opens a simple popup with its details
========================================================= */
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modalTitle");
var modalCategory = document.getElementById("modalCategory");
var modalThumb = document.getElementById("modalThumb");
var closeModalBtn = document.getElementById("closeModal");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    // Get the title and category text from inside this card
    var title = card.querySelector("h3").textContent;
    var category = card.querySelector("p").textContent;
    var thumbClass = card.querySelector(".thumb").className;

    // Put that text into the modal
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalThumb.className = "modal-thumb " + thumbClass.replace("thumb", "").trim();

    // Show the modal
    modal.classList.remove("hidden");
  });
});

/* Close the modal when the ✕ button is clicked */
closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});

/* Close the modal when clicking the dark background (outside the box) */
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});


/* =========================================================
   4. CONTACT FORM
   Show a thank-you message instead of actually sending data
========================================================= */
var contactForm = document.getElementById("contactForm");
var formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  formMsg.textContent = "Thanks! Your message has been sent. We'll get back to you soon.";
  contactForm.reset();
});
