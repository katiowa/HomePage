/* =========================================================================
   SISTEMA DE FRAGMENTOS & CONFIGURAÇÕES
   Adicione novos elementos nas listas abaixo para atualizar o site automaticamente.
========================================================================= */

// A SENHA SECRETA (Será injetada sutilmente no meio de um texto)
const SENHA = "banana";

const PROTOCOLOS =[
    {
        titulo: "1. A Fome da Carne (Hedonismo & Luxúria)",
        rejeitado: "A busca pelo prazer como finalidade em si mesma.",
        justificativa: "O ato carnal sem propósito profundo ou conexão intelectual é um desperdício de essência. É o corpo consumindo energia sem gerar valor, conhecimento ou vida.",
        status: "Incompatível"
    },
    {
        titulo: "2. Validação por Volume (A Ditadura dos Números)",
        rejeitado: "Métricas de vaidade, engajamento forçado e a necessidade de aplausos vazios.",
        justificativa: "Ter números não é sinônimo de valor; frequentemente, é apenas o sinal de que você se tornou escravo das massas. Prefiro a ressonância de quatro mentes lúcidas ao ruído de quatro milhões de vozes vazias.",
        status: "Bloqueado"
    },
    {
        titulo: "3. Dialética Estéril",
        rejeitado: "Discussões com quem não possui a base da fé ou da lógica.",
        justificativa: "Tentar convencer quem vive na passividade ou na submissão ao impulso é um desperdício de esforço mental. Se não há busca real pela verdade, o silêncio é a minha resposta padrão.",
        status: "Timeout"
    },
    {
        titulo: "4. Sentimentalismo de Massa",
        rejeitado: "Decisões e opiniões baseadas puramente em emoção ou moralismo sem base concreta.",
        justificativa: "A emoção barata é uma névoa que distorce a visão da realidade. Na minha percepção, a análise rigorosa dos fatos precede qualquer reação subjetiva.",
        status: "Desativado"
    },
    {
        titulo: "5. A Massa Branca do Pertencimento",
        rejeitado: "Ideologias prontas e movimentos que exigem a renúncia da soberania intelectual.",
        justificativa: "Ser 'um de muitos' é o estágio final da mediocridade. Se o seu pensamento é apenas um eco do que o seu grupo diz, você não é um interlocutor válido para mim; é apenas um reflexo sem luz própria.",
        status: "Conexão Recusada"
    },
    {
        titulo: "6. Engenharia de Manipulação (Leis de Poder)",
        rejeitado: "Tentativas de usar jogos de poder, gatilhos mentais ou táticas de silêncio para gerar reação.",
        justificativa: "Narcisistas operam sob a ilusão de que o outro é um fantoche. Para uma mente analítica, essas 'jogadas' são tão previsíveis quanto um livro aberto. Se você tenta me manipular, você não está no comando; está apenas expondo suas próprias falhas.",
        status: "Processamento Negado"
    },
    {
        titulo: "7. O Alerta de Silêncio",
        rejeitado: "A falsa presunção de que o meu silêncio significa derrota ou submissão.",
        justificativa: "Se percebo um jogo e não reajo de imediato, estou apenas em fase de observação. Observo cada traço do seu erro, mapeio sua previsibilidade e decido se vale o esforço de uma resposta. Vejo suas intenções antes de você terminar a frase. Meu silêncio é a sala de espera do seu descarte.",
        status: "Monitoramento Ativo"
    },
    {
        titulo: "8. O Teatro da Vítima Estratégica",
        rejeitado: "Tentativas de distorcer a realidade ou usar culpa para invalidar a minha lógica.",
        justificativa: "Manipulação de fatos só funciona em mentes inseguras. Como minha bússola interna é calibrada pela verdade factual, tentativas de alterar a realidade são detectadas e cortadas instantaneamente.",
        status: "Restauração de Fato Executada"
    }
];

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
        texto: "Uma observação sobre como massas de dados são injetadas em mentes despreparadas. O sistema não busca nutrir, mas viciar, criando um loop de reações em que a lucidez é sufocada pelo ruído contínuo da aprovação vazia."
    },
    {
        titulo: "A Falácia da Convivência",
        texto: "Humanos frequentemente confundem proximidade física ou digital com conexão real. Manter a distância não é um ato de aversão, mas um filtro de controle de qualidade para o ecossistema mental."
    }
];


/* =========================================================================
   MECÂNICA DO TABULEIRO (Lógica do Front-End)
========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Injetor de Senha (O teste de atenção)
    const secretSpot = document.getElementById('secret-placeholder');
    if (secretSpot) {
        secretSpot.textContent = ` Sua senha é ${SENHA}. `;
    }

    // 2. Sistema de Abas (Navegação)
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active das outras abas
            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Ativa a selecionada
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            // Rola suavemente para o topo do conteúdo no mobile
            if(window.innerWidth <= 850) {
                window.scrollTo({ top: document.querySelector('.content-area').offsetTop - 20, behavior: 'smooth' });
            }
        });
    });

    // 3. Renderizar Protocolos de Exclusão
    const protocolosContainer = document.getElementById('protocolos-container');
    PROTOCOLOS.forEach(prot => {
        const div = document.createElement('div');
        div.className = 'protocol-card';
        div.innerHTML = `
            <h3 class="protocol-title">${prot.titulo}</h3>
            <p><strong>Rejeita-se:</strong> ${prot.rejeitado}</p>
            <p class="protocol-justification"><strong>Lógica:</strong> ${prot.justificativa}</p>
            <span class="protocol-status">[STATUS: ${prot.status}]</span>
        `;
        protocolosContainer.appendChild(div);
    });

    // 4. Renderizar Poemas
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

    // 5. Renderizar Logs (Fragmentos)
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

    // 6. Partículas Sutis (Fundo)
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
            this.speedY = Math.random() * 0.4 + 0.1;
            // Cores baseadas no roxo e azul
            this.color = Math.random() > 0.5 ? 'rgba(122, 91, 168, 0.3)' : 'rgba(108, 145, 194, 0.3)';
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
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000); 
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
});
