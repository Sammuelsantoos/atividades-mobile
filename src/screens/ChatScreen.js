import React, { useState, useEffect } from 'react';
import { 
  View, TextInput, TouchableOpacity, 
  FlatList, StyleSheet, KeyboardAvoidingView, Platform, Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import Mensagem from '../components/Mensagem';
import MensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {
  const { contatoId } = route.params;
  
  const [mensagens, setMensagens] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const mensagensCarregadas = MensagemService.getMensagens(contatoId);
    setMensagens(mensagensCarregadas);
  }, [contatoId]);

  const handleEnviar = () => {
    const sucesso = MensagemService.enviarMensagem(contatoId, texto);
    if (sucesso) {
      setMensagens(MensagemService.getMensagens(contatoId));
      setTexto('');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView 
        style={styles.keyboardContainer} 
        // Usamos 'padding' para ambos para garantir que o campo suba
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          data={mensagens}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listaMensagens}
          // Isso permite clicar no botão "Enviar" com o teclado aberto
          keyboardShouldPersistTaps="handled" 
          renderItem={({ item }) => (
            <Mensagem mensagem={item.texto} recebida={item.recebida} />
          )}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem..."
            value={texto}
            onChangeText={setTexto}
            onSubmitEditing={handleEnviar}
          />
          <TouchableOpacity style={styles.botaoEnviar} onPress={handleEnviar}>
            <Text style={styles.textoBotao}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  keyboardContainer: {
    flex: 1,
  },
  listaMensagens: { 
    padding: 16, 
    flexGrow: 1 
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  botaoEnviar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#075e54',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  textoBotao: { 
    color: '#fff', 
    fontWeight: 'bold' 
  }
});
