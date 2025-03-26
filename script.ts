// TypeScript code for Røde Kors login page

/**
 * Initialize the application when the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

/**
 * Main function to initialize the application
 */
function initializeApp(): void {
  setupEventListeners();
}

/**
 * Set up all event listeners for interactive elements
 */
function setupEventListeners(): void {
  // Help link event listener
  const helpLink = document.querySelector(".help-footer") as HTMLAnchorElement;
  if (helpLink) {
    helpLink.addEventListener("click", (e) => {
      e.preventDefault();
      // Open help in a new window or redirect to help page
      window.open("https://www.rodekors.no/hjelp", "_blank");
    });
  }

  // Footer links event listeners
  const footerLinks = document.querySelectorAll(
    ".footer-link",
  ) as NodeListOf<HTMLAnchorElement>;
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        window.open(href, "_blank");
      }
    });
  });
}
