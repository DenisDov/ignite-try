import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/RoundedButtonStyles';

export default class RoundedButton extends Component {
  getText() {
    const buttonText = this.props.text || this.props.children || '';
    return buttonText.toUpperCase();
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    );
  }
}

RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.string,
};
