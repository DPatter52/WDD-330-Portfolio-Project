// Variable for the User's Zip Code//


const user_zip = 


// API URL, API-KEY, & Fetch//
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '#',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};

fetch(`https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${user_zip}/0`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// CONVERT TO JSON//


//Do a for/then loop to create html cards//