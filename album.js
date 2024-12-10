const UrlParams = new URLSearchParams(window.location.search);
const userId = UrlParams.get("userId");
const container = document.getElementById("container");

axios
  .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
  .then((res) => {
    res.data.map((albumInfo) => {
      container.innerHTML += `
        <div onclick = "goToPhotos(${albumInfo.id})" class="card" style="width: 18rem">
            <div class="card-body">
            <h5 class="card-title">${albumInfo.title}</h5>
            <p class="card-text"><strong>ID:</strong> ${albumInfo.id}</p>
            <p class="card-text"><strong>User ID:</strong> ${albumInfo.userId}</p>
            </div>
        </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

function goToPhotos(id) {
  window.location.href = "photos.html?albumId=" + id;
}
