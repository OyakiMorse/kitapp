import React from 'react';
import { TextInput } from 'react-native-web';
import { inputStyles } from '../styles/inputStyles';

const Field = (props) => {
  return <TextInput style={inputStyles.input} {...props} />;
};

export default Field;
