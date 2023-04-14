import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {
  MaterialTabBar,
  MaterialTabItem,
} from 'react-native-collapsible-tab-view'

const TabBar: FC<any> = props => {
  //console.debug(Object.keys(props))
  return (
    <MaterialTabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      TabItemComponent={props => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
            }}>
            {props.name === 'self' ? (
              <FontAwesome5
                name="th"
                size={20}
                //color={isFocused ? 'black' : 'grey'}
              />
            ) : (
              <FontAwesome5
                name="house-user"
                size={20}
                //color={isFocused ? 'black' : 'grey'}
              />
            )}
          </View>
        )
      }}
    />
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '40@ms',
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
