const UrlParams = new URLSearchParams(window.location.search);
const albumId = UrlParams.get("albumId");
const container = document.getElementById("container");

axios
  .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  .then((result) => {
    console.log(result.data);
    result.data.map((photos) => {
      container.innerHTML += `
        <img width="250px" src="${photos.url}" alt="">
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });
