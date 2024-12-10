const container_card = document.getElementById("container_card");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.data.map((userInfo) => {
      container_card.innerHTML += `
        <div
            onclick="goToAlbum(${userInfo.id})"
            class="card"
            style="width: 18rem; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1)"
        >
            <img
            src="https://via.placeholder.com/150"
            class="card-img-top rounded-circle mx-auto mt-3"
            alt="User Photo"
            style="width: 100px; height: 100px; object-fit: cover"
            />
            <div class="card-body text-center">
            <h5 class="card-title">${userInfo.name}</h5>
            <h6 class="card-sub-title">${userInfo.email}</h6>
            <p class="card-text text-muted">Frontend Developer website: ${userInfo.website}</p>
            <p class="card-text">
                <small class="text-muted">Location: ${userInfo.address.street}</small>
            </p>
            <a href="#" class="btn btn-primary btn-sm">Follow</a>
            <a href="#" class="btn btn-outline-secondary btn-sm">Message</a>
            </div>
        </div>
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

function goToAlbum(id) {
  window.location.href = "album.html?userId=" + id;
}
