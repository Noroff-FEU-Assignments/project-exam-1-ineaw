const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts/";
const postContainer = document.querySelector(".blog-grid");
const load = document.querySelector("#more");

async function getPosts() {
  try {
    const response = await fetch(url + `?per_page=12` + `&_embed`);
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
    const post = result[i]._embedded["wp:featuredmedia"]["0"].source_url;
    const postcontent = result[i].title.rendered;

    console.log(post);
    const blogPost = result[i].id;
    const postDate = new Date(result[i].date).toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "2-digit",
    });
    postContainer.innerHTML += `
       <figure class="blog-post-card">
   <a href="post.html?id=${blogPost}"> <img src="${post}"/></a>
   <div class="blog-date">By Ine AW, Posted <time>${postDate}</time></div>
<h2>${postcontent}</h2>
      <a href="post.html?id=${blogPost}" class="blog-link">Read more</a>
       </figure> `;
  }
}

load.addEventListener("click", () => {
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
          year: "2-digit",
        });

        postContainer.innerHTML += `
        <figure class="blog-post-card">
    <a href="post.html?id=${blogPost}"> <img src="${post}"/></a>
    <div class="blog-date">By Ine AW, Posted <time>${postDate}</time></div>
    <h2>${postcontent}</h2>

       <a href="post.html?id=${blogPost}" class="blog-link">Read more</a>
        </figure> `;
        load.style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  }
  getPosts(url);
});
