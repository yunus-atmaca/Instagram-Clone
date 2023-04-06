import React, { FC } from 'react'
import { View, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { LRScreenPropsC, getNavContainerRef } from '@src/types/navigation'

import { Input, Button } from '@src/components'
import { useAppDispatch } from '@src/types/store'
import { setUser } from '@src/store/controllers/auth'

const Login: FC<LRScreenPropsC<'Login'>> = ({}) => {
  const dispatch = useAppDispatch()

  const onLogin = () => {
    dispatch(setUser('user'))
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/images/insIc.png')}
      />
      <View>
        <Input placeholder="Username, email or mobile number" />
        <Input contentContainer={{ marginTop: 12 }} placeholder="Password" />
        <Button
          onClick={onLogin}
          contentContainer={{ marginTop: 12 }}
          text={'Log in'}
          buttonContainer={styles.bLogin}
        />
        <Button
          contentContainer={{ marginTop: 12 }}
          text={'Forgot password?'}
          onClick={() => getNavContainerRef().navigate('ForgotPassword')}
          buttonContainer={styles.bFPassword}
          textStyle={styles.tBCNAcc}
        />
      </View>
      <Button
        onClick={() => getNavContainerRef().navigate('CreateNewAccount')}
        text={'Create New Account'}
        buttonContainer={styles.bCNAcc}
        textStyle={styles.tBCNAcc}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
    justifyContent: 'space-between',
    paddingTop: '108@ms',
    paddingBottom: '16@ms',
  },
  logo: {
    width: '72@ms',
    height: '72@ms',
    alignSelf: 'center',
  },
  bLogin: {
    backgroundColor: '#2d55ff',
    height: '48@ms',
  },
  bCNAcc: {
    backgroundColor: 'transparent',
    paddingVertical: '8@ms',
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  tBCNAcc: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  bFPassword: {
    backgroundColor: 'transparent',
    paddingVertical: '8@ms',
  },
})

export default Login
