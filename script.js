let musicas = [
    {titulo: "How's It Supposed to Feel", artista: 'NEFFEX', 
    src: "musicas/How's It Supposed to Feel (Clean) - NEFFEX.mp3", 
    img: 'imagens/rock.jpg'},
    {titulo: 'Inspired', artista: 'NEFFEX', 
    src: "musicas/Inspired (Clean) - NEFFEX.mp3", 
    img: 'imagens/samba.jpg'},
    {titulo: 'No Turning Back', artista: 'NEFFEX', 
    src: "musicas/No Turning Back (Clean) - NEFFEX.mp3",
    img: 'imagens/mpb.jpg'},
];

let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let indexMusica = 0;

window.onload = duration;
renderizarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    };
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    renderizarMusica(indexMusica);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2) {
        indexMusica = 0;
    };
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    renderizarMusica(indexMusica);
    tocarMusica();
});


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>  {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
    })
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = (musica.currentTime / musica.duration)*100 + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    
        return campoMinutos + ':' + campoSegundos;
    }
}

function duration(){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}