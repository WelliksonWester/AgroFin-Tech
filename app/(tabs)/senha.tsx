import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TelaRecuperacao() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleRecuperar = () => {
    if (!email) {
      Alert.alert("Erro", "Digite seu e-mail.");
      return;
    }
    Alert.alert("Sucesso", "Instruções enviadas!");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.conteudo}>
        <Image source={require('../../assets/images/logo_agrofintech.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.titulo}>Recuperar Senha</Text>
        <Text style={styles.subtitulo}>Enviaremos as instruções por e-mail.</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail Cadastrado</Text>
          <TextInput 
            style={styles.input} 
            placeholder="seuemail@exemplo.com" 
            value={email} 
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleRecuperar}>
          <Text style={styles.botaoTexto}>Recuperar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={styles.linkVoltar}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  conteudo: { flex: 1, justifyContent: 'center', paddingHorizontal: 32, alignItems: 'center' },
  logo: { width: 100, height: 100 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#2E7D32', marginTop: 20 },
  subtitulo: { color: '#666', marginBottom: 30 },
  inputContainer: { width: '100%', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 5 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 14, width: '100%' },
  botao: { backgroundColor: '#2E7D32', padding: 16, borderRadius: 10, alignItems: 'center', width: '100%' },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  linkVoltar: { color: '#666', textAlign: 'center' }
});