const postContainer = document.querySelector(".post-container");

const postImage = document.querySelector(".post-image");
const modalImage = document.querySelector(".modal-dialog");

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
    postImage.innerHTML = `
    ${post.content.rendered}
`;
    // postContainer.innerHTML = ``;
    modalImage.innerHTML = `<figure class="post-image-modal">
${post.content.rendered} </figure>
`;
  } catch (error) {
    console.log(error);
  }
}

getPosts();
