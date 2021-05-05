const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts?_embed";

const carouselContainer = document.querySelector(".post-carousel");

async function getPosts() {
  try {
    const response = await fetch(url);
    const getPosts = await response.json();
    console.log(getPosts);
    for (let i = 0; i < getPosts.length; i++) {
      const img = getPosts[i].content.rendered;
      const post = getPosts[i].id;

      carouselContainer.innerHTML += `
      <figure class="carousel-card">
   ${img}
   <div class="blog-card-text">
     <p class="blog-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
     <a href="post.html?id=${post}" class="blog-link">See more</a> 
   </div>
   <p class="blog-date">By Ine AW, Posted <time>${post.date}</time></p>
      </figure> `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();
