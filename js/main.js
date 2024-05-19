//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
  
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Title Case
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(queryString.length > 0){//data submitted
  let myOutput = `<div id="container">`;

  urlParams.forEach(function(value,key){

    // Check if the key is one of the elements that need to be changed to title case
    if (key === "First_Name" || key === "Last_Name" || key === "Address" || key === "City") {
      // Change the value to title case
      value = value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    key = key.split("_").join(" ");
    myOutput += `<p>${key}: ${value}</p>`;
  });
  myOutput += `<p><a href="index.html">CLEAR</a></p>`; 
  myOutput += `</div>`;
  document.querySelector("#output").innerHTML = myOutput;
}
