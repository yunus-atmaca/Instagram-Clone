import type { StackScreenProps } from '@react-navigation/stack'
import type { NavigationProp } from '@react-navigation/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type LoginRoutes = {
  Login: undefined
  CreateNewAccount: undefined
  ForgotPassword: undefined
}

export type AllRoutes = LoginRoutes

export type RouteProp = NavigationProp<AllRoutes>
export type CreatorScreenProps<K extends keyof AllRoutes> = StackScreenProps<
  AllRoutes,
  K
>

const _navReference = createNavigationContainerRef<AllRoutes>()
export const getNavContainerRef =
  (): NavigationContainerRefWithCurrent<AllRoutes> => {
    return _navReference
  }
