let key = "be9e7f74d1msh79cbc6a843f61cep1e5f3ajsn149566766ca4";
const cards = document.getElementById("cards");

function getRestaurants() {

  let userinput = document.getElementById("userinput").value;

  fetch(
    `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${userinput}/0`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => showRestaurants(response))
    // .then(response => console.log(response))
    .catch((err) => console.error(err));
}

function showRestaurants(response) {

  response.restaurants.forEach((restaurant) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p1");
    let p2 = document.createElement("p2");
    let p3 = document.createElement("p3");
    let p4 = document.createElement("p4");

    h2.innerHTML = `${restaurant.restaurantName}`;
    p1.innerHTML = `<strong>Business Hours: </strong>${restaurant.hoursInterval}`;
    p2.innerHTML = `<strong>Phone Number: </strong>${restaurant.phone}`;
    p3.innerHTML = `<strong>Address: </strong>${restaurant.address}`;
    p4.innerHTML = `<strong>Website: </strong>${restaurant.website}`;

    card.append(h2);
    card.append(p1);
    card.append(p2);
    card.append(p3);
    card.append(p4);

    cards.appendChild(card);
  });
}
