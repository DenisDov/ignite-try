import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export class BarcodeFinder extends Component {
  getSizeStyles() {
    return {
      width: this.props.width,
      height: this.props.height,
    };
  }

  render() {
    return (
      <View style={this.getSizeStyles()}>
        <View
          style={[
            { borderColor: this.props.borderColor },
            styles.topLeftEdge,
            {
              borderLeftWidth: this.props.borderWidth,
              borderTopWidth: this.props.borderWidth,
            },
          ]}
        />
        <View
          style={[
            { borderColor: this.props.borderColor },
            styles.topRightEdge,
            {
              borderRightWidth: this.props.borderWidth,
              borderTopWidth: this.props.borderWidth,
            },
          ]}
        />
        <View
          style={[
            { borderColor: this.props.borderColor },
            styles.bottomLeftEdge,
            {
              borderLeftWidth: this.props.borderWidth,
              borderBottomWidth: this.props.borderWidth,
            },
          ]}
        />
        <View
          style={[
            { borderColor: this.props.borderColor },
            styles.bottomRightEdge,
            {
              borderRightWidth: this.props.borderWidth,
              borderBottomWidth: this.props.borderWidth,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topLeftEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 20,
  },
  topRightEdge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 20,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 40,
    height: 20,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 20,
  },
});
