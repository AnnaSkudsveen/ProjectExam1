const headerSection = document.querySelector(".header-section");
const carouselSection = document.querySelector(".carousel-section");
const blogPostSection = document.querySelector(".blog-post-overview");
const readMoreBtn = document.querySelectorAll(".read-more-btn");

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
  // showPosts(pages);
}

function getPosts() {
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
      .then((response) => response.json())
      .then((data) => {
        showHeader(data);
        console.log(showHeader(data));
        carousel(data);
        console.log(carousel(data));
        const paginatedPosts = paginate(data, 12);
        for (const post in paginatedPosts[0]) {
          showPosts(post);
        }

        let counter = 1;
        for (const postArray of paginatedPosts) {
          const pageButton = document.createElement("button");
          pageButton.innerText = counter;
          counter++;
          pageButton.addEventListener("click", () => {
            blogPostSection.innerHTML = "  ";
            for (const book of postArray) {
              displayBook(book);
            }
          });
          pageButtons.appendChild(pageButton);
        }
      });
  } catch (error) {
    console.log("an error has happened");
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
    <img src="${postData.data[i].media.url}" 
    alt="${postData.data[i].media.alt}">
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

function showPosts(postData) {
  console.log(postData);
  for (let i = 0; i < postData.length; i++) {
    blogPostSection.innerHTML += `
    <a class="post-link-card" href="post/index.html?id=${postData[i].id}">
    <section class="blog-post">
    <img src="${postData[i].media.url}" alt="">
    <h2>${postData[i].title}</h2>
    <p>${shortenText(postData[i].body)}</p>
    <button>Read more</button>
    </section>
    </a>
      `;
  }
}
// function showPosts(postData) {
//   for (let i = 0; i < postData.data.length; i++) {
//     blogPostSection.innerHTML += `
//     <a class="post-link-card" href="post/index.html?id=${postData.data[i].id}">
//     <section class="blog-post">
//     <img src="${postData.data[i].media.url}" alt="">
//     <h2>${postData.data[i].title}</h2>
//     <p>${shortenText(postData.data[i].body)}</p>
//     <button>Read more</button>
//     </section>
//     </a>
//       `;
//   }
// }

//Fix: so theres pagination that shows 12 and 12

getPosts();
