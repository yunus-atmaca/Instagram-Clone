import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeRoutes } from '@src/types/navigation'
import { TabBar } from '@src/components'

const Tab = createBottomTabNavigator<HomeRoutes>()

import { Home, Reels, NewPost, Profile, Search } from '@src/screens'

const HomeNav: FC = () => {
  return (
    <Tab.Navigator
      tabBar={p => <TabBar {...p} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'HomeTab'} component={Home} />
      <Tab.Screen name={'SearchTab'} component={Search} />
      <Tab.Screen name={'NewPostTab'} component={NewPost} />
      <Tab.Screen name={'ReelsTab'} component={Reels} />
      <Tab.Screen name={'ProfileTab'} component={Profile} />
    </Tab.Navigator>
  )
}

export default HomeNav
