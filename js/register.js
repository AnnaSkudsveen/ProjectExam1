const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.querySelector(".registerBtn");
const logInBtn = document.querySelector(".logInBtn");

logInBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

registerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    fetch("https://v2.api.noroff.dev/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: `${nameInput.value}`,
        email: `${emailInput.value}`,
        password: `${passwordInput.value}`,
      }),

      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json();
        if (!response.ok) {
          alert("Error: try again");
        } else {
          alert("New user created");
          window.location.replace(`login.html`);
        }
      })
      .then((data) => {});
  } catch (error) {
    console.error(error);
  }
});
