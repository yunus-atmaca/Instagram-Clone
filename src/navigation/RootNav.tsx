import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { getNavContainerRef } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'
import LoginStackNav from './LoginStackNav'
import HomeNav from './HomeNav'

const RootNav = () => {
  const user = useAppSelector(s => s.authController.user)

  const _onStateChange = () => {}

  return (
    <NavigationContainer
      ref={getNavContainerRef()}
      onStateChange={_onStateChange}>
      {user ? <HomeNav /> : <LoginStackNav />}
    </NavigationContainer>
  )
}

export default RootNav
