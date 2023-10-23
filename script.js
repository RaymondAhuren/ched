const showContent = document.querySelector("#display-none")
const inputValue = document.querySelector("#login")
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputValue.value === "") {
    // Show the "showContent" element
    showContent.style.visibility = "visible";

    // Set a timeout to hide it after 10 seconds
    setTimeout(function () {
      showContent.style.visibility = "hidden";
    }, 5000);
  } else {
    if (inputValue.value === "CHED")
      
       window.location.href = "./user/dashboard.html";
      
    else {
      const worngPasscode = document.querySelector(".wrong-passcode")
      worngPasscode.style.color = "red"
      worngPasscode.style.backgroundColor = "black"
      worngPasscode.textContent = "Incorrect ID";

      setTimeout(function () {
        worngPasscode.style.color = "white"
      worngPasscode.style.backgroundColor = "green";
        worngPasscode.textContent = "Login";
        inputValue.value = "";
      }, 4000);
    }
  }
});
