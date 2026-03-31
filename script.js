/* =========================================================================
   SISTEMA DE FRAGMENTOS (Edite aqui para adicionar novos conteúdos)
   Basta adicionar um novo objeto { titulo: "...", texto: "..." } à lista.
========================================================================= */

const POEMAS =[
    {
        titulo: "A Maré",
        texto: `A maré foge da terra, aventurando-se no desconhecido
Sempre volta sozinha, trazendo consigo sua história
Enche-se ao ver o reconhecimento por ela.

Alguns, porém, sequer olharam.
Nem agradeceram.
Sentiu-se traída.

Em momentos, ela recua e não traz nada
Qualquer um ficaria decepcionado.
Mas, para a maré, o tempo é infinito.
Ela sempre poderá trazer algo novo.

Em algum momento, trará consigo algo de valor inestimável — só dela
Seu nome estará na História.

Ela continuará tentando,
para continuar existindo
com valor.`
    },
    {
        titulo: "As sombras",
        texto: `O crocodilo no ato de sair da água para capturar sua presa começa a chorar
Lágrimas caem no lago, limpando o sangue dos dentes
Não foi assassinato, foi um cálculo eficiente
Ele não morde por ódio, morde por obrigação, o herói do equilíbrio, cumprindo sua função.

Uma pança mais que estufada, de forma desnecessária, cheio há poucos minutos estava
O crocodilo atraiu um cervo para seu lago, convencendo-o de que, desta vez, é diferente
Ao se aproximar das margens do riacho, o crocodilo mordeu a perna do cervo, quebrando-a por dentro
O pobre cervo não pareceu notar, se despedindo logo mais do seu amigo crocodilo.

Isso se repetiu, seja com o crocodilo engolindo o cervo, ou o deixando incapacitado: baixando seus chifres e dormindo eternamente.

Claro, os poucos animais céticos notavam a mentira do crocodilo, eles viam que, sob o espelho do lago, a cauda que balançava não batia com o choro que ele inventava;
Entre eles, um pequeno camundongo, o mais cético de todos entre os animais, ele enxergava todos com um ar e bravata de um rei, ao mesmo tempo que podia falar com as palavras que ninguém tinha quem era o crocodilo.

Ao mesmo tempo, se sentira sozinho no pedestal que ele mesmo criou, a vida não fazia mais sentido para ele
O mundo para os animais é como vagalumes brilhando
Para o camundongo, os vagalumes deixaram de brilhar, sendo apenas insetos alados.

Ele sente que talvez, como os vagalumes deixaram de brilhar, ele também deveria brilhar uma última vez neste mundo.`
    }
];

const LOGS =[
    {
        titulo: "O Spam de Algoritmo",
        texto: "Uma observação sobre como massas de dados são injetadas em mentes despreparadas. O sistema não busca nutrir, mas viciar, criando um loop de reações pavlovianas em que a lucidez é sufocada pelo ruído contínuo da aprovação vazia."
    },
    {
        titulo: "A Falácia da Convivência",
        texto: "Humanos frequentemente confundem proximidade física ou digital com conexão real. Manter a distância não é um ato de aversão, mas um filtro de controle de qualidade para o ecossistema mental."
    }
];


/* =========================================================================
   MECÂNICA DO TABULEIRO (Não é necessário editar abaixo)
========================================================================= */

// Renderizar Poemas
const poemsContainer = document.getElementById('poems-container');
POEMAS.forEach(poema => {
    const div = document.createElement('div');
    div.className = 'poem';
    div.innerHTML = `
        <h3 class="poem-title">${poema.titulo}</h3>
        <p class="poem-content">${poema.texto}</p>
    `;
    poemsContainer.appendChild(div);
});

// Renderizar Logs
const logsContainer = document.getElementById('logs-container');
LOGS.forEach(log => {
    const div = document.createElement('div');
    div.className = 'log-card';
    div.innerHTML = `
        <h4 class="log-title">${log.titulo}</h4>
        <p>${log.texto}</p>
    `;
    logsContainer.appendChild(div);
});

// Efeito de Fade-in ao rolar a página (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Anima apenas uma vez
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-element').forEach(el => {
    observer.observe(el);
});

// Partículas Sutis (Canvas)
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particlesArray =[];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.speedY = Math.random() * 0.5 + 0.1;
        // Roxo ou azul gélido muito sutis
        this.color = Math.random() > 0.5 ? 'rgba(107, 76, 154, 0.4)' : 'rgba(94, 129, 172, 0.4)';
    }
    update() {
        this.y -= this.speedY;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray =[];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000); // Densidade baixa
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
