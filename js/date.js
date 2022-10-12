var date = (new Date().getFullYear());
document.getElementById("year").innerHTML = date;


var currentdate = new Date().toLocaleDateString('en-GB', {weekday:"long", year:"numeric", month:"long", day:"numeric"});
document.getElementById("currentdate").innerHTML = currentdate;


document.write("Last Modified: " + document.lastModified);