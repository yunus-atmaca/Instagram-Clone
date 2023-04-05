import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'

import { Input } from '@src/components'

const Login: FC<CreatorScreenProps<'Login'>> = ({}) => {
  return (
    <View style={styles.container}>
      <Input
        contentContainer={{ marginTop: 150 }}
        placeholder="Username, email or mobile number"
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'blue',
  },
})

export default Login
