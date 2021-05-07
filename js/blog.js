const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts/";
const postContainer = document.querySelector(".blog-grid");
const loadMore = document.querySelector("#more");

let length = 6;
let offset = 0;

async function getPosts() {
  try {
    const response = await fetch(url + `?per_page=${length}&offset=${offset}&_embed`);
    const post = await response.json();
    console.log(getPosts);
    for (let i = 0; i < post.length; i++) {
      const img = post[i].content.rendered;
      const blogPost = post[i].id;
      const title = post[i].title.rendered;
      const postdate = post[i].date;
      postContainer.innerHTML += `
      <figure class="blog-post-card">
      <a href="post.html?id=${blogPost}">${img}</a> 
      <h3>${title}</h3>
   <div class="blog-card-text">
     <p class="blog-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
     <a href="post.html?id=${blogPost}" class="blog-link">See more</a> 
     <p class="blog-date">By Ine AW, Posted <time>${postdate}</time></p>
   </div>
      </figure> `;

      if (offset === 0) {
        loadMore.style.display = "block";
      } else {
        loadMore.style.display = "none";
      }
    }
  } catch (error) {
    console.log(error);
  }
}

loadMore.addEventListener("click", () => {
  offset += 6;
  getPosts(url);
});

getPosts(url);
