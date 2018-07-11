import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity 
    title = {title}
    onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 20
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    
  }
};

export { Button };
