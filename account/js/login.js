const logInForm = document.querySelector(".inputForm");
const logInBtn = document.querySelector(".logInBtn");
const registerBtn = document.querySelector(".registerBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorHandling = document.querySelector(".error-handling");

let accesstoken;

logInBtn.addEventListener("click", () => {
  event.preventDefault();
  try {
    fetch("https://v2.api.noroff.dev/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: `${emailInput.value}`,
        password: `${passwordInput.value}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        accesstoken = json.data.accessToken;
        window.location.replace(`overview.html`);
      });
  } catch (error) {
    // errorHandling.innerHTML = `Login failed`;
  }
});

registerBtn.addEventListener("click", () => {
  location.href = "";
});
