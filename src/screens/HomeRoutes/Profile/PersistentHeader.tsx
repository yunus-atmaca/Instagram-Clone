import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'

import { PERSISTENT_HEADER_HEIGHT } from './Constant'
import { COLORS } from '@src/res'

type Props = {
  username: string
}

const PersistentHeader: FC<Props> = ({ username }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{username}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={18} />
      </View>
      <View style={styles.content}>
        <FontAwesome style={{ marginEnd: 18 }} name="plus-square-o" size={24} />
        <Octicons name="three-bars" size={24} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    height: PERSISTENT_HEADER_HEIGHT,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey,
    paddingHorizontal: '16@ms',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginEnd: 6,
  },
})

export default PersistentHeader
