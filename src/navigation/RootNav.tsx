import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { getNavContainerRef } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'
import LoginStackNav from './LoginStackNav'

const RootNav = () => {
  const user = useAppSelector(s => s.authController.user)

  const _onStateChange = () => {}

  return (
    <NavigationContainer
      ref={getNavContainerRef()}
      onStateChange={_onStateChange}>
      {user ? null : <LoginStackNav />}
    </NavigationContainer>
  )
}

export default RootNav
