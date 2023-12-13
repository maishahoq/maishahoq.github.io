//AOS.init(); //reference: https://michalsnik.github.io/aos/

//JS for the mobile screen menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const menuLinks = document.querySelector(".menu-links");

  hamburger.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
  });
});

//js for navigaing to diff =webgae in portfolio
function navigateToPage(url) {
  window.location.href = url;
}

//JS for form submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {
      // Check if the form is valid
      if (!this.checkValidity()) {
        e.preventDefault();
      }

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const techworkType = document.getElementById("techworkType").value; // Get the selected swe type

      const content = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nTech Work Type: ${techworkType}\nMessage: ${message}`;
      const blob = new Blob([content], { type: "text/plain" });

      const anchor = document.createElement("a");
      anchor.download = `${firstName}_${lastName}_booking.txt`;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.click();
      window.URL.revokeObjectURL(anchor.href);
    });
});

//JS for the reviews page, sliding and scroll down apprearing animation
document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review");

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    reviews.forEach((review) => {
      const reviewTop = review.getBoundingClientRect().top;
      if (reviewTop < windowHeight - 50) {
        // 50 is a threshold
        review.style.opacity = 1;
      }
    });
  });
});

//JS for experience section
// function zoomIn(element) {
//   element.style.transform = "scale(1.05)";
// }

// function zoomOut(element) {
//   element.style.transform = "scale(1)";
// }

function openExperience(experienceId) {
  document.getElementById(experienceId).classList.add("active");
  // document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  document.getElementById("overlay").style.display = "block"; // Show overlay
}

function closeExperience(experienceId) {
  document.getElementById(experienceId).classList.remove("active");
  // document.body.style.backgroundColor = "";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Optional: Close experience details when clicking on the overlay
document.getElementById("overlay").addEventListener("click", function () {
  const openDetails = document.querySelector(".experience-details.active");
  if (openDetails) {
    openDetails.classList.remove("active");
    this.style.display = "none"; // Hide overlay
  }
});
