//DOM -> Document Object Model -> target html elements using javascript

tagName;
className;
id;

// => document.*

document.getElementsByTagName("h1");

document.getElementsByTagName("h1")[0];

document.getElementsByTagName("h1")[0].innerText = "Good Day 🥳";

document.getElementsByTagName("h1")[0].style.color = "red";

document.getElementsByTagName("h1")[0].style.color = "purple";

document.getElementsByTagName("h1")[0].style.fontSize = "100px";

document.getElementsByTagName("h1")[0].style.backgroundColor = "lightgreen";

document.getElementsByClassName("intro");
HTMLCollection[p.intro];

document.getElementById("mainLeaderboard");
