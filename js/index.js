let url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts";

const recentPosts = document.querySelector(".pop-post-wrap");
const aside = document.querySelector(".sideposts");
const carouselContainer = document.querySelector(".carousel");

async function getPosts() {
  try {
    const response = await fetch(url + `?per_page=8&_embed`);
    const posts = await response.json();
    recentPosts.innerHTML = "";
    carouselContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
      const img = posts[i]._embedded["wp:featuredmedia"]["0"].source_url;
      const post = posts[i].id;
      const postContent = posts[i].excerpt.rendered;
      const title = posts[i].title.rendered;
      const postDate = new Date(posts[i].date).toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
      });
      recentPosts.innerHTML += `
<figure class="carousel-card">
    <a href="post.html?id=${post}"> <img src="${img}"/> </a>
 <p class="blog-date">By Ine AW, Posted <time>${postDate}</time></p>
 <h3 class="carousel-title">${title}</h3>
<p>${postContent}</p>
 <a href="post.html?id=${post}" class="blog-link">Read more</a>
</figure`;

      carouselContainer.innerHTML += `
<li> <figure class="carousel-card">
      <a href="post.html?id=${post}"> <img src="${img}"/> </a>
   <p class="blog-date">By Ine AW, Posted <time>${postDate}</time></p>
   <a href="post.html?id=${post}" class="blog-link">Read more</a>
   </figure <li>`;
    }
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = message("An error occured when trying to load", error);
  }
}
getPosts();

// async function getCarouselPosts() {
//   try {
//     let response = await fetch(url + `?per_page=8` + `&_embed`);
//     let posts = await response.json();

//     carouselContainer.innerHTML = "";

//     for (let i = 0; i < posts.length; i++) {
//       const img = posts[i]._embedded["wp:featuredmedia"]["0"].source_url;
//       const post = posts[i].id;
//       const postContent = posts[i].excerpt.rendered;
//       const title = posts[i].title.rendered;
//       const postDate = new Date(posts[i].date).toLocaleString("en-US", {
//         month: "long",
//         day: "2-digit",
//       });
//       carouselContainer.innerHTML += `
//         <li> <figure class="carousel-card">
//               <a href="post.html?id=${post}"> <img src="${img}"/> </a>
//            <p class="blog-date">By Ine AW, Posted <time>${postDate}</time></p>
//            <a href="post.html?id=${post}" class="blog-link">Read more</a>
//            </figure <li>`;
//     }
//   } catch (error) {
//     console.log(error);
//     postContainer.innerHTML = message("An error occured when trying to load", error);
//   }
// }
// getCarouselPosts();
