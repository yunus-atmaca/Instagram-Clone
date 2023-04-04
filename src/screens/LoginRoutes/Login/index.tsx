import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'

const Login: FC<CreatorScreenProps<'Login'>> = ({}) => {
  return <View style={styles.container}></View>
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
})

export default Login
