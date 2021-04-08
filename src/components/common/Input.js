import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};

const styles = {
  inputStyle: {
    lineHeight: 23,
    color: '#000',
    fontSize: 18,
    flex: 2,
    paddingRight: 5,
    paddingLeft: 5,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {Input};
