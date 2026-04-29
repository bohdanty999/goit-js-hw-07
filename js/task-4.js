const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements["email"].value.trim();
  const password = form.elements["password"].value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formInputs = {
    email: email,
    password: password,
  };
  console.log(formInputs);
  form.reset();
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formGetter = new FormData(form);
//   const formValues = {
//     email: formGetter.get("email").trim(),
//     password: formGetter.get("password").trim(),
//   };
//   if (formValues.email === "" || formValues.password === "") {
//     alert("All form fields must be filled in");
//   }
//   console.log(formValues);
//   form.reset();
// });
