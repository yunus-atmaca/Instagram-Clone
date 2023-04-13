import React from 'react'
import { NavigationContainer, NavigationState } from '@react-navigation/native'

import { getLNRef, getHNRef } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'
import LoginStackNav from './LoginStackNav'
import HomeNav from './HomeNav'

const RootNav = () => {
  const user = useAppSelector(s => s.authController.user)

  const _onStateChange = (state: NavigationState | undefined) => {
    //console.debug('navigation state -> ', state?.routeNames, state?.index)
  }

  if (user) {
    return (
      <NavigationContainer ref={getHNRef()} onStateChange={_onStateChange}>
        <HomeNav />
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer ref={getLNRef()} onStateChange={_onStateChange}>
      <LoginStackNav />
    </NavigationContainer>
  )
}

export default RootNav
