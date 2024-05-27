const headerSection = document.querySelector(".header-section");
const carouselSection = document.querySelector(".carousel-section");
const blogPostSection = document.querySelector(".blog-post-overview");
const readMoreBtn = document.querySelectorAll(".read-more-btn");
const carouselContainer = document.getElementById("carousel-container");
const post = document.querySelector(".post");
const prevBtn = document.getElementById("carousel-arrow-prev");
const nextBtn = document.getElementById("carousel-arrow-next");

function shortenText(text) {
  const words = text.split(" ");
  const wordsShort = words.slice(0, 20).join(" ") + "...";
  return wordsShort;
}

function paginate(items, itemsPerPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    const start = i * itemsPerPage;
    const end = start + itemsPerPage;
    pages.push(items.slice(start, end));
  }

  return pages;
}

function getPosts() {
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
      .then((response) => response.json())
      .then((data) => {
        showHeader(data);
        carousel(data);
        const paginatedPosts = paginate(data.data, 12);
        showPosts(paginatedPosts[0]);
        renderPagination(paginatedPosts);
      });
  } catch (error) {
    console.log(error);
  }
}

function showHeader(postData) {
  headerSection.innerHTML += `
  <a class="post-link-card" href="post/index.html?id=${postData.data[0].id}">
    <section class="headerPost">
    <img src="${postData.data[0].media.url}"
    alt="${postData.data[0].media.alt}">
    <h2>${postData.data[0].title}</h2>
    <p>${shortenText(postData.data[0].body)}</p>
    </section>
    </a>
      `;
}

function carousel(postData) {
  carouselContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    carouselContainer.innerHTML += `
    <a class="post-link-card post"
    href="post/index.html?id=${postData.data[i].id}">
    <img src="${postData.data[i].media.url}"
    alt="${postData.data[i].media.alt}">
    <h2>${postData.data[i].title}</h2>
    </a>
    `;

    let currentIndex = 0;
    const posts = document.querySelector(".post");
    const postWidth = posts.clientWidth;

    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex + 1;
      carouselContainer.scrollLeft += postWidth;

      if (currentIndex === 3) {
        carouselContainer.scrollLeft -= postWidth * 2;
        currentIndex = 0;
      }
    });

    prevBtn.addEventListener("click", () => {
      carouselContainer.scrollLeft -= postWidth;

      if (currentIndex === 0) {
        carouselContainer.scrollLeft += postWidth * 2;
        currentIndex = 2;
      } else {
        currentIndex = currentIndex - 1;
      }
    });
  }
}

function showPosts(postData) {
  postData.forEach((post) => {
    blogPostSection.innerHTML += `
      <a class="post-link-card" href="post/index.html?id=${post.id}">
      <section class="blog-post">
      <img src="${post.media.url}" alt="">
      <h2>${post.title}</h2>
      <p>${shortenText(post.body)}</p>
      <button>Read more</button>
      </section>
      </a>
        `;
  });
}

//Code copied from https://mollify.noroff.dev/content/feu1/javascript-1/module-7/pagination?nav=programme

function renderPagination(paginatedPosts) {
  const pagination = document.querySelector(".navigation");
  pagination.innerHTML = "";

  paginatedPosts.forEach((page, index) => {
    const button = document.createElement("button");
    button.textContent = index + 1;
    button.addEventListener("click", () => {
      blogPostSection.innerHTML = "";
      showPosts(page);
    });
    pagination.append(button);
  });
}

getPosts();
