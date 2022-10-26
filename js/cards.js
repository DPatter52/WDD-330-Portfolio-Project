let key = "3a94406d73mshb1d2ba951df67fbp13b018jsn2a0cc1fd637f";
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
    let card = document.getElementById("card");
    // if (card) {
    //   card.innerHTML = ""
    // }
    let h2 = document.getElementById("h2");
  
    let p1 = document.getElementById("p1");

    let p2 = document.getElementById("p2");
  
    let p3 = document.getElementById("p3");
 
    let p4 = document.getElementById("p4");
 

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
