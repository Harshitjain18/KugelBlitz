document.addEventListener("DOMContentLoaded", () => {
    console.log("KugelBlitz site loaded!");
    emailjs.init("xhqYl2tWj7GgMCIBw");
  
    // Contact Form with EmailJS
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Replace with your actual EmailJS Service ID & Template ID
        const serviceID = "service_yaiaxac";    // e.g., "service_xxx"
        const templateID = "template_8cji99a";  // e.g., "template_xxx"
  
        // Send the form data to EmailJS
        emailjs.sendForm(serviceID, templateID, "#contactForm")
          .then(() => {
            alert("Your message has been sent successfully!");
            contactForm.reset();
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong while sending your message.");
          });
      });
    }
  
    // (Optional) Intersection Observer for any fade-in elements, if desired.
    /*
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = { threshold: 0, rootMargin: "0px 0px -100px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => appearOnScroll.observe(fader));
    */
  });
  