const blogPost = document.querySelector(".post");

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const postId = searchParameters.get("id");
console.log(postId);

function getPosts() {
  try {
    fetch(`https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        showPosts(data);
      });
  } catch (error) {
    console.log("an error has happened");
  }
}

function showPosts(postData) {
  blogPost.innerHTML += `
      <img src="${postData.data.media}" alt="image">
      <h1>${postData.data.title}</h1>
      <p>${postData.data.body}</p>
        `;
}

getPosts();

// const title = post.title;
// document.title = `${title} || HotView Labs`;
