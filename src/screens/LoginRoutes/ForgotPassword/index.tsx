import React, { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'
import { Button, Header, Input } from '@src/components'
import { COLORS } from '@src/res'

const ForgotPassword: FC<CreatorScreenProps<'ForgotPassword'>> = ({}) => {
  const [description, setDescription] = useState<
    'Enter your username or email.' | 'Enter your mobile number.'
  >('Enter your username or email.')

  const [pHolder, setPHolder] = useState<'Username or email' | 'Mobile number'>(
    'Username or email',
  )

  const onNeedMoreHelp = () => {}

  const onSearchBy = () => {
    setDescription(prev =>
      prev === 'Enter your mobile number.'
        ? 'Enter your username or email.'
        : 'Enter your mobile number.',
    )

    setPHolder(prev =>
      prev === 'Mobile number' ? 'Username or email' : 'Mobile number',
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Find your account</Text>
      <Text style={styles.description}>{description}</Text>
      <Text
        onPress={onNeedMoreHelp}
        style={[styles.description, { color: COLORS.blue }]}>
        Need more help?
      </Text>
      <Input contentContainer={styles.cInput} placeholder={pHolder} />
      <Button buttonContainer={styles.bFindAcc} text="Find Account" />
      <Button
        onClick={onSearchBy}
        buttonContainer={styles.bSearch}
        text="Search by mobile number instead"
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
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: 'black',
    paddingStart: '16@ms',
    marginTop: '12@ms',
  },
  description: {
    fontSize: 14,
    color: 'black',
    paddingStart: '16@ms',
    marginTop: '8@ms',
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
