import React, { FC } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'
import { useAppSelector } from '@src/types/store'
import { IUser } from '@src/types/types'

const TabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  const user = useAppSelector(s => s.authController.user)

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: state.index === 3 ? 'black' : 'white' },
      ]}>
      {state.routes.map((route, index) => {
        const label = route.name
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true } as any)
          }
        }
        return (
          <TouchableOpacity key={label} onPress={onPress} style={styles.icon}>
            {getIcon(label, isFocused, state.index, user)}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const getIcon = (
  label: string,
  isFocused: boolean,
  index: number,
  user?: IUser,
) => {
  const icColor = index === 3 ? 'white' : 'black'
  switch (label) {
    case 'HomeTab':
      return (
        <Ionicons
          color={icColor}
          size={20}
          name={isFocused ? 'home' : 'home-outline'}
        />
      )
    case 'SearchTab':
      return (
        <Ionicons
          color={icColor}
          size={20}
          name={isFocused ? 'search' : 'search-outline'}
        />
      )
    case 'NewPostTab':
      return <FontAwesome color={icColor} size={20} name={'plus-square-o'} />
    case 'ReelsTab':
      return <AntDesign color={icColor} size={20} name={'playcircleo'} />
    case 'ProfileTab':
      return (
        <Image style={styles.user} source={{ uri: user?.picture.medium }} />
      )

    default:
      break
  }
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '48@ms',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.grey,
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  user: {
    width: '20@ms',
    height: '20@ms',
    borderRadius: 100,
    borderColor: COLORS.grey,
    borderWidth: 0.5,
  },
})

export default TabBar
