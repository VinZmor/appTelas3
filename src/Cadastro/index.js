import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView
} from "react-native";

export default function App() {
  const [produto, setProduto] = useState("");
  const [nome, setNome] = useState("");
  const [restricao, setRestricao] = useState(false);

  // Função para enviar os dados
  const enviarDados = () => {
    if (nome === "" || produto === "") {
      alert("Preencha todos os dados corretamente");
      return;
    }
    alert(
      `Compra bem sucedida! \n\nNome: ${nome}\nProduto: ${produto}\nRestrição de Idade: ${restricao ? "Ativo" : "Inativo"}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Cadastro de Produto</Text>

        <View style={styles.areaFormulario}>
          <Text style={styles.textoNome}>Nome do Produto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do produto"
            onChangeText={setNome}
            value={nome}
          />
        </View>

        <View style={styles.areaFormulario}>
          <Text style={styles.textoNome}>Tipo de Produto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o tipo de produto"
            onChangeText={setProduto}
            value={produto}
          />
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Restrição de Idade:</Text>
          <Switch
            trackColor={{ false: "#d6d6d6", true: "#70aa87" }}
            thumbColor="#db5643"
            value={restricao}
            onValueChange={setRestricao}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={enviarDados}>
          <Text style={styles.botaoTexto}>Completar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 40,
    paddingBottom: 20,
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  areaFormulario: {
    marginBottom: 15,
  },
  textoNome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "#f1f1f1",
    color: "#333",
  },
  areaEstudante: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  botao: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    width: "100%",
    marginTop: 20,
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
