const publishBtn = document.querySelector(".publish");
const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const imageInput = document.getElementById("uploadImg");
const imageText = document.getElementById("imageText");
const tagInput = document.getElementById("tags");

const accessToken = sessionStorage.getItem("accesstoken");

function postRequest() {
  fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: `${titleInput.value}`,
      body: `${textInput.value}`,
      tags: tagInput.value.split(",").map((tag) => tag.trim()),
      // media: {
      //   url: `${imageInput.value}`,
      //   alt: `${imageText.value}`,
      // },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("sent information: " + data);
      window.location.href = "../account/overview.html";
    });
}

publishBtn.addEventListener("click", () => {
  event.preventDefault();
  try {
    postRequest();
  } catch (error) {
    console.log("an error has happened, try logging in");
  }
});
