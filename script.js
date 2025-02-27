  // Function to toggle the menu
  function toggleMenu() {
    const navUl = document.querySelector('header nav ul');
    if (navUl) {
      navUl.classList.toggle('active');
    } else {
      console.error('Navigation menu not found!');
    }
  }
  // Newsletter form submission handler
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput) {
        const email = emailInput.value;
        if (email) {
          alert(`Thank you for subscribing! We've sent your free guide to ${email}.`);
          // You can add code here to send the email to your server or email marketing service
        } else {
          alert('Please enter a valid email address.');
        }
      } else {
        console.error('Email input field not found!');
      }
    });
  } else {
    console.error('Newsletter form not found!');
  }