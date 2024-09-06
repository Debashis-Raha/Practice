import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const handleSignUp = ({ email, password }) => {
    auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        setUser(res.user);
        navigation.navigate('login'); // Uncommented this line
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter email"
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>Email is required</Text>}

      <Text>Password</Text>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter password"
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>Password is required</Text>}

      <Button title="Signup" onPress={handleSubmit(handleSignUp)} />

      {user && <Text>Welcome, {user.email}!</Text>}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
  },
});
