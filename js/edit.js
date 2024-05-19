const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const imageInput = document.getElementById("uploadImg");
const imageText = document.getElementById("imageText");
const tagInput = document.getElementById("tags");

const accessToken = sessionStorage.getItem("accesstoken");
console.log(accessToken);

function getRequest() {
  fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      titleInput.value = `${data.title}`;
      textInput.value = `${data.body}`;
      tagInput.value = `${data.tags}`;
    });
}
getRequest();

//Code taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-advanced/url-parameters?nav=undefined
//Get parameter from URL
const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const postId = searchParameters.get("id");

putRequest(postId);

function putRequest(id) {
  fetch(`https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: `${titleInput.value}`,
      body: `${textInput.value}`,
      tags: [`${tagInput.value}`],
      // media: {
      //   url: `${imageInput.value}`,
      //   alt: `${imageText.value}`,
      // },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("edited information: " + data);
    });
}

function deleteRequest(id) {
  fetch(`https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(error);
    });
}

editBtn.addEventListener("click", () => {
  event.preventDefault();
  try {
    putRequest();
    window.location.href = "../account/overview.html";
  } catch (error) {
    console.log("an error has happened, try logging in");
  }
});

deleteBtn.addEventListener("click", () => {
  event.preventDefault();
  try {
    deleteRequest();
    window.location.href = "../account/overview.html";
  } catch (error) {
    console.log("an error has happened, try logging in");
  }
});
