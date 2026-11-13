import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // <-- Importação

const contatos = [
  { id: '1', nome: 'Nator Junior' },
  { id: '2', nome: 'Maria Silva' },
  { id: '3', nome: 'João Pedro' },
  { id: '4', nome: 'Ana Clara' },
];

export default function HomeScreen({ navigation }) {
  const abrirConversa = (contato) => {
    navigation.navigate('ChatScreen', { 
      contatoId: contato.id, 
      nome: contato.nome 
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contatoItem} onPress={() => abrirConversa(item)}>
            <Text style={styles.nomeContato}>{item.nome}</Text>
            <Text style={styles.seta}>➔</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contatoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  nomeContato: { fontSize: 18 },
  seta: { fontSize: 18, color: '#999' }
});
