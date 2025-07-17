// document.querySelector("form").addEventListener("submit", function () {
//   const email = document.querySelector('input[type="email"]').value;
//   const password = document.querySelector('input[type="password"]').value;

//   // Very simple hardcoded user check (for demo)
//   if (email === "admin@quickbite.com" && password === "admin123") {
//     window.location.href = "admin.html";
//   } else if (email === "user@quickbite.com" && password === "user123") {
//     window.location.href = "place-order.html";
//   } else {
//     alert("Invalid credentials");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function () {
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    // Demo user accounts
    const users = [
      { email: "admin@quickbite.com", password: "admin123", role: "admin", redirect: "place-order.html" },
      { email: "user@quickbite.com", password: "user123", role: "user", redirect: "place-order.html" }
    ];

    const found = users.find(
      u => u.email === email && u.password === password
    );

    if (found) {
      // Store role if Remember Me is checked
      if (rememberMe) {
        localStorage.setItem("role", found.role);
        localStorage.setItem("email", found.email);
      } else {
        localStorage.removeItem("role");
        localStorage.removeItem("email");
      }

      // Redirect to respective page
      window.location.href = found.redirect;
    } else {
      showError("Invalid email or password.");
    }
  });

  function showError(msg) {
  const errorElement = document.getElementById("errorMessage");
  if (errorElement) {
    errorElement.textContent = msg;
    // Optional: Clear after a delay
    setTimeout(() => {
      errorElement.textContent = '';
    }, 5000); // Clear after 5 seconds
  } else {
    alert(msg); // Fallback if the element isn't found
  }
}
});
