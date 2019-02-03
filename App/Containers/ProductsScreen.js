import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  FlatList,
  SectionList,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductsScreenStyle';

import mockFoundedroducts from '../Fixtures/mockFoundedProducts';

const similarProducts = [
  {
    id: 1,
    title: 'Watsons',
    image: 'https://i2.rozetka.ua/goods/2147381/head_shoulders_4015600767983_images_2147381755.jpg',
    name: 'Шампунь против перхоти Head & Shoulders',
    location: 'https://www.google.com/maps/search/watsons/@50.4388388,30.5147999,15z/data=!3m1!4b1',
    price: '75.14 грн.',
  },
  {
    id: 2,
    title: 'ЭКО',
    image: 'https://i2.rozetka.ua/goods/6244563/brelil_8011935052875_images_6244563686.jpg',
    name: 'Крем Brelil Numero для волос восстанавливающий 1000 мл',
    location:
      'https://www.google.com/maps/search/%D0%AD%D0%9A%D0%9E/@50.4388381,30.514757,15z/data=!3m1!4b1',
    price: '55.34 грн.',
  },
  {
    id: 3,
    title: 'Auchan',
    image: 'https://i2.rozetka.ua/goods/1993153/sulsen_4823052202576_images_1993153448.jpg',
    name: 'Масло Сульсена витаминизированное 100 мл',
    location:
      'https://www.google.com/maps/search/%D0%AD%D0%9A%D0%9E/@50.4388381,30.514757,15z/data=!3m1!4b1',
    price: '70 грн.',
  },
];

class ProductsScreen extends Component {
  renderItem(item, section) {
    switch (section.key) {
      case 'shops':
        return (
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <View style={styles.product}>
              <Text style={styles.productTitle}>{`🌐 ${item.title}`}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity onPress={() => Linking.openURL(item.location)}>
            <View style={styles.product}>
              <Text style={styles.productTitle}>{`📍 ${item.name}`}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        );
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>
          Шампунь против перхоти Head & Shoulders Против выпадения волос для мужчин 600 мл
        </Text>

        <SectionList
          sections={mockFoundedroducts}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionListTitle}>{title}</Text>
          )}
          renderItem={({ item, section }) => this.renderItem(item, section)}
          keyExtractor={item => item.id}
        />

        <Text style={styles.sectionTitle}>Аналогичные товары</Text>

        <FlatList
          data={similarProducts}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Linking.openURL(item.location)}>
              <View style={styles.similar}>
                <View style={styles.similarFigure}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.similarContent}>
                  <Text numberOfLines={3}>{item.name}</Text>
                  <Text style={styles.similarLink}>
                    📍
                    {item.title}
                  </Text>
                  <Text style={styles.similarPrice}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreen);
