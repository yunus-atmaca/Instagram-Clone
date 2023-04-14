import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { PERSISTENT_HEADER_HEIGHT } from '../Constant'
import { COLORS, STYLES } from '@src/res'

type Props = {
  title: string
  description: string
  buttonText?: string
}

const EmptyPage: FC<Props> = ({ title, description, buttonText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cPlus}>
        <FontAwesome name={'plus-square-o'} size={60} color={'black'} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {buttonText && <Text style={styles.buttonText}>{buttonText}</Text>}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    height: STYLES.W_HEIGHT - PERSISTENT_HEADER_HEIGHT - moderateScale(64),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  cPlus: {
    width: '96@ms',
    height: '96@ms',
    borderRadius: 200,
    borderWidth: 4,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '700',
    marginVertical: '10@ms',
    marginHorizontal: '100@ms',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: COLORS.grey,
    textAlign: 'center',
    marginHorizontal: '64@ms',
  },
  buttonText: {
    color: COLORS.blue,
    fontSize: 14,
    marginVertical: '10@ms',
    textAlign: 'center',
  },
})

export default EmptyPage
