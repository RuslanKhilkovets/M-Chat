import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';

import {Input, KeyboardScroll, Screen} from '@/components';
import {Button} from '@/components';
import {useAuthMutation} from '@/hooks';
import {AuthContext} from '@/context/Auth/AuthContext';
import {Api} from '@/api';
import registerSchema from '@/validations/register';

export const LoginScreen = () => {
  const [formErrors, setFormErrors] = React.useState<any>({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const {register} = React.useContext(AuthContext);

  const navigation = useNavigation();
  const {
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
  });

  const onRegisterSuccess = async (res: any) => {
    // TODO: add logic

    reset();
    navigation.navigate('Consent');
  };

  const onRegisterError = ({errors}: any) => {
    setFormErrors({
      email: errors?.errors?.email ? errors.errors.email[0] : '',
      password: errors?.errors?.password ? errors.errors.password[0] : '',
    });
  };

  const {mutate: onRegister, isLoading} = useAuthMutation({
    mutationFn: Api?.auth?.register,
    onError: onRegisterError,
    onSuccess: onRegisterSuccess,
  });

  const onSubmit = (data: any) => {
    onRegister(data);
  };

  return (
    <Screen>
      <View style={[styles.container]}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.screenLabel}>Register</Text>
        </View>
        <KeyboardScroll>
          <View style={{gap: 20, paddingVertical: 20}}>
            <Controller
              control={control}
              name="name"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Name"
                  value={value}
                  onChangeText={onChange}
                  error={errors?.password?.message || formErrors?.password}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Phone"
                  value={value}
                  onChangeText={onChange}
                  error={errors?.password?.message || formErrors?.password}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="E-mail"
                  value={value}
                  onChangeText={onChange}
                  error={errors?.email?.message || formErrors?.email}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  error={errors?.password?.message || formErrors?.password}
                  secureTextEntry
                />
              )}
            />
          </View>

          <Button onPress={handleSubmit(onSubmit)} type="primary" fullWidth>
            Sign in
          </Button>
        </KeyboardScroll>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Jersey20-Regular',
    color: '##E1FF00',
    textAlign: 'center',
  },
  screenLabel: {
    fontSize: 50,
    fontFamily: 'Jersey20-Regular',
    color: '#E1FF00',
    marginVertical: 70,
  },
});
