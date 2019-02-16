var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  //Access JSON data here
  var movieData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    movieData.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }
}

request.send();

const app = document.getElementById('root');
