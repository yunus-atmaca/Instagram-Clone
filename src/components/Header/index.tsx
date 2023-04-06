import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'

import { getNavContainerRef } from '@src/types/navigation'

type Props = {
  onPrefix?: () => void
  onPostfix?: () => void
  prefixIc?: JSX.Element
  postfixIc?: JSX.Element
}

const Header: FC<Props> = ({ onPrefix, onPostfix, prefixIc, postfixIc }) => {
  const _onPrefix = () => {
    onPrefix ? onPrefix() : getNavContainerRef().goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={_onPrefix}
        activeOpacity={0.6}
        style={styles.button}>
        <Icon
          name="ios-chevron-back"
          size={36}
          color="black"
          style={{ padding: 0 }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    height: '56@ms',
    width: '100%',
    paddingHorizontal: '16@ms',
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: '100%',
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
})

export default Header
