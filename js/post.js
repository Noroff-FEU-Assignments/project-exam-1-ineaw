const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts/";

const postContainer = document.querySelector(".post-container");

const postImage = document.querySelector(".post-image");
const modalImage = document.querySelector(".modal-dialog");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");
console.log(id);

async function getPosts() {
  try {
    const response = await fetch(url + id + "?_embed");
    const post = await response.json();
    console.log(post);
    postImage.innerHTML = `
    ${post.content.rendered}
    <figcaption class="blog-date">By Ine AW. Posted <time datetime="2021-04-21">${post.date}</time></figcaption>
`;
    modalImage.innerHTML = `<figure class="post-image-modal">          
${post.content.rendered} </figure>
`;
  } catch (error) {
    console.log(error);
  }
}

getPosts();
