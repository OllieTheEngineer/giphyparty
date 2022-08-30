const gifyDivEl = document.getElementById('giphies');
const searchBtn = document.getElementById('Search');
// const searchText = document.getElementById('search_input');

const searchAPI = () => {
  let searchWord = document.getElementById('search_text').value; // Read the textbox from your form

  var config = {
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
}
searchBtn.addEventListener("click", searchAPI());
// searchAPI(); // Take your onClick event listener search button and call searchAPI(). So remove this once that's done.


// function(evt){
//   evt.preventDefault();
//   
