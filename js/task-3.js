const input = document.querySelector("#name-input");
const guestName = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  const newNameValue = event.currentTarget.value.trim();
  guestName.textContent = newNameValue === "" ? "Anonymous" : newNameValue;
});
