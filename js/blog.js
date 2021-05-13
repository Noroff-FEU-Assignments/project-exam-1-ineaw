const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts/";
const postContainer = document.querySelector(".blog-grid");
const morePosts = document.querySelector("#more");
const loader = document.querySelector(".loader");

async function getPosts() {
  try {
    const response = await fetch(url + `?per_page=100` + `&_embed`);
    const result = await response.json();
    console.log(result);
    createHTML(result);
  } catch (error) {
    console.log(error);
  }
}
getPosts();

function createHTML(result) {
  for (let i = 0; i < 8; i++) {
    {
      const img = result[i]._embedded["wp:featuredmedia"]["0"].source_url;
      const post = result[i].id;
      const postContent = result[i].excerpt.rendered;
      const title = result[i].title.rendered;
      const postDate = new Date(result[i].date).toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
      });

      postContainer.innerHTML += `
       <figure class="blog-post-card">
       <a href="post.html?id=${post}"> <img src="${img}"/>   </a>
       <p class="blog-date"<time>${postDate}</time>, By <a href="./about.html">Ine AW</a></p>
    <h3 class="carousel-title">${title}</h3>
   <p> ${postContent} </p>
    <a href="post.html?id=${post}" class="blog-link">Read more</a>
       </figure> `;
      loader.style.display = "none";
    }
  }
}

morePosts.addEventListener("click", () => {
  async function getPosts(url) {
    try {
      const response = await fetch(url + `?per_page=12` + `&_embed`);
      const results = await response.json();
      console.log(results);
      for (let i = 8; i < results.length; i++) {
        const post = results[i]._embedded["wp:featuredmedia"]["0"].source_url;
        const postcontent = results[i].title.rendered;
        console.log(post);
        const blogPost = results[i].id;
        const postDate = new Date(results[i].date).toLocaleString("en-US", {
          month: "long",
          day: "2-digit",
        });
        postContainer.innerHTML += `
        <figure class="blog-post-card">
    <a href="post.html?id=${blogPost}"> <img src="${post}"/></a>
    <p class="blog-date"<time>${postDate}</time>, By <a href="./about.html">Ine AW</a></p>
    <h3>${postcontent}</h3>
       <a href="post.html?id=${blogPost}" class="blog-link">Read more</a>
        </figure> `;
        morePosts.style.display = "none";
        loader.style.display = "none";
      }
    } catch (error) {
      console.log(error);
      postContainer.innerHTML = message("An error occured when trying to load", error);
    }
  }
  getPosts(url);
});
