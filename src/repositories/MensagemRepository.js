class MensagemRepository {
  constructor() {
    // Array de objetos em memória
    this.mensagens = [
      // Mensagens iniciais fictícias para teste (para aparecer no lado esquerdo)
      { id: '1', contatoId: '1', texto: 'Oi, tudo bem?', recebida: true },
      { id: '2', contatoId: '1', texto: 'Vamos estudar React Native?', recebida: true },
      { id: '3', contatoId: '2', texto: 'Bom dia!', recebida: true },
    ];
  }

  // Retorna apenas as mensagens do contato selecionado
  getMensagens(contatoId) {
    return this.mensagens.filter(msg => msg.contatoId === contatoId);
  }

  // Armazena uma nova mensagem
  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}

export default MensagemRepository;
