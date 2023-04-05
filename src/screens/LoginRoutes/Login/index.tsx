import React, { FC } from 'react'
import { View, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'

import { Input, Button } from '@src/components'

const Login: FC<CreatorScreenProps<'Login'>> = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/images/insIc.png')}
      />
      <>
        <Input placeholder="Username, email or mobile number" />
        <Input contentContainer={{ marginTop: 12 }} placeholder="Password" />
        <Button
          contentContainer={{ marginTop: 12 }}
          text={'Log in'}
          buttonContainer={styles.button}
        />
      </>

      <Button
        contentContainer={{ marginTop: 12 }}
        text={'Create New Account'}
        buttonContainer={styles.button}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //backgroundColor: 'blue',
  },
  logo: {
    width: '72@ms',
    height: '72@ms',
    alignSelf: 'center',
    marginVertical: '108@ms',
  },
  button: {
    backgroundColor: '#2d55ff',
  },
})

export default Login
