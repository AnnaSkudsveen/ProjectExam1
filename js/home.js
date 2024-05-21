const headerSection = document.querySelector(".header-section");
const carouselSection = document.querySelector(".carousel");
const carouselContainer = document.querySelector(".carousel-container");
const blogPostSection = document.querySelector(".blog-post-overview");
const readMoreBtn = document.querySelectorAll(".read-more-btn");

let slides = [];

function getPosts() {
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
      .then((response) => response.json())
      .then((data) => {
        showPosts(data);
        showHeader(data);
        carousel(data);
        slides.push(data);
      });
  } catch (error) {
    console.log("an error has happened");
  }
}

// function showHeader(postData) {
//   console.log(postData.data[0]);
//   headerSection.innerHTML += `
//   <a class="post-link-card" href="post/index.html?id=${postData.data[0].id}">
//     <section class="headerPost">
//     <img src="${postData.data[0].media}" alt="image linked to post">
//     <h2>${postData.data[0].title}</h2>
//     <p>${postData.data[0].body}</p>
//     <button class="read-more-btn">Read more</button>
//     </section>
//     </a>
//       `;
// }

// function carousel(postData) {
//   for (let i = 0; i < 3; i++) {
//     carouselSection.innerHTML += `
//     <a class="post-link-card" href="post/index.html?id=${postData.data[i].id}">
//     <section class="carouselPost">
//     <img src="${postData.data[i].media}" alt="image linked to post">
//     <h2>${postData.data[i].title}</h2>
//     <p>${postData.data[i].body}</p>
//     <button>Read more</button>
//     </section>
//     </a>
//     `;
//   }
// }

//Fix: so theres pagination that shows 12 and 12

function showPosts(postData) {
  for (let i = 0; i < postData.data.length; i++) {
    blogPostSection.innerHTML += `
    <a class="post-link-card" href="post/index.html?id=${postData.data[i].id}">
    <section class="blog-post">
    <img src="${postData.data[i].media}" alt="">
    <h2>${postData.data[i].title}</h2>
    <p>${postData.data[i].body}</p>
    <button>Read more</button>
    </section>
    </a>
      `;
  }
}

getPosts();

// function carousel() {}
