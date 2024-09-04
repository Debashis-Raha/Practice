import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

import auth from '@react-native-firebase/auth';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const handleSignUp = () => {};
  const handleLogin = () => {};
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>UserName:</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onChangeText={setEmail}
            onBlur={onBlur}
            value={email}
            placeholder="enter username"
          />
        )}
      />
      {errors.username && <Text>username is required</Text>}
      <Text>Password</Text>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onChangeText={setPassword}
            onBlur={onBlur}
            value={password}
            placeholder="enter password"
          />
        )}
      />
      {errors.password && <Text>username is required</Text>}
      <TouchableOpacity style={{backgroundColor: 'aqua'}}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
