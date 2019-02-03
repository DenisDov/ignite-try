import React, { Component } from 'react';
import {
  Text, View, Alert, TextInput,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import { BarcodeFinder } from '../Components/BarcodeFinder';
import RoundedButton from '../Components/RoundedButton';

import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
        barcodeFinderVisible: true,
      },
      text: '',
    };
  }

  onBarCodeRead(scanResult) {
    // console.warn(scanResult.type);
    // console.warn(scanResult.data);
    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.barcodeCodes.push(scanResult.data);
        Alert.alert(
          'Success!',
          `${scanResult.data}`,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Find price', onPress: () => this.props.navigation.navigate('ProductsScreen') },
          ],
          { cancelable: false },
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cameraView}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            // barcodeFinderVisible
            // barcodeFinderWidth={280}
            // barcodeFinderHeight={220}
            // barcodeFinderBorderColor="white"
            // barcodeFinderBorderWidth={2}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
            style={styles.camera}
            type={this.state.camera.type}
            aspect="fit"
          >
            <BarcodeFinder width={280} height={150} borderColor="red" borderWidth={2} />
          </RNCamera>
        </View>

        <View style={styles.footer}>
          <Text style={styles.sectionTitle}>Просканируйте штрих-код или введите вручную</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginVertical: 10,
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="1234567890"
          />
          <RoundedButton
            text="Go to product"
            onPress={() => this.props.navigation.navigate('ProductsScreen')}
          />
        </View>
      </View>
    );
  }
}

export default LaunchScreen;
