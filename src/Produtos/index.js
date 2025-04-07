import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    title: "Dados RPG",
    text: "Quer personalisar seus dados? De uma olhada em: DadosRPG",
    valor: 24,
    img: 'https://s.zst.com.br/cms-assets/2021/06/q-workshop-conjunto-de-dados-ornamentados-de-call-of-cthulhu.jpg',
  },
];

const ProductDetails = () => {
  const product = data[0]; // Acessa o primeiro item do array de produtos

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Exibe a imagem do produto */}
        <Image source={{ uri: product.img }} style={styles.productImage} />

        {/* Exibe as informações do produto */}
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.text}</Text>
          <Text style={styles.productPrice}>R$ {product.valor},00</Text>
        </View>

        {/* Botão para adicionar ao carrinho */}
        <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Produto adicionado ao carrinho')}>
          <Icon name="shopping-cart" color="#fff" size={30} />
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 15,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  productInfo: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#055a02',
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#131313',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default ProductDetails;
