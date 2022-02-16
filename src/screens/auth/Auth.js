import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Image,
  Text,
} from 'react-native';
import Field from '../../components/Field';
import IButton from '../../components/Button';
import { authStyles } from '../../styles/authStyles';
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
      body: JSON.stringify({ username, password, bill}),
    };

    console.log(reqOptions.body, store);
  }

  return (
    <SafeAreaView style={(styles.container, authStyles)}>
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

      <IButton title={'Log in'} onPress={submitHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
