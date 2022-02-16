import {
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Image,
  Text,
} from 'react-native';
import { authStyles } from '../../styles/authStyles';
import Field from '../../components/Field';
import IButton from '../../components/Button';
import logo from '../../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword } from '../../redux/actions/userAction';

export default function Auth() {
  const { height } = useWindowDimensions();
  const { username, password, bill } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  function submitHandler() {
    const reqOptions = {
      method: 'POST',
      headers: {},
      body: JSON.stringify({ username, password, bill }),
    };
  }

  return (
    <SafeAreaView style={authStyles.container}>
      <Image
        source={logo}
        style={[authStyles.logo, { height: height * 0.3 }]}
        resizeMode='contain'
      />
      <Text style={authStyles.text}>Welcome to our app!</Text>
      <Field
        defaultValue={username}
        onChangeText={(value) => dispatch(setUsername(value))}
        placeholder='Username...'
      />
      <Field
        defaultValue={password}
        onChangeText={(value) => dispatch(setPassword(value))}
        placeholder='Password...'
        secureTextEntry={true}
      />

      <IButton onPress={submitHandler} />
    </SafeAreaView>
  );
}
