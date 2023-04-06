import React, { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { LRScreenPropsC, getLNRef } from '@src/types/navigation'
import { STYLES, COLORS } from '@src/res'
import { Button, Header, Input } from '@src/components'

const texts = {
  number: {
    title: `What's your mobile number?`,
    description:
      'Enter the mobile number where you can be contacted. No one will see this on your profile',
    placeholder: 'Mobile number',
    info: 'You may receive SMS notification from us for security and login purposes.',
    signUp: 'Sign up with email',
  },
  string: {
    title: `What's your email?`,
    description:
      'Enter the email where you can be contacted. No one will see this on your profile',
    placeholder: 'Email',
    info: undefined,
    signUp: 'Sign up with mobile number',
  },
}

const CreateNewAccount: FC<LRScreenPropsC<'CreateNewAccount'>> = ({}) => {
  const [iType, setIType] = useState<'number' | 'string'>('number')

  return (
    <View style={styles.container}>
      <View>
        <Header />
        <Text style={STYLES.default.title}>{texts[iType].title}</Text>
        <Text style={STYLES.default.description}>
          {texts[iType].description}
        </Text>

        <Input
          contentContainer={styles.cInput}
          placeholder={texts[iType].placeholder}
          infoText={texts[iType].info}
        />

        <Button buttonContainer={styles.bNext} text={'Next'} />
        <Button
          textStyle={styles.tBSign}
          buttonContainer={styles.bSign}
          text={texts[iType].signUp}
          onClick={() =>
            setIType(prev => (prev === 'number' ? 'string' : 'number'))
          }
        />
      </View>
      <Button
        onClick={() => getLNRef().goBack()}
        textStyle={styles.tBAlreadyHA}
        buttonContainer={styles.bAlreadyHA}
        text={'Already have an account?'}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
  },
  cInput: {
    marginTop: '16@ms',
  },
  bNext: {
    backgroundColor: COLORS.blue,
    height: '48@ms',
    marginVertical: '12@ms',
  },
  bSign: {
    backgroundColor: COLORS.transparent,
    height: '48@ms',
    borderWidth: 0.5,
    borderColor: COLORS.grey,
  },
  tBSign: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
  },
  bAlreadyHA: {
    backgroundColor: COLORS.transparent,
    height: '48@ms',
  },
  tBAlreadyHA: {
    color: COLORS.blue,
    fontSize: 12,
  },
})

export default CreateNewAccount
