import React, { FC } from 'react'
import { View, ListRenderItem } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { MaterialTabBar, Tabs } from 'react-native-collapsible-tab-view'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { COLORS } from '@src/res'
import { HRSScreenPropsC } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'

import Header from './Header'
import PersistentHeader from './PersistentHeader'
import {
  USER_INFO_HEIGHT,
  BUTTONS_HEIGHT,
  PERSISTENT_HEADER_HEIGHT,
} from './Constant'
import SelfMedia from './Tabs/SelfMedia'
import TaggedMedia from './Tabs/TaggedMedia'
import TabBar from './Tabs/TabBar'
import { TabBarProps } from 'react-native-tab-view'
import { TabName } from 'react-native-collapsible-tab-view/lib/typescript/src/types'

const Profile: FC<HRSScreenPropsC<'ProfileTab', 'Profile'>> = () => {
  const user = useAppSelector(s => s.authController.user!)

  return (
    <View style={styles.container}>
      <Tabs.Container
        //renderTabBar={props => <TabBar {...props} />}
        /*renderTabBar={props => {
          console.debug('props -> ', props)
          return <TabBar {...props} />
        }}*/
        renderTabBar={props => {
          const { focusedTab } = props

          console.debug('focusedTab -> ', props)
          return (
            <MaterialTabBar
              {...props}
              TabItemComponent={() => (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    //backgroundColor:'red',
                    height:40
                  }}>
                  <FontAwesome5
                    name="house-user"
                    size={20}
                    //color={isFocused ? 'black' : 'grey'}
                  />
                </View>
              )}
            />
          )
        }}
        headerHeight={USER_INFO_HEIGHT + BUTTONS_HEIGHT}
        renderHeader={() => <Header avatar={user.picture.large} />}>
        <Tabs.Tab name="self">
          <SelfMedia />
        </Tabs.Tab>
        <Tabs.Tab name="tag">
          <TaggedMedia />
        </Tabs.Tab>
      </Tabs.Container>
      <PersistentHeader username={user.name.first} />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: PERSISTENT_HEADER_HEIGHT,
  },
})

export default Profile
