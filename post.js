const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");
const myDiv = document.getElementById("mydiv");

axios
  .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((res) => {
    res.data.map((postInfo) => {
      const shortTitle =
        postInfo.title.length > 15
          ? postInfo.title.slice(0, 15) + "..."
          : postInfo.title;
      myDiv.innerHTML += `
          <div class="container mt-5">
            <div class="card shadow-sm" style="max-width: 400px;">
                <div class="card-body">
                <h5 class="card-title text-primary">${shortTitle}</h5>
                <h6 class="card-subtitle mb-2 text-muted">UserId: ${postInfo.id}</h6>
                <p class="card-text">
                   
                </p>
                <a onclick="displayComments(${postInfo.id})" class="btn btn-primary btn-sm">Comment</a>
                </div>
            </div>
        </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });
const comment = document.getElementById("left");
function displayComments(id) {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((res) => {
      comment.innerHTML = "";
      res.data.map((comments) => {
        comment.innerHTML += `
            <div class="container mt-5">
                <div class="media mt-4">
                    <img
                    src="https://via.placeholder.com/50"
                    class="mr-3 rounded-circle"
                    alt="User Avatar"
                    />
                    <div class="media-body">
                    <h5 class="mt-0">User Name</h5>
                    ${comments.body}
                    </div>
                </div>
            </div>
           `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
displayComments();
