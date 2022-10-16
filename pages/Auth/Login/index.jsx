import { ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import AppInput from '../../../components/AppInput';
import { FormContainer, FormGroup, StretchContainer } from './styles';
import AppButton from '../../../components/AppButton';
import { AdaptiveContainer } from '../../../components/common';

const LoginScreen = ({ navigation }) => {
  const navigateToSRegisterScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        }}
        style={{ height: 200 }}
        resizeMode="cover"
      />
      <FormContainer>
        <StretchContainer style={{ marginBottom: 40 }}>
          <FormGroup>
            <AppInput
              placeholder="Email or phone"
              left={<TextInput.Icon icon="email-outline" />}
            />
          </FormGroup>
          <FormGroup>
            <AppInput
              left={<TextInput.Icon icon="lock-outline" />}
              placeholder="Password"
              secureTextEntry
            />
          </FormGroup>
          <AppButton>LOGIN</AppButton>
          <AdaptiveContainer>
            <AppButton mode="text" style={{ marginTop: 10 }}>
              Forgot Password?
            </AppButton>
          </AdaptiveContainer>
        </StretchContainer>
        <AdaptiveContainer>
          <AppButton mode="outlined" onPress={navigateToSRegisterScreen}>
            CREATE NEXT SOCIAL ACCOUNT
          </AppButton>
        </AdaptiveContainer>
      </FormContainer>
    </ScrollView>
  );
};

export default LoginScreen;
