import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TelaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    console.log("Login:", { email, senha });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo_agrofintech.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.titulo}>ValorAgro</Text>
          <Text style={styles.subtitulo}>Inteligência Financeira para o Agronegócio</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
          
          <Link href="/senha" asChild>
            <TouchableOpacity>
              <Text style={styles.linkEsqueceu}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <Link href="/cadastro" asChild>
          <TouchableOpacity style={{ marginTop: 25 }}>
            <Text style={styles.textoFooter}>Não tem conta? <Text style={styles.linkVerde}>Cadastre-se</Text></Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', paddingHorizontal: 32 },
  logoContainer: { alignItems: 'center', marginBottom: 30 },
  logo: { width: 130, height: 130 },
  titulo: { fontSize: 28, fontWeight: '800', color: '#2E7D32', marginTop: 10 },
  subtitulo: { fontSize: 14, color: '#666', textAlign: 'center' },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 14, marginBottom: 15 },
  linkEsqueceu: { color: '#666', textAlign: 'right', fontSize: 13 },
  botao: { backgroundColor: '#2E7D32', padding: 16, borderRadius: 10, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  textoFooter: { textAlign: 'center', color: '#666' },
  linkVerde: { color: '#2E7D32', fontWeight: 'bold' }
});