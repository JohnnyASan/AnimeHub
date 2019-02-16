const app = document.getElementById('root');
console.log(app);

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  //Access JSON data here
  var movieData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    movieData.forEach(movie => {
      
      const block = document.createElement('div');
      block.setAttribute('class', 'block');
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      container.appendChild(block);
      block.appendChild(h1);
      block.appendChild(p);
    });
  } else {
    console.log('error');
  }
}

request.send();
