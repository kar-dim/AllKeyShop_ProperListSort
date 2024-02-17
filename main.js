function sortLowestPrices() {
	const gamesTable = document.querySelector('table.akswl-list');
	const gamesBody = gamesTable && gamesTable.querySelector('tbody');
	const gamesRows = gamesBody && Array.from(gamesBody.querySelectorAll('tr'));
	if (!gamesTable || !gamesBody || !gamesRows) {
		alert('No AKS list detected!');
		return;
	}

    gamesRows.sort((a, b) => {
		const priceA = parseFloat(a.querySelector('td.game-lowest-price a').textContent.trim().slice(0,-1));
		const priceB = parseFloat(b.querySelector('td.game-lowest-price a').textContent.trim().slice(0,-1));
		if ((isNaN(priceA) && isNaN(priceB)) || isNaN(priceA))
			return 1;
		if (isNaN(priceB))
			return -1;
        return priceA - priceB;
    });

    gamesBody.innerHTML = '';
    gamesRows.forEach(gameRow => gamesBody.appendChild(gameRow));
}

sortLowestPrices();