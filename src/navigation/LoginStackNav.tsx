import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginRoutes } from '@src/types/navigation'

const Stack = createStackNavigator<LoginRoutes>()

import { Login, CreateNewAccount, ForgotPassword } from '@src/screens'

const LoginStackNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'CreateNewAccount'} component={CreateNewAccount} />
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default LoginStackNav
