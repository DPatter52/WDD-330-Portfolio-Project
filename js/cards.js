// Variable for the User's Zip Code//

user_zip = "84128"

// API URL, API-KEY, & Fetch//
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe226f124cmshd8ec7c39c68353ap1855c0jsna94353498904',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}};

fetch(`https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${user_zip}/0`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.then(function (jsonObject) {
		const restaurants = ['restaurants'];
		const cards = document.querySelector('.cards');

		restaurants.array.forEach(element => {
			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let p1 = document.createElement('p');
			let p2 =  document.createElement('p');
			let p3 = document.createElement('p');
			let p4 = document.createElement('p');

			h2.textContent = `${restaurants.restaurantName}`;
			p1.textContent = `${restaurants.hoursInterval}`;
			p2.textContent = `${restaurants.address}`;
			p3.textContent = `${restaurants.phone}`;
			p4.textContent = `${restaurants.website}`;
			
			card.append(h2);
			card.append(p1);
			card.append(p2);
			card.append(p3);
			card.append(p4);
			cards.append(card);
		});

});