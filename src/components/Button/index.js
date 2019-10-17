import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import TouchableItem from '../TouchableItem';

export default class Button extends PureComponent {
  static defaultProps = {
    fillColor: '#FFF',
    textColor: '#333'
  };

  render() {
    const {
      fillColor,
      textColor,
      textContent,
      bottomless,
      primary,
      size,
      style,
      ...rest
    } = this.props;

    return (
      <TouchableItem
        {...rest}
        style={[
          { backgroundColor: fillColor, textColor: textColor },
          styles.button,
          primary && styles.primary,styles.row,
          bottomless && styles.borderWhite,
          size && `styles.${size}`,
          style
        ]}
      >
        {
          textContent && (
            <Text style={[styles.textContent, styles.bold, bottomless && styles.textWhite ]}>
              {textContent}
            </Text>
          )
        }
      </TouchableItem>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 44,
    maxHeight: 54,
    borderRadius: 4,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  primary: {
    backgroundColor: '#2c80ff'
  },

  borderWhite: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFF'
  },

  textWhite: {
    color: '#FFF'
  },

  spinbutton: {
    backgroundColor: 'rgba(0, 0, 0, .06)',
    borderRadius: 24,
    paddingHorizontal: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bold: {
    fontWeight: 'bold'
  },

  textContent: {
    color: '#FFF'
  },

  large: {
    height: 64
  },

  medium: {
    height: 44
  },

  small: {
    height: 34
  }
});
