// /*===== EXPANDER MENU  =====*/
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//       toggle.classList.toggle("bx-x");
//     });
//   }
// };
// showMenu("header-toggle", "nav-menu");

// /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll(".nav__link");

// function linkAction() {
//   /*Active link*/
//   navLink.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));

// Show Menu and Toggle Icon
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Toggle the sidebar visibility
      nav.classList.toggle("show");
      // Change the toggle icon (hamburger or close)
      toggle.classList.toggle("bx-x");
    });
  }
};

// Initialize the menu toggle
showMenu("header-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Remove "active" class from all links
  navLink.forEach((n) => n.classList.remove("active"));
  // Add "active" class to the clicked link
  this.classList.add("active");

  // Hide the sidebar menu after clicking a link (for mobile view)
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");

  // Reset the hamburger icon after closing the menu
  const toggle = document.getElementById("header-toggle");
  if (toggle) {
    toggle.classList.remove("bx-x");
  }
}

// Add event listeners to all navigation links
navLink.forEach((n) => n.addEventListener("click", linkAction));
