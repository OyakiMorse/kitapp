import { Button } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

const IButton = (props) => {
  return <Button style={buttonStyles.button} title='Log in' {...props} />;
};

export default IButton;
