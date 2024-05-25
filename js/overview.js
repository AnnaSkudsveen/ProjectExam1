const newPostBtn = document.querySelector(".new-post-btn");
const allPosts = document.querySelector(".all-posts");

newPostBtn.addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "/post/make.html";
});

function getPosts() {
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
      .then((response) => response.json())
      .then((data) => {
        showPosts(data);
      });
  } catch (error) {
    console.log("an error has happened");
  }
}

function shortenText(text) {
  const words = text.split(" ");
  const wordsShort = words.slice(0, 20).join(" ") + "...";
  return wordsShort;
}

function showPosts(postData) {
  console.log(postData);
  for (let i = 0; i < postData.data.length; i++) {
    allPosts.innerHTML += `
    <a class="post-link-card" href="/post/edit.html?id=${postData.data[i].id}">
    <section class="blog-post">
    <div class="img-header">
    <img src="${postData.data[i].media.url}" alt="">
    <h2>${postData.data[i].title}</h2>
    </div>
    <div class="post-card-btns">
    <button class="editBtn">Edit</button>
    <button class="editBtn">Delete</button>
    </div>
    </section>
    </a>
      `;
  }
}

getPosts();
