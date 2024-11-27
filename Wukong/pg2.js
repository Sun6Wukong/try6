
const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get('search');

if (searchTerm) {
    console.log(`Search term: ${searchTerm}`);
    // Update the page content based on the search query
    document.body.innerHTML += `<h2>Search Results for: ${searchTerm}</h2>`;
}
