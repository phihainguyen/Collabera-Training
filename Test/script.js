const dropdownClick = document.getElementById("dropdownClick");

function dropdownMenu() {
  if (dropdownClick.className === "topnav") {
    dropdownClick.className += " responsive";
  } else {
    dropdownClick.className = "topnav";
  }
}
