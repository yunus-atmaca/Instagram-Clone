import type { StackScreenProps } from '@react-navigation/stack'
import type { NavigationProp } from '@react-navigation/core'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type StackParamList = {}

export type LoginRoutes = {
  Login: undefined
  CreateNewAccount: undefined
  ForgotPassword: undefined
}

export type HomeRoutes = {
  Home: undefined
  NewPost: undefined
  Profile: undefined
  Reels: undefined
  Search: undefined
}

export type AllRoutes = LoginRoutes | HomeRoutes
export type RouteProp = NavigationProp<AllRoutes>

//Login routes screen props creator
export type LRScreenPropsC<K extends keyof LoginRoutes> = StackScreenProps<
  LoginRoutes,
  K
>

//Home routes screen props creator
export type HRSScreenPropsC<K extends keyof HomeRoutes> = CompositeScreenProps<
  BottomTabScreenProps<HomeRoutes, K>,
  StackScreenProps<StackParamList>
>

export const _navReference = createNavigationContainerRef<AllRoutes>()
export const getNavContainerRef =
  (): NavigationContainerRefWithCurrent<AllRoutes> => {
    return _navReference
  }
