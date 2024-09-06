import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Login successful");
        setUser(res.user);
        navigation.navigate('home'); // Uncommented this line
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={setEmail}
            onBlur={onBlur}
            value={email}
            placeholder="Enter email"
            style={styles.input}
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>Email is required</Text>}

      <Text>Password:</Text>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={setPassword}
            onBlur={onBlur}
            value={password}
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>Password is required</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'aqua',
    padding: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  linkText: {
    color: 'blue',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
  },
});
