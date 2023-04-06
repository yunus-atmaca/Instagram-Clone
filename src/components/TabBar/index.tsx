import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

const TabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
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
            {getIcon(label, isFocused)}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const getIcon = (label: string, isFocused: boolean) => {
  switch (label) {
    case 'Home':
      return <Ionicons size={20} name={isFocused ? 'home' : 'home-outline'} />
    case 'Search':
      return (
        <Ionicons size={20} name={isFocused ? 'search' : 'search-outline'} />
      )
    case 'NewPost':
      return <FontAwesome size={20} name={'plus-square-o'} />
    case 'Reels':
      return (
        <Ionicons
          size={20}
          name={isFocused ? 'ios-play-circle-outline' : 'ios-play-circle'}
        />
      )
    case 'Profile':
      return <View style={styles.user}></View>

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
    borderTopColor: COLORS.grey1,
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

  plus: {},
})

export default TabBar
