async function fetchPostAndUsers() {
    let postResponce = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let post = await postResponce.json();
    console.log("Post", post);

    let userResponces = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    let user = await userResponces.json();
    console.log("Users", user);

}
fetchPostAndUsers();