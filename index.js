async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
    return posts; // Return posts so tests can await it if needed
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  let postList = document.getElementById("post-list");
  if (!postList) {
    postList = document.createElement("ul");
    postList.id = "post-list";
    document.body.appendChild(postList);
  }

  // Clear existing items to prevent duplicates during testing
  postList.innerHTML = "";

  posts.forEach(post => {
    const listItem = document.createElement("li");

    const titleHeader = document.createElement("h1");
    titleHeader.textContent = post.title;

    const bodyParagraph = document.createElement("p");
    bodyParagraph.textContent = post.body;

    listItem.appendChild(titleHeader);
    listItem.appendChild(bodyParagraph);

    postList.appendChild(listItem);
  });
}

fetchPosts();