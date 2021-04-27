const url = new URL(location.href);
const folder = url.searchParams.get('c');
let movie = url.searchParams.get('p');
const precio = 250;

const movie_image = document.getElementById('movie_image');
const movie_name = document.getElementById('movie_name');
const precio_total = document.getElementById('precio_total');
const entradas = document.getElementById('entradas');
const btn_comprar = document.getElementById('btn_comprar');

if (!movie) {
    location.href = './home.html'
}

movie_image.setAttribute('src', `../assets/cartelera/${ folder }/${ movie }.jpg`);
movie_image.setAttribute('alt', movie);

movie = movie.replace( /-/g, ' ' );

movie_name.textContent = movie;




entradas.addEventListener('change', ()=>{
    precio_total.textContent = `$${precio * Number(entradas.value)}`;
})

btn_comprar.addEventListener('click', () => {
    btn_comprar.disabled = true;
    setTimeout(() => {
        location.href = './home.html'
    }, 3000);

    document.getElementById('redirect').style.bottom = '0';
})






