const chatBox = document.getElementById('chat-box');

function sendMessage() {
  const input = document.getElementById('user-input')
  const text = input.value.trim()
  if (!text) return

  appendMessage(text, 'user')
  input.value = ' ' 

  setTimeout(() => {
    const response = getBotResponse(text)
    appendMessage(response, 'bot')
  }, 500) 

  function appendMessage(text, sender) {
    const msg = document.createElement('div')
    msg.className = `message ${sender}`
    msg.textContent = text
    chatBox.appendChild(msg)
    chatBox.scrollTop = chatBox.scrollHeight
  }

  function getBotResponse(input) {
    const msg = input.toLowerCase()
    if (msg.includes('jogo')) return 'Não tem uma próxima partida prevista'
    if (msg.includes('jogador') || msg.includes('time')) return 'Jogadores: MOLODOY, YEKINDAR, FalleN, KSCERATO, yuurih. Reservas: skullz e chelo'
    if (msg.includes('loja')) return '🛍️ Acesse a loja oficial: https://www.furia.gg/'
    if (msg.includes('estat')) return '📊 Veja estatísticas em: https://www.hltv.org/team/8297/furia'
    if (msg.includes('notícia') || msg.includes('novidade') || msg.includes('noticia')) return 'Últimas notícias em: https://draft5.gg/equipe/330-FURIA'
    if (msg.includes('clipe') || msg.includes('jogada')) return 'Veja clipes: TWITCH da Furia https://www.twitch.tv/furiatv?lang=pt-br ou YouTube da FURIA https://www.youtube.com/@FURIAggCS'
    if (msg.includes('história') || msg.includes('sobre') || msg.includes('historia')) return 'A FURIA foi fundada em 2017 e é um dos maiores times brasileiros de CS:GO!'
    if (msg.includes('redes') || msg.includes('social')) return 'Redes sociais: Instagram @furiagg, TikTok @furia'
    return '❓ Desculpe, não entendi. Tente: "próximo jogo", "jogadores", "loja", "estatísticas", "notícias", "clipes", "história" ou "redes sociais".'
  }
}