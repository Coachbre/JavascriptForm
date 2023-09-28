console.log("Welcome to the main module")

const greeting = (user) => {
  document.getElementById("greeting").innerHTML+= "Hi, " + user + "!";
  // targets id of greeting in html then ADDS a string (actual greeting) to the inner html
  // user (name) is passed in as a parameter to be used
}

const onSubmit = () => {
  const firstName = document.getElementById("first-name").value;
  // function targets the id of first-name in the html, and returns the value entered by the user
  greeting(firstName);
  //first name is passed in as an argument to the greeting function

};
