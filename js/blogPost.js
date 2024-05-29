const blogPost = document.querySelector(".post");
const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const postId = searchParameters.get("id");

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
  getDate(postData);
  blogPost.innerHTML += `
      <img src="${postData.data.media.url}" alt="${postData.data.media.alt}">
      <p>Author: ${postData.data.author.name}</p>
      <p>Created: ${getDate(postData)}</p>
      <section class="blog-post-text">
      <h1>${postData.data.title}</h1>
      <p>${postData.data.body}</p>
      </section>
        `;
}

function getDate(postData) {
  const postDate = new Date(postData.data.created);
  const date = postDate.toLocaleDateString("nb-NO");
  return date;
}

getPosts();
