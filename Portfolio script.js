// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Resume download alert
document.getElementById("downloadResume").addEventListener("click", () => {
  alert("Your resume will be downloaded!");
});
