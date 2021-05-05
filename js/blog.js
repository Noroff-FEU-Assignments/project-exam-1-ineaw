const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts?_embed";

const productContainer = document.querySelector(".blog-grid");

async function getPosts() {
  try {
    const response = await fetch(url);
    const getPosts = await response.json();
    console.log(getPosts);
    for (let i = 0; i < getPosts.length; i++) {
      const img = getPosts[i].content.rendered;
      const blogPost = getPosts[i].id;
      const title = getPosts[i].title.rendered;
      const postdate = getPosts[i].date;

      productContainer.innerHTML += `
      <figure class="blog-post-card">
  <img class="image"> ${img}</img>
   <h3> ${title} </h3>
   <div class="blog-card-text">
     <p class="blog-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
     <a href="post.html?id=${blogPost}" class="blog-link">See more</a> 
   </div>
   <p class="blog-date">By Ine AW, Posted <time>${postdate}</time></p>
      </figure> `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();
