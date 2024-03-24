const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const loginData = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };

  if (loginData.email === "" || loginData.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(loginData);
    loginForm.reset();
  }
}
