const headerSection = document.querySelector(".header-section");
const carouselSection = document.querySelector(".carousel-section");
const blogPostSection = document.querySelector(".blog-post-overview");

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
    <section class="headerPost">
    <img src="${postData.data[0].media}" alt="image linked to post">
    <h2>${postData.data[0].title}</h2>
    <p>${postData.data[0].body}</p>
    <button>Read more</button>
    </section>
      `;
}

function carousel(postData) {
  carouselSection.innerHTML += `
    <section class="carouselPost">
    <img src="${postData.data[0].media}" alt="image linked to post">
    <h2>${postData.data[0].title}</h2>
    <p>${postData.data[0].body}</p>
    <button>Read more</button>
    </section>

    <section class="carouselPost">
    <img src="${postData.data[1].media}" alt="image linked to post">
    <h2>${postData.data[1].title}</h2>
    <p>${postData.data[1].body}</p>
    <button>Read more</button>
    </section>

    <section class="carouselPost">
    <img src="${postData.data[2].media}" alt="image linked to post">
    <h2>${postData.data[2].title}</h2>
    <p>${postData.data[2].body}</p>
    <button>Read more</button>
    </section>
      `;
}

function showPosts(postData) {
  for (let i = 0; i < postData.data.length; i++) {
    blogPostSection.innerHTML += `
    <section class="blog-post">
    <img src="${postData.data[i].media}" alt="">
    <h2>${postData.data[i].title}</h2>
    <p>${postData.data[i].body}</p>
    <button>Read more</button>
    </section>
      `;
  }
}

getPosts();
