import React, { FC, useRef, useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { Tabs } from 'react-native-collapsible-tab-view'

import { COLORS } from '@src/res'
import { HRSScreenPropsC } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'
import { BSheet } from '@src/components'

import Header from './Header'
import PersistentHeader from './PersistentHeader'
import {
  USER_INFO_HEIGHT,
  BUTTONS_HEIGHT,
  PERSISTENT_HEADER_HEIGHT,
} from './Constant'
import SelfMedia from './Tabs/SelfMedia'
import TaggedMedia from './Tabs/TaggedMedia'
import { IBSItem, PSItems, PPItems } from '@src/components/BottomSheet/items'

const Profile: FC<HRSScreenPropsC<'ProfileTab', 'Profile'>> = () => {
  const [bOpen, setBOpen] = useState(false)
  const bItems = useRef<IBSItem>()
  const user = useAppSelector(s => s.authController.user!)

  const _onSettings = () => {
    bItems.current = PSItems
    setBOpen(true)
  }

  const _onPlus = () => {
    bItems.current = PPItems
    setBOpen(true)
  }

  return (
    <View style={styles.container}>
      <Tabs.Container
        //renderTabBar={props => <TabBar {...props} />}
        headerHeight={USER_INFO_HEIGHT + BUTTONS_HEIGHT}
        renderHeader={() => <Header avatar={user.picture.large} />}>
        <Tabs.Tab name="self">
          <SelfMedia />
        </Tabs.Tab>
        <Tabs.Tab name="tag">
          <TaggedMedia />
        </Tabs.Tab>
      </Tabs.Container>
      <PersistentHeader
        onPlus={_onPlus}
        onSettings={_onSettings}
        username={user.name.first}
      />
      <BSheet onCloseBottomSheet={setBOpen} open={bOpen} bs={bItems.current!} />
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
