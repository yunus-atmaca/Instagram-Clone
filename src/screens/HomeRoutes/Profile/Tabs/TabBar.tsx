import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { TabBarProps } from 'react-native-tab-view'
import { ScaledSheet } from 'react-native-size-matters'
import { NavigationState, SceneRendererProps, TabBarProps } from 'react-native-tab-view'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type TRoute = {
  key: string
  title: string
}

const TabBar: FC<
  SceneRendererProps & {
    navigationState: NavigationState<TRoute>
  }
> = ({ navigationState, jumpTo, ...props }) => {
  console.debug('Tabbar -> ', props)

  const getTabIcon = (r: TRoute, i: number, isFocused: boolean) => {
    const color = isFocused ? 'black' : 'grey'
    const bWidth = isFocused ? 1 : 0.5

    const sStyles = {
      borderBottomWidth: bWidth,
      borderBottomColor: color,
    }

    if (r.key === 'tag') {
      return (
        <TouchableOpacity
          onPress={() => jumpTo('tag')}
          style={[styles.tab, sStyles]}>
          <FontAwesome5
            name="house-user"
            size={20}
            color={isFocused ? 'black' : 'grey'}
          />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        onPress={() => jumpTo('self')}
        style={[styles.tab, sStyles]}>
        <FontAwesome5
          name="th"
          size={20}
          color={isFocused ? 'black' : 'grey'}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {/*navigationState.routes.map((r, i) => {
        const isFocused = i === navigationState.index
        return getTabIcon(r, i, isFocused)
      })*/}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '40@ms',
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default TabBar
