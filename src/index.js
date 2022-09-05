// write your code here
// write your code here

let fetchRamen = async () => {
    let request = await fetch("http://localhost:3000/ramens");
    let response = await request.json();
    console.log(response);
    renderRamen(response);
  };
  
  fetchRamen();
  
  const createButton = document.querySelector("submit");
  const nameInput = document.querySelector(".new-name");
  const restInput = document.querySelector(".new-restaurant");
  const imgInput = document.querySelector(".new-image");
  const ratingInput = document.querySelector(".new-rating");
  const newComment = document.querySelector(".new-comment");
  const imgContainer = document.querySelector("#ramen-menu");
  let form = document.querySelector("form");
  
  let ramenFrame = document.querySelector(".ramen-details");
  
  let importedName = document.querySelector("#name");
  
  let renderRamen = (response) => {
    const container = document.querySelector("#ramen-detail");
    const imgContainer = document.querySelector("#ramen-menu");
    response.forEach((data) => {
      const h2 = document.createElement("h2");
      h2.innerText = data.name;
      const img = document.createElement("img");
      img.src = data.image;
      const restaurant = document.createElement("h3");
      restaurant.textContent = data.restaurant;
      container.append(h2, restaurant);
      imgContainer.append(img);
      imgContainer.addEventListener("hover", (event) => {
        ramenFrame.img = data.image;
        ramenFrame.h2 = h2;
      });
    });
  };
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const container = document.querySelector("#ramen-detail");
    ramenFrame = document.createElement("h2");
    ramenFrame.innerText = nameInput.value;
    img = document.createElement("img");
    img.src = imgInput.value;
    restaurantName = document.createElement("h3");
    restaurantName = restInput.value;
  
    container.append(ramenFrame, img, restaurantName);
  });