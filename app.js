const gifyDivEl = document.getElementById('giphies');
const searchBtn = document.getElementById('Search');
const removeBtn = document.getElementById('remove');
// const searchText = document.getElementById('search_input');

const searchAPI = (evt) => {
  evt.preventDefault();
  let searchWord = document.getElementById('search_text').value; // Read the textbox from your form

  let config = {
    method: 'get',
    url: `https://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`,
  };

  axios(config)
  .then(function (response) {

    const apiGiph = response.data.data[0].images.original.url;
    console.log(apiGiph);

    // 1 Create image element
    // 2 Update src
    // 3 Append image to gifyDivEl

    const imageEl = document.createElement('img');
    imageEl.src = apiGiph;
    gifyDivEl.appendChild(imageEl);
  })
  .catch(function (error) {
    console.log(error);
  });
  searchBtn.addEventListener("click", searchAPI);
}

// searchAPI(); // Take your onClick event listener search button and call searchAPI(). So remove this once that's done.

// Function to remove all gifs from Giph area
removeBtn.addEventListener("click", function(evt){
evt.gifyDivEl.empty();
})
// function(evt){
//   evt.preventDefault();
//   
