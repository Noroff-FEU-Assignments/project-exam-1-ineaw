const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts?per_page=8";

const carouselContainer = document.querySelector(".carousel");
const recentPosts = document.querySelector(".pop-post-wrap");

async function getPosts() {
  try {
    const response = await fetch(url);
    const getPosts = await response.json();
    console.log(getPosts);
    for (let i = 0; i < getPosts.length; i++) {
      const img = getPosts[i].content.rendered;
      const post = getPosts[i].id;
      const postDate = getPosts[i].date;
      const title = getPosts[i].title.rendered;
      carouselContainer.innerHTML += `
      <figure class="carousel-card">
      <a href="post.html?id=${post}"> ${img} 
   <h3 class="carousel-title"> ${title} </h3>
   </a>
   <div class="blog-card-text">
     <p class="blog-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
     <a href="post.html?id=${post}" class="blog-link">See more</a> 
   </div>
   <p class="blog-date">By Ine AW, Posted <time>${postDate}</time></p>
      </figure> `;
      recentPosts.innerHTML += `<figure class="pop-post-card ">
      ${img} 
      <figcaption></figcaption>
    </figure>
    `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();
