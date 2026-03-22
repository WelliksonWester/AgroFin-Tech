import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import logoAgroFinTech from '../../assets/images/logo_agrofintech.png';

export default function TelaLogin() {
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.conteudo}>
        
        <View style={styles.logoContainer}>
          <Image 
            source={logoAgroFinTech}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>ValorAgro</Text>
          <Text style={styles.subtitulo}>Inteligência Financeira para o Agronegócio</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.botaoLogin}>
          <Text style={styles.botaoLoginTexto}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.cadastroContainer}>
          <Text style={styles.cadastroTexto}>Não tem conta? </Text>
          <TouchableOpacity>
            <Text style={styles.cadastroLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5' 
  },
  conteudo: {
    flex: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 32, 
  },
  logoContainer: {
    alignItems: 'center', 
    marginBottom: 32,
  },
  logo: { 
    width: 150, 
    height: 150 
  },
  titulo: {
    fontSize: 32, 
    fontWeight: '800', 
    color: '#2E7D32', 
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 1,
  },
  subtitulo: {
    fontSize: 15, 
    color: '#666', 
    textAlign: 'center', 
    marginBottom: 32,
    fontWeight: '400',
  },
  inputContainer: { 
    marginBottom: 16 
  },
  label: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#333', 
    marginBottom: 6 
  },
  input: {
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 10, 
    paddingHorizontal: 16,
    paddingVertical: 14, 
    fontSize: 16,
  },
  botaoLogin: {
    backgroundColor: '#2E7D32', 
    paddingVertical: 16, 
    borderRadius: 10, 
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  botaoLoginTexto: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  cadastroContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 25 
  },
  cadastroTexto: { 
    color: '#666', 
    fontSize: 14 
  },
  cadastroLink: { 
    color: '#2E7D32', 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
});