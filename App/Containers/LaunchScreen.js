import React, { Component } from 'react';
import {
  ScrollView, Text, Image, View,
} from 'react-native';
import { Images } from '../Themes';

import RoundedButton from '../Components/RoundedButton';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably what your app is going to look like. Unless your designer handed you
              this screen and, in that case, congrats! ready to ship. For everyone else, this is
              where see a live preview of your fully functioning app using Ignite.
            </Text>

            <RoundedButton
              text="real buttons have curves"
              onPress={() => window.alert('Rounded Button Pressed!')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
