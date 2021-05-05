const postContainer = document.querySelector(".post-container");

const postImage = document.querySelector(".post-image");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");
console.log(id);

const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts/" + id + "?_embed";

async function getPosts() {
  try {
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);
    postImage.innerHTML = `<div class="post-image">
    ${post.content.rendered}`;
  } catch (error) {
    console.log(error);
  }
}

getPosts();
