document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const result = document.getElementById("result");

      if (!name || !email || !message) {
        result.textContent = "Please fill in all the fields before sending.";
        return;
      }

      const subject = encodeURIComponent("Website enquiry from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
      );

      result.textContent = "Opening your email application...";
      window.location.href =
        "mailto:ruchithgowda2006@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});
