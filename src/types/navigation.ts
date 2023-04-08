import type { StackScreenProps } from '@react-navigation/stack'
import type { NavigationProp } from '@react-navigation/core'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type SearchStack = {
  Search: undefined
  Explore: undefined
}

export type HomeStack = {
  Home: undefined
}

export type NewPostStack = {
  NewPost: undefined
}

export type ProfileStack = {
  Profile: undefined
}

export type ReelsStack = {
  Reels: undefined
}

export type LoginRoutes = {
  Login: undefined
  CreateNewAccount: undefined
  ForgotPassword: undefined
}

export type HomeRoutes = {
  HomeTab: HomeStack
  NewPostTab: NewPostStack
  ProfileTab: ProfileStack
  ReelsTab: ReelsStack
  SearchTab: SearchStack
}

export type AllRoutes = LoginRoutes | HomeRoutes
export type RouteProp = NavigationProp<AllRoutes>

//Login routes screen props creator
export type LRScreenPropsC<K extends keyof LoginRoutes> = StackScreenProps<
  LoginRoutes,
  K
>

//Home routes screen props creator
export type HRSScreenPropsC<
  K extends keyof HomeRoutes,
  T extends keyof HomeRoutes[K],
> = CompositeScreenProps<
  BottomTabScreenProps<HomeRoutes, K>,
  StackScreenProps<HomeRoutes[K], T>
>

//navigation login routes reference
export const _navLRRef = createNavigationContainerRef<LoginRoutes>()
//get login navigation reference
export const getLNRef = (): NavigationContainerRefWithCurrent<LoginRoutes> => {
  return _navLRRef
}

//navigation home routes reference
export const _navHRRef = createNavigationContainerRef<HomeRoutes>()
//get home navigation routes reference
export const getHNRef = (): NavigationContainerRefWithCurrent<HomeRoutes> => {
  return _navHRRef
}
