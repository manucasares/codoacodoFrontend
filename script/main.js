const url = new URL(location.href);
const folder = url.searchParams.get('c');
let movie = url.searchParams.get('p')


const movie_image = document.getElementById('movie_image');
const movie_name = document.getElementById('movie_name');


movie_image.setAttribute('src', `../assets/cartelera/${ folder }/${ movie }.jpg`);
movie_image.setAttribute('alt', movie);

console.log(movie);
movie = movie.replace( /-/g, ' ' );

movie_name.textContent = movie;





