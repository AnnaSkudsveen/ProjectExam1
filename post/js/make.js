const publishBtn = document.querySelector(".publish");
const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const imageInput = document.getElementById("uploadImg");
const imageText = document.getElementById("imageText");
const tagInput = document.getElementById("tags");

publishBtn.addEventListener("click", () => {
  event.preventDefault();
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen", {
      method: "POST",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5uYVNrdWRzdmVlbiIsImVtYWlsIjoiYW5uc2t1MDEyNjJAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3MTQ2NTg2MzN9.FMxO-jdd2kYlSB9aZJmjDWijTTnCi9FAtXgQmajPkgs",
        // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        // title: `${titleInput.value}`,
        // body: `${textInput.value}`,
        title: "testing",
        body: "testing text",
        // tags: [`${tagInput.value}`],
        // media: {
        //   url: `${imageInput.value}`,
        //   alt: `${imageText.value}`,
        // }
      }),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        return response.json();
      })
      .then((data) => {
        console.log(titleInput.value);
        console.log(textInput.value);
        // window.location.replace(`overview.html`);
      });
  } catch (error) {
    console.log(error);
  }
});
