import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeRoutes } from '@src/types/navigation'
import { TabBar } from '@src/components'

const Tab = createBottomTabNavigator()

import { Home, Reels, NewPost, Profile, Search } from '@src/screens'

const HomeNav: FC = () => {
  return (
    <Tab.Navigator
      tabBar={p => <TabBar {...p} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Search'} component={Search} />
      <Tab.Screen name={'NewPost'} component={NewPost} />
      <Tab.Screen name={'Reels'} component={Reels} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  )
}

export default HomeNav
