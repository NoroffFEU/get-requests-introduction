const url = "https://api.noroff.dev/api/v1/cat-facts";

const resultsContainer = document.querySelector(".results");

async function getCats() {
    // fetch

    const response = await fetch(url);

    const facts = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].text);

        if (i === 10) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    }
}

getCats();
