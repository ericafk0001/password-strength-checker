document.addEventListener("DOMContentLoaded", (event) => {
  function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) {
      strength += 1;
    }
    //regex
    if (/[a-z]/.test(password)) {
      strength += 1;
    }

    if (/[A-Z]/.test(password)) {
      strength += 1;
    }
    //check one digit
    if (/\d/.test(password)) {
      strength += 1;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 1;
    }

    switch (strength) {
      case 5:
        return "Strong";
      case 4:
        return "Good";
      case 3:
        return "Moderate";
      case 2:
        return "Weak";
      default:
        return "Very Weak";
    }
  }

  const passwordField = document.getElementById("password");
  const strengthIndicator = document.getElementById("strength-indicator");

  passwordField.addEventListener("input", () => {
    const strength = checkPasswordStrength(passwordField.value);

    strengthIndicator.textContent = `Password Strength: ${strength}`;
  });
});
