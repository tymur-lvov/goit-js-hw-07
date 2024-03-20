const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const loginData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };

  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert("All form fields must be filled in");
  }

  console.log(loginData);

  form.reset();
}
