import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleCadastrar = () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    console.log("Cadastro:", { nome, email, senha });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Image source={require('../../assets/images/logo_agrofintech.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.titulo}>Criar Conta</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput style={styles.input} placeholder="Seu nome" value={nome} onChangeText={setNome} />

          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="seuemail@exemplo.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Crie uma senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={styles.linkVoltar}>Voltar para Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  conteudo: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 32, alignItems: 'center' },
  logo: { width: 100, height: 100 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#2E7D32', marginVertical: 20 },
  inputContainer: { width: '100%', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 5 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 14, marginBottom: 15, width: '100%' },
  botao: { backgroundColor: '#2E7D32', padding: 16, borderRadius: 10, alignItems: 'center', width: '100%' },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  linkVoltar: { color: '#666', textAlign: 'center' }
});