//retrieve game price
const getGamePrice = (row) => {
    const aElement = row.children[row.children.length - 2].querySelector("a");
    return aElement ? parseFloat(aElement.textContent.trim().slice(0, -1)) : NaN;
}

//get all the game rows, and sort them
const sortLowestPrices = () => {
	const gamesTable = document.querySelector('table.akswl-list');
	const gamesBody = gamesTable && gamesTable.querySelector('tbody');
	const gamesRows = gamesBody && Array.from(gamesBody.querySelectorAll('tr'));
	//no valid AKS page, exit
	if (!gamesTable || !gamesBody || !gamesRows) {
		alert('No AKS list detected!');
		return;
	}

	//sort all the found game rows
    gamesRows.sort((a, b) => {
		const priceA = getGamePrice(a);
        const priceB = getGamePrice(b);
		if ((isNaN(priceA) && isNaN(priceB)) || isNaN(priceA))
			return 1;
		if (isNaN(priceB))
			return -1;
        return priceA - priceB;
    });

	//clear game rows content and put the sorted games
    gamesBody.innerHTML = '';
    gamesRows.forEach(gameRow => gamesBody.appendChild(gameRow));
}

//run the sort function
sortLowestPrices();