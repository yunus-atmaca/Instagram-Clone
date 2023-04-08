import React, { FC } from 'react'
import { TextInput, View } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { COLORS, STYLES } from '@src/res'

type Props = {}

const SearchBar: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iContainer}>
        <View style={styles.icon}>
          <EvilIcons name="search" size={24} />
        </View>
        <TextInput placeholder="Search" style={styles.input} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '16@ms',
  },
  iContainer: {
    width: '100%',
    height: '36@ms',
    backgroundColor: COLORS.grey5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: '12@ms',
  },
  icon: {
    width: '40@ms',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    minWidth: '128@ms',
    maxWidth: STYLES.W_WIDTH - moderateScale(88),
    //backgroundColor: 'red',
    height: '100%',
    fontSize: 16,
    fontWeight: '500',
    marginEnd: '12@ms',
  },
})

export default SearchBar
