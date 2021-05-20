const url = "https://ineaw.no/the-green-side/wp-json/wp/v2/posts/";

const postContainer = document.querySelector(".blog-text");
const postImage = document.querySelector(".post-image");
const modalImage = document.querySelector(".post-modal");
const changeTitle = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getPosts() {
  try {
    const response = await fetch(url + id + "?_embed");
    const post = await response.json();
    const newDate = new Date(post.date).toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "2-digit",
    });

    const alt = post._embedded["wp:featuredmedia"]["0"].alt_text;
    const img = post._embedded["wp:featuredmedia"]["0"].source_url;

    changeTitle.innerHTML = `${post.title.rendered} | The Green Side Blog`;

    postImage.innerHTML = `
     <header class="blog-header">
     <h2>${post.title.rendered}</h2>   
     <div class="blog-date"> Posted <time datetime="2021-04-21">${newDate}</time> by Ine AW</div>
     </header>
    <figure><img src="${img}" alt="${alt}"/></figure>

`;
    postContainer.innerHTML = `  
    <article>${post.content.rendered}</article>
`;
    modalImage.innerHTML = `<figure class="post-image-modal">          
    <img src="${img}" alt="${alt}"/>
`;
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = message("An error occured when trying to load the post", error);
  }
}

getPosts();
