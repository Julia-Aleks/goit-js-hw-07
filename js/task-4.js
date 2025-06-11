const registerForm = document.querySelector(`.login-form`);
console.log(registerForm);
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === `` || password.value.trim() === ``) {
    alert(`All form fields must be filled in`);
    return;
  }
  const obj = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(obj);
  registerForm.reset();
}
