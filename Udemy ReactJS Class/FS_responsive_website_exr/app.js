const dropdownMenu = () => {
	let dropdown = document.getElementById("dropdownClick");

	if(dropdown.className === "topnav"){
	// change topnav to topnav responsive
		dropdown.className += " responsive";
	} else {
		dropdown.className = "topnav";
	}
};