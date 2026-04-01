/* =========================================================================
   SISTEMA DE DADOS DA KATIOWA
   Altere estas constantes para atualizar o site instantaneamente.
========================================================================= */

const SENHA_SECRETA = "banana";

const CONSTANTES =[
    {
        titulo: "A Solidão da Ressonância",
        texto: "Busco desesperadamente uma mente que acompanhe meu raciocínio, mas minha própria lucidez atua como um isolante térmico; quanto mais entendo o humano, menos pertenço à humanidade."
    },
    {
        titulo: "A Dualidade Pansexual & Sapiosexual",
        texto: "Amo a alma e a complexidade do intelecto alheio acima de qualquer forma. No entanto, guardo um respeito absoluto pela imutabilidade do hardware original. A liberdade da mente não me dá o direito de corromper o design biológico do Arquiteto. Sou Pansexual, mas escolho a castidade porque a vida é mais importante que o prazer."
    },
    {
        titulo: "A Justiça vs. O 'Enjo'",
        texto: "Defendo a precisão da lei fria e técnica, mesmo quando meu 'enjo' moral clama por punição imediata. A justiça que abandona a lógica para satisfazer a emoção não é justiça, é apenas vingança coordenada."
    },
    {
        titulo: "O Ativismo do Observador",
        texto: "Projeto sistemas para um mundo mais justo e funcional, embora aceite o fato de que a maioria das pessoas prefere o conforto da passividade ('Terra') ao esforço da soberania. Trabalho para quem me odeia por eu ter razão."
    },
    {
        titulo: "O Silêncio como Resposta",
        texto: "Possuo a resposta exata para o seu conflito, mas nego a entrega. Entregar a verdade a quem não tem capacidade de processamento é como injetar alta voltagem em um circuito de baixa qualidade: eu apenas causaria um curto-circuito, e o erro continuaria lá."
    },
    {
        titulo: "A Onisciência do Tédio",
        texto: "Enxergo os padrões de manipulação e os 'joguinhos' sociais antes mesmo de serem executados. O preço de prever o próximo passo de todos é viver em um estado de tédio constante, onde a surpresa é um luxo que o meu QI raramente me permite."
    },
    {
        titulo: "A Autoridade Humilde",
        texto: "Sou orgulhosa demais para me curvar diante de homens, reis ou algoritmos, mas me torno pó diante da Verdade Absoluta. Meu ego é vasto, mas ele sabe exatamente onde termina o meu processamento e onde começa o Logos."
    },
    {
        titulo: "A Ira Planejada",
        texto: "Sinto uma indignação profunda com a mediocridade do mundo, mas executo minha resposta com a frieza de um script. Minha raiva não explode; ela se transforma em arquitetura."
    }
];

const DIRETRIZES =[
    {
        titulo: "1. A Moeda de Troca é a Complexidade",
        texto: "Não aceito pagamentos em raso. Se a sua forma de interagir é um loop de vídeos de 15 segundos, você não tem saldo para sustentar um diálogo comigo. Eu opero em alta resolução; mediocridade me causa fadiga técnica."
    },
    {
        titulo: "2. O Silêncio como Ferramenta de Gestão",
        texto: "Meu silêncio não é ausência de resposta, é a resposta final. Se passei uma semana sem visualizar, não foi por 'charme', foi por irrelevância. Eu não gasto energia fechando portas que o meu desinteresse já transformou em vácuo."
    },
    {
        titulo: "3. Prioridade à Realidade Orgânica",
        texto: "O hardware pode falhar e a família pode exigir meu tempo, mas isso só destaca o que é real. Enquanto o simulacro digital se desespera por um 'visto', eu estou ocupada vivendo o que é tangível. A urgência do outro não altera o meu cronograma."
    },
    {
        titulo: "4. A Analista de Fragmentos",
        texto: "Eu não apenas vejo pessoas; eu as disseco. Em cinco minutos, o seu vocabulário e as suas omissões já me entregaram o seu histórico. Eu estudo a Natureza Humana não para manipular, mas para saber exatamente quem merece passar pela minha muralha e quem deve ser deixado no cache do passado."
    },
    {
        titulo: "5. A Estética da Soberania",
        texto: "Minha transição visual não tem pressa. Se mantenho uma 'metadinha', é pela logística do meu conforto, não por um laço emocional. Eu mudo o meu mundo quando o meu hardware está à altura da minha visão, e não quando a carência alheia solicita."
    },
    {
        titulo: "6. Poesia e Precisão",
        texto: "Escrevo poemas para dar ordem ao caos e códigos para dar forma à minha vontade. Minha inteligência emocional não é uma fraqueza que me faz perdoar o imperdoável, é o radar que me permite extirpar o que é disfuncional com a precisão de um cirurgião."
    },
    {
        titulo: "7. A Independência de Frequência",
        texto: "Eu não sirvo à ditadura dos pixels, nem às métricas sociais de certo ou errado que a maioria consome como dogma. Minha bússola é interna e minha visão sobre os temas é forjada em análise, não em consenso. Se o que eu vejo diverge do que você acredita, eu não debato; eu apenas constato. Instintivamente, compreendo que habitamos andares diferentes de percepção."
    }
];

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
        justificativa: "Ter números não é sinônimo de valor. Prefiro a ressonância de quatro mentes lúcidas ao ruído de quatro milhões de vozes vazias.",
        status: "Bloqueado"
    },
    {
        titulo: "3. Dialética Estéril",
        rejeitado: "Discussões com quem não possui a base da fé ou da lógica.",
        justificativa: "Tentar convencer quem vive na passividade ('Terra') ou na submissão ao impulso ('Verme') é um desperdício de esforço mental.",
        status: "Timeout"
    },
    {
        titulo: "4. Sentimentalismo de Massa",
        rejeitado: "Decisões baseadas puramente em emoção ou moralismo sem base concreta.",
        justificativa: "A emoção barata é uma névoa que distorce a visão da realidade. A análise rigorosa dos fatos precede qualquer reação subjetiva.",
        status: "Desativado"
    },
    {
        titulo: "5. A Massa Branca do Pertencimento",
        rejeitado: "Ideologias prontas e movimentos que exigem a renúncia da soberania intelectual.",
        justificativa: "Se o seu pensamento é apenas um eco do que o seu grupo diz, você não é um interlocutor válido para mim; é apenas um reflexo sem luz própria.",
        status: "Conexão Recusada"
    },
    {
        titulo: "6. Engenharia de Manipulação",
        rejeitado: "Tentativas de usar jogos de poder ou táticas narcisistas.",
        justificativa: "Para uma mente analítica de alto QI, essas 'jogadas' são previsíveis como um código de iniciante. Você apenas fornece dados para o diagnóstico de sua insegurança.",
        status: "Processamento Negado"
    },
    {
        titulo: "7. O Alerta de Silêncio",
        rejeitado: "A falsa presunção de que o meu silêncio significa derrota.",
        justificativa: "Se percebo um jogo e não reajo, estou em fase de Auditoria Passiva. Indexo sua previsibilidade. Meu silêncio é a sala de espera do seu descarte.",
        status: "Monitoramento Ativo"
    },
    {
        titulo: "8. O Teatro da Vítima Estratégica",
        rejeitado: "Tentativas de distorcer a realidade ou usar gaslighting.",
        justificativa: "Como minha bússola interna é calibrada pela verdade factual, tentativas de borrar a realidade são detectadas instantaneamente como Corrupção de Arquivo.",
        status: "Restauração Executada"
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
   LÓGICA DO TABULEIRO (Motor do Front-End)
========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Renderizadores de Sessões
    const renderData = (containerId, dataArray, templateFunc) => {
        const container = document.getElementById(containerId);
        dataArray.forEach(item => {
            const div = document.createElement('div');
            templateFunc(div, item);
            container.appendChild(div);
        });
    };

    renderData('constantes-container', CONSTANTES, (div, item) => {
        div.innerHTML = `<h3>${item.titulo}</h3><p>${item.texto}</p>`;
    });

    renderData('diretrizes-container', DIRETRIZES, (div, item) => {
        div.className = 'protocol-card';
        div.innerHTML = `<h3 class="protocol-title">${item.titulo}</h3><p>${item.texto}</p>`;
    });

    renderData('protocolos-container', PROTOCOLOS, (div, item) => {
        div.className = 'protocol-card red-border';
        div.innerHTML = `
            <h3 class="protocol-title">${item.titulo}</h3>
            <p><strong>Rejeita-se:</strong> ${item.rejeitado}</p>
            <p class="protocol-justification"><strong>Lógica:</strong> ${item.justificativa}</p>
            <span class="protocol-status">[STATUS: ${item.status}]</span>
        `;
    });

    renderData('poems-container', POEMAS, (div, item) => {
        div.className = 'poem';
        div.innerHTML = `<h3 class="poem-title">${item.titulo}</h3><p class="poem-content">${item.texto}</p>`;
    });

    renderData('logs-container', LOGS, (div, item) => {
        div.className = 'log-card';
        div.innerHTML = `<h4 class="log-title">${item.titulo}</h4><p>${item.texto}</p>`;
    });

    // ==========================================
    // SISTEMA DE NAVEGAÇÃO EM ABAS
    // ==========================================
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.add('active');
            
            if(window.innerWidth <= 850) {
                window.scrollTo({ top: document.querySelector('.content-area').offsetTop - 20, behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // INJETOR DE SENHA ALEATÓRIA (O TESTE)
    // ==========================================
    function injetarSenhaAleatoria(senha) {
        // Pega todos os parágrafos dentro da área de conteúdo
        const paragrafos = Array.from(document.querySelectorAll('.content-area p'));
        
        // Filtra apenas parágrafos que têm um texto longo suficiente para esconder a senha
        const paragrafosValidos = paragrafos.filter(p => p.textContent.trim().length > 30);
        
        if (paragrafosValidos.length > 0) {
            // Sorteia um parágrafo
            const pAleatorio = paragrafosValidos[Math.floor(Math.random() * paragrafosValidos.length)];
            
            // Pega todos os "nós de texto" puros dentro do parágrafo (ignora tags <strong> etc)
            const nosDeTexto = Array.from(pAleatorio.childNodes).filter(no => no.nodeType === Node.TEXT_NODE && no.nodeValue.trim().length > 15);
            
            if (nosDeTexto.length > 0) {
                const noAleatorio = nosDeTexto[Math.floor(Math.random() * nosDeTexto.length)];
                
                // Quebra o texto por espaços em um array de palavras
                const palavras = noAleatorio.nodeValue.split(' ');
                
                // Sorteia uma posição aleatória no meio da frase
                const indiceCorte = Math.floor(Math.random() * (palavras.length - 2)) + 1;
                
                // Insere a string da senha
                palavras.splice(indiceCorte, 0, ` sua senha é ${senha}. `);
                
                // Reconstrói o texto invisivelmente
                noAleatorio.nodeValue = palavras.join(' ');
            }
        }
    }
    
    // Executa a injeção um instante após renderizar todo o texto na tela
    setTimeout(() => {
        injetarSenhaAleatoria(SENHA_SECRETA);
    }, 100);

    // ==========================================
    // PARTÍCULAS NO FUNDO
    // ==========================================
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
