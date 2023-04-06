import React, { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'
import { Button, Header, Input } from '@src/components'
import { STYLES, COLORS } from '@src/res'

const ForgotPassword: FC<CreatorScreenProps<'ForgotPassword'>> = ({}) => {
  const [iType, setIType] = useState<'number' | 'string'>('string')

  const onNeedMoreHelp = () => {}

  const onSearchBy = () =>
    setIType(prev => (prev === 'string' ? 'number' : 'string'))

  return (
    <View style={styles.container}>
      <Header />
      <Text style={STYLES.default.title}>Find your account</Text>
      <Text style={STYLES.default.description}>
        {iType === 'string'
          ? 'Enter your username or email.'
          : 'Enter your mobile number.'}
      </Text>
      <Text
        onPress={onNeedMoreHelp}
        style={[STYLES.default.description, { color: COLORS.blue }]}>
        Need more help?
      </Text>
      <Input
        contentContainer={styles.cInput}
        placeholder={iType === 'string' ? 'Username or email' : 'Mobile number'}
      />
      <Button buttonContainer={styles.bFindAcc} text="Find Account" />
      <Button
        onClick={onSearchBy}
        buttonContainer={styles.bSearch}
        text={
          iType === 'string'
            ? 'Search by mobile number instead'
            : 'Search by email instead'
        }
        textStyle={styles.tBSearch}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
  },
  cInput: {
    marginTop: '16@ms',
  },
  bFindAcc: {
    backgroundColor: '#2d55ff',
    height: '48@ms',
    marginVertical: '12@ms',
  },
  bSearch: {
    backgroundColor: 'transparent',
  },
  tBSearch: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
})

export default ForgotPassword
