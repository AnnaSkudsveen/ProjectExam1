const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const imageInput = document.getElementById("uploadImg");
const imageText = document.getElementById("imageText");
const tagInput = document.getElementById("tags");

const accessToken = sessionStorage.getItem("accesstoken");

//Code taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-advanced/url-parameters?nav=undefined
//Get parameter from URL
const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const postId = searchParameters.get("id");

function getRequest() {
  fetch(`https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      titleInput.value = `${data.data.title}`;
      textInput.value = `${data.data.body}`;
      tagInput.value = `${data.data.tags}`;
      imageInput.value = `${data.data.media.url}`;
      imageText.value = `${data.data.media.alt}`;
    });
}
getRequest();

// putRequest(postId);

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
      media: {
        url: `${imageInput.value}`,
        alt: `${imageText.value}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = "../account/overview.html";
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
  }).then((response) => {
    response.json();
    window.location.href = "../account/overview.html";
  });
}

editBtn.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    if (
      titleInput.value === "" ||
      textInput.value === "" ||
      imageInput.value === "" ||
      imageText.value === ""
    ) {
      alert("Do not leave the form empty");
    } else {
      putRequest(postId);
    }
  } catch (error) {
    console.log("an error has happened, try logging in" + error);
  }
});

deleteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    deleteRequest(postId);
  } catch (error) {
    console.log("an error has happened, try logging in");
  }
});
