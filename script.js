const dogApiUrl = "https://randomfox.ca/floof/";
const createImg = document.createElement("img");
async function loadImages() {
  try {
    const fetchApi = await fetch(dogApiUrl);
    const apiResponse = await fetchApi.json();
    createImg.src = apiResponse.image;
    createImg.style.margin = "30px";
    
    createImg.classList.add("img-fluid");
      document.querySelector(".containerImg").appendChild(createImg);
      console.log(data.url);
   
  } catch (err) {
    console.log("API Error", err);
  }
}

const heading = document.getElementsByTagName("h1");
heading[0].style.color ="yellow";
document.body.style.backgroundColor ="black";
document.getElementById("kit-btn").addEventListener("click", loadImages);

