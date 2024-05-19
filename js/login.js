const logInForm = document.querySelector(".inputForm");
const logInBtn = document.querySelector(".logInBtn");
const registerBtn = document.getElementById("registerBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorHandling = document.querySelector(".error-handling");

let accesstoken;

logInBtn.addEventListener("click", () => {
  event.preventDefault();
  try {
    fetch("https://v2.api.noroff.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: `${emailInput.value}`,
        password: `${passwordInput.value}`,
      }),

      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
    })
      .then((response) => response.json())
      .then((data) => {
        accesstoken = data.data.accessToken;
        sessionStorage.setItem("accesstoken", `${accesstoken}`);
        window.location.replace(`overview.html`);
      });
  } catch (error) {
    console.log("an error has happened");
  }
});

registerBtn.addEventListener("click", () => {
  window.location.href = "register.html";
});
