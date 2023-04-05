import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'
import { Header } from '@src/components'

const ForgotPassword: FC<CreatorScreenProps<'ForgotPassword'>> = ({}) => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
  },
})

export default ForgotPassword
