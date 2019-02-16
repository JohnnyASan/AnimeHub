var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  //Access JSON data here
  var movieData = JSON.parse(this.response);

  movieData.forEach(movie => {
    console.log(movie.title);
  });
}

request.send();
