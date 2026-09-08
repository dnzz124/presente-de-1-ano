/* ==========================================
   CARTINHAS
========================================== */

const letters = [

    {
        titulo: "Para você",

        data: "01.09.2026",

        texto: `
Só de acordar cedo, e saber que amo alguém como Julieta e Romeu só sonhava em amar, saber que ela me ama de volta, sabendo que o nosso amor supera o próprio amor dos mundos das idéias de platão.

Nem mesmo compositores como Bach, Mozart, Beethoven, entre outros, conseguiriam escrever a peça que eu ouço quando eu vejo você. Eles almejam fazer algo tão bonito como você.

Você é mais doce que um bombom, mais linda que as artes de Van Gogh, mais perfeita que a santa Maria, mais carinhosa que gato neném.

Nossa vida é tão boa que seria tediosa de ver, para mostrar o quão perfeita é, uma série necessita drama, ação, a nossa, só contêm amor. Eu guardo cada áudio, desde os “Eu te amo”, até as coisas mais aleatórias, eu amo todos.

Você despertou mais emoções em mim que “Your Lie in April”, me fez chorar de felicidade, me fez corar de amor e T, eu amo cada defeito teu, cada qualidade, todas suas risadas, choro, cada emoção, cada face sua, eu amo, não tem um lado seu, que eu não queira para mim mesma; Eu posso ser egoísta, mas é tão errado querer tudo da pessoa que você mais ama.

Eu viajaria todo o mundo se fosse necessário para te beijar, faria os 4seg mais longos da nossas vidas para vivermos uma com a outra, viveria por vários universos onde sempre eu pudesse te encontrar.

Com carinho,
♡
`
    },


    {
        titulo: "Lembranças",

        data: "02.09.2026",

        texto: `
Nós fazendo nossas coisas do dia a dia, seja dormindo enquanto uma canta alguma coisa, ou desenhando e a outra pensando em algum plano de aula ou até mesmo episódio de uma das campanhas.

São essas coisas simples que definem nosso relacionamento.

Escrever algo para você, minha uvinha, envolve muito mais que uma simples carta de amor. É o sentimento de algo a mais que não sei explicar, é o desenvolvimento da história que quero ter contigo.

♡
`
    },


    {
        titulo: "Se Amar Você For Pecado",

        data: "03.09.2026",

        texto: `
Dizem que existem pecados que condenam uma pessoa.

Sete, para ser exata.

E talvez eu tenha cometido todos eles sem sequer perceber.

Comecei pelo orgulho.

Não pelo orgulho de ser melhor que alguém, mas pelo orgulho de poder dizer que, em algum momento da minha vida, nossos caminhos se encontraram. Há coisas que o mundo inteiro poderia tirar de mim e, ainda assim, eu continuaria tendo a certeza de que conhecer você foi uma das coisas mais bonitas que me aconteceram.

Depois veio a inveja.

Passei a invejar o relógio, porque ele consegue passar horas ao seu lado enquanto, para mim, cada minuto longe parece durar muito mais. Invejei os lugares que conhecem seus passos, as músicas que conseguem acompanhar seus dias e até as pequenas coisas que fazem parte da sua rotina enquanto eu estou distante.

A ganância veio silenciosamente.

Porque depois de conhecer você, pouco nunca mais pareceu ser suficiente. Uma conversa terminava e eu já queria outra. Um momento acabava e eu desejava guardá-lo por mais um pouco.

Era como tentar segurar água entre as mãos: quanto mais eu tentava me contentar, mais percebia que ainda queria ficar.

Cometi preguiça também.

Descobri que existem dias em que o melhor plano do mundo pode ser simplesmente não ter plano nenhum. Ficar perto, conversar sobre qualquer coisa, dividir um silêncio ou apenas saber que você está ali.

Há uma tranquilidade estranha em não precisar fazer nada quando a companhia já é suficiente.

Então veio a gula.

Não aquela que procura saciar o corpo, mas a que nasce quando o coração encontra algo de que gosta demais.

Uma fome de momentos. De histórias. De risadas. De conversas que começam sem motivo e terminam tarde demais.

E o pior é que essa fome nunca parece realmente desaparecer.

A ira talvez tenha sido a mais fácil de entender.

Nunca foi raiva de você.

Foi raiva do mundo quando ele pesa demais sobre seus ombros. Raiva dos dias que conseguem apagar seu sorriso. Raiva de qualquer coisa que faça você esquecer, nem que seja por um instante, o quanto existe de bonito em você.

E então percebi que talvez o pior dos meus pecados fosse a luxúria.

Não pelo desejo de possuir.

Mas pelo desejo de permanecer.

De querer estar perto quando pudesse. De querer ouvir sua voz mais uma vez. De querer prolongar os instantes bons como se o tempo pudesse ser convencido a não passar.

E foi assim que entendi:

talvez eu realmente seja uma pecadora.

Mas, se amar você significa carregar todos esses pecados, então não quero absolvição.

Não quero apagar nenhuma lembrança.

Não quero voltar ao momento em que ainda não sabia seu nome, seu jeito, suas manias ou a sensação de ter você fazendo parte dos meus dias.

Se houver um lugar reservado para pecadores como eu, então que me levem até lá.

Eu chegaria sem arrependimento.

Porque, se o preço de ter conhecido você for passar a eternidade no inferno, ainda haverá uma coisa que ninguém poderá tirar de mim:

eu já conheci o meu paraíso.

E ele tinha o seu nome.

♡
`
    }

];


/* ==========================================
   TROCAR DE SEÇÃO
========================================== */

function changeSection(sectionId) {

    const sections =
        document.querySelectorAll(".section");


    sections.forEach(function(section) {

        section.classList.remove("active");

    });


    const selected =
        document.getElementById(sectionId);


    if (selected) {

        selected.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ==========================================
   CRIAR CARTAS
========================================== */

function renderLetters() {

    const grid =
        document.getElementById("lettersGrid");


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    letters.forEach(function(letter, index) {

        /*
            Pega somente o começo da carta
            para aparecer como prévia.
        */

        const preview =
            letter.texto
                .trim()
                .replace(/\s+/g, " ")
                .substring(0, 150);


        const card =
            document.createElement("article");


        card.className =
            "letter-card";


        card.setAttribute(
            "role",
            "button"
        );


        card.setAttribute(
            "tabindex",
            "0"
        );


        card.innerHTML = `

            <span>
                ${letter.data}
            </span>

            <h3>
                ${letter.titulo}
            </h3>

            <p>
                ${preview}...
            </p>

        `;


        card.addEventListener(
            "click",
            function() {

                openLetter(index);

            }
        );


        card.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openLetter(index);

                }

            }
        );


        grid.appendChild(card);

    });

}


/* ==========================================
   ABRIR CARTA
========================================== */

function openLetter(index) {

    const letter =
        letters[index];


    if (!letter) {
        return;
    }


    const modal =
        document.getElementById("letterModal");


    const modalTitle =
        document.getElementById("modalTitle");


    const modalDate =
        document.getElementById("modalDate");


    const modalText =
        document.getElementById("modalText");


    modalTitle.textContent =
        letter.titulo;


    modalDate.textContent =
        letter.data;


    modalText.textContent =
        letter.texto;


    modal.classList.add("open");


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   FECHAR CARTA
========================================== */

function closeLetter() {

    const modal =
        document.getElementById("letterModal");


    modal.classList.remove("open");


    document.body.style.overflow =
        "";

}


/* ==========================================
   CLICAR FORA DA CARTA
========================================== */

const letterModal =
    document.getElementById("letterModal");


if (letterModal) {

    letterModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === letterModal
            ) {

                closeLetter();

            }

        }
    );

}


/* ==========================================
   TECLA ESC
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeLetter();

        }

    }
);


/* ==========================================
   MÚSICA
========================================== */

const backgroundMusic =
    document.getElementById(
        "backgroundMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


/*
    Volume inicial.
    0.35 = 35%
*/

if (backgroundMusic) {

    backgroundMusic.volume = 0.35;

}


/* ==========================================
   TOCAR / PAUSAR MÚSICA
========================================== */

if (
    backgroundMusic &&
    musicButton
) {

    musicButton.addEventListener(
        "click",
        async function() {

            if (
                backgroundMusic.paused
            ) {

                try {

                    await backgroundMusic.play();

                    musicButton.textContent =
                        "♫ Pausar música";

                }

                catch (error) {

                    console.error(
                        "Erro ao tocar música:",
                        error
                    );


                    musicButton.textContent =
                        "♪ Tentar novamente";

                }

            }

            else {

                backgroundMusic.pause();

                musicButton.textContent =
                    "♪ Tocar música";

            }

        }
    );


    backgroundMusic.addEventListener(
        "play",
        function() {

            musicButton.textContent =
                "♫ Pausar música";

        }
    );


    backgroundMusic.addEventListener(
        "pause",
        function() {

            musicButton.textContent =
                "♪ Tocar música";

        }
    );

}


/* ==========================================
   INICIAR CARTAS
========================================== */

renderLetters();