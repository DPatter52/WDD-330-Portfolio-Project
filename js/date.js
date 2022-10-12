// Current Date//
const currentdate = new Date().toLocaleDateString('en-GB', {weekday:"long", year:"numeric", month:"long", day:"numeric"});

// let now = new Date();
// let fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
document.getElementById("currentdate").textContent = currentdate;

//Date last Modified//
// var lastmodified = document.write("Last Modified: " + document.lastModified);
const date = (new Date().getFullYear());
document.getElementById("year").innerHTML = date;

let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastmodified").innerHTML = dateTime;



