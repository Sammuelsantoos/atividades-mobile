import MensagemRepository from '../repositories/MensagemRepository';

class MensagemService {
  constructor() {
    this.repository = new MensagemRepository();
  }

  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    // Valida se a mensagem não está vazia
    if (!texto || texto.trim() === '') {
      return false; 
    }

    // Cria o objeto da mensagem
    const novaMensagem = {
      id: Date.now().toString(), // Gera um ID único simples
      contatoId: contatoId,
      texto: texto.trim(),
      recebida: false // Mensagens enviadas por nós são 'false'
    };

    this.repository.adicionarMensagem(novaMensagem);
    return true;
  }
}

// Exporta uma única instância para ser compartilhada entre as telas
export default new MensagemService();
