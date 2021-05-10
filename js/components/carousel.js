async function getRecentPosts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    createRecentPosts(result);
  } catch (error) {
    console.log(error);
  }
}

getRecentPosts();
