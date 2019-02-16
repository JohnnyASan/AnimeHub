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
console.log(app);

const logo = document.createElement('img');
logo.src = 'img/StudioGhiblilogo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
