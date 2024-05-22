const headerSection = document.querySelector(".header-section");
const carouselSection = document.querySelector(".carousel-section");
const blogPostSection = document.querySelector(".blog-post-overview");
const readMoreBtn = document.querySelectorAll(".read-more-btn");

function getPosts() {
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
      .then((response) => response.json())
      .then((data) => {
        showPosts(data);
        showHeader(data);
        carousel(data);
      });
  } catch (error) {
    console.log("an error has happened");
  }
}

function showHeader(postData) {
  console.log(postData.data[0]);
  headerSection.innerHTML += `
  <a class="post-link-card" href="post/index.html?id=${postData.data[0].id}">
    <section class="headerPost">
    <img src="${postData.data[0].media.url}" alt="${
    postData.data[i].media.alt
  }">
    <h2>${postData.data[0].title}</h2>
    <p>${shortenText(postData.data[i].body)}</p>
    <button class="read-more-btn">Read more</button>
    </section>
    </a>
      `;
}

function carousel(postData) {
  for (let i = 0; i < 3; i++) {
    carouselSection.innerHTML += `
    <a class="post-link-card" href="post/index.html?id=${postData.data[i].id}">
    <section class="carouselPost">
    <img src="${postData.data[i].media.url}" alt="${
      postData.data[i].media.alt
    }">
    <h2>${postData.data[i].title}</h2>
    <p>${shortenText(postData.data[i].body)}</p>
    <button>Read more</button>
    </section>
    </a>
    `;

    // readMoreBtn.addEventListener("click", () => {
    //   const postId = postData.data[i].id;
    //   console.log(postId);
    //   window.location.replace(`/post/index.html/?id=${postId}`);
    // });
  }
}

function shortenText(text) {
  const words = text.split(" ");
  const wordsShort = words.slice(0, 20).join(" ") + "...";
  return wordsShort;
}

//Fix: so theres pagination that shows 12 and 12

function showPosts(postData) {
  for (let i = 0; i < postData.data.length; i++) {
    blogPostSection.innerHTML += `
    <a class="post-link-card" href="post/index.html?id=${postData.data[i].id}">
    <section class="blog-post">
    <img src="${postData.data[i].media.url}" alt="">
    <h2>${postData.data[i].title}</h2>
    <p>${shortenText(postData.data[i].body)}</p>
    <button>Read more</button>
    </section>
    </a>
      `;
  }
}

getPosts();
