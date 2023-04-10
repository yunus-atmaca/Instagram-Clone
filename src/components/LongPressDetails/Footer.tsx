import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '@src/res'

const Footer: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name={'hearto'} size={24} />
      </TouchableOpacity>
      <View>
        <Feather name={'user'} size={24} />
      </View>
      <View>
        <Feather name={'send'} size={24} />
      </View>
      <View>
        <MaterialCommunityIcons name={'dots-vertical'} size={24} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    backgroundColor: COLORS.white,
    width: '100%',
    height: '48@ms',
    paddingHorizontal: '24@ms',
    justifyContent: 'space-between',
  },
})

export default Footer
