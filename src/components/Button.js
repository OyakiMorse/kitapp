import React from 'react';
import { Button as IButton } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

const Button = (props) => {
  return (
    <IButton
      style={buttonStyles.button}
      // onPress={onPressHandler}
      title='Log in'
      {...props}
    />
  );
};

export default Button;
