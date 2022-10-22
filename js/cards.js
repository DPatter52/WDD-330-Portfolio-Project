
let key = "3a94406d73mshb1d2ba951df67fbp13b018jsn2a0cc1fd637f"
const cards = document.querySelector('.cards');

function getRestaurants() {
	let userinput = document.getElementById('userinput').value;

	fetch(`https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${userinput}/0`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
		}
	})
		.then(response => response.json())
		.then(response => console.log(response))
		.then(response => showRestaurants(response))
		.catch(err => console.error(err));
};

function showRestaurants(response) {
	response.restaurants.forEach(restaurant => {
		let card = document.createElement('section');
		let h2 = document.createElement('h2');
		let p1 = document.createElement('p1');
		let p2 = document.createElement('p2');
		let p3 = document.createElement('p3');
		let p4 = document.createElement('p4');

		h2.innerHTML = `${restaurant.restaurantName}`;
		p1.innerHTML = `${restaurant.hoursInterval}`;
		p2.innerHTML = `${restaurant.phone}`;
		p3.innerHTML = `${restaurant.address}`;
		p4.innerHTML = `${restaurant.website}`;

		card.append(h2);
		card.append(p1);
		card.append(p2);
		card.append(p3);
		card.append(p4);

		cards.appendChild(card);	
	});
};
