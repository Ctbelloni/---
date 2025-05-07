const mensagemTexto = "Oi, eu fiz essa cartinha pra te mostrar o quanto você é especial! ❤️";
let index = 0;

// Função chamada ao clicar no envelope
function abrirEnvelope() {
  const envelope = document.getElementById("envelope");
  envelope.classList.toggle("aberto");

  // Quando o envelope abrir, digitar a mensagem e soltar os corações
  if (envelope.classList.contains("aberto")) {
    digitarMensagem();
    soltarCoracoes();
    mostrarAssinatura();
  }
}

// Função que faz a mensagem aparecer com efeito de digitação
function digitarMensagem() {
  const el = document.getElementById("mensagem");
  el.innerHTML = "";
  index = 0;
  const intervalo = setInterval(() => {
    if (index < mensagemTexto.length) {
      el.innerHTML += mensagemTexto.charAt(index);
      index++;
    } else {
      clearInterval(intervalo);
    }
  }, 50);
}

// Função para soltar corações flutuantes
function soltarCoracoes() {
  const heartsContainer = document.getElementById("hearts-container");

  // Adicionando 30 corações flutuantes
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "coracao";
      heart.style.left = Math.random() * 100 + "vw"; // Aleatorizando a posição horizontal
      heartsContainer.appendChild(heart);

      // Após 4 segundos, remover o coração
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, i * 150); // Criar corações com delay de 150ms
  }
}

// Função para mostrar a assinatura
function mostrarAssinatura() {
  const assinatura = document.getElementById("assinatura");
  assinatura.classList.add("mostrar");
}
