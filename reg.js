
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    

    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
    if (!/^\d{6,12}$/.test(phone)) {
      alert("Phone number must be between 6 and 12 digits.");
      return false;
    }
   
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!/^\d{6,12}$/.test(phone)) {
      alert("Phone number must be between 6 and 12 digits.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  }
