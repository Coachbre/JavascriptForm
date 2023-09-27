console.log("Welcome to the main module")

const onSubmit = () => {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const inputs = [firstName, lastName, email, password];

  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
    }
  })
  // for each input, if the value is empty- add class of error (in css)
}
