import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Mensagem({ mensagem, recebida }) {
  return (
    <View style={[
      styles.container, 
      recebida ? styles.recebidaContainer : styles.enviadaContainer
    ]}>
      <Text style={recebida ? styles.textoRecebida : styles.textoEnviada}>
        {mensagem}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  recebidaContainer: {
    alignSelf: 'flex-start', // Alinhado à esquerda
    backgroundColor: '#e5e5ea',
  },
  enviadaContainer: {
    alignSelf: 'flex-end', // Alinhado à direita
    backgroundColor: '#dcf8c6', // Verde estilo WhatsApp
  },
  textoRecebida: {
    color: '#000',
  },
  textoEnviada: {
    color: '#000',
  }
});
