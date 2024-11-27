const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () =>{
    const searchTerm = searchInput.Value.trim();
    if(searchTerm !== ''){
        window.location.href= 'pg2.html?search=${searchTerm}';
    }
})