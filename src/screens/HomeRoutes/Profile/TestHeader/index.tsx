import React, { FC, useState, useRef } from 'react'
import {
  TouchableOpacity,
  Text,
  StatusBar,
  Platform,
  Dimensions,
  View,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated'

import { TabView, TabBar } from 'react-native-tab-view'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const TabBarHeight = 48
const HeaderHeight = 300
const SafeStatusBar = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
})
const tab1ItemSize = (windowWidth - 30) / 2
const tab2ItemSize = (windowWidth - 40) / 3
const PullToRefreshDist = 150

const TestHeader: FC = () => {
  const [canScroll, setCanScroll] = useState(true)
  const _tabIndex = useRef(0)
  const [tabIndex, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'tab1', title: 'Tab1' },
    { key: 'tab2', title: 'Tab2' },
  ])
  const [tab1Data] = useState(Array(40).fill(0))
  const [tab2Data] = useState(Array(30).fill(0))

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y
    },
  })

  const rednerTab1Item = ({ item, index }: any) => {
    return (
      <View
        style={{
          borderRadius: 16,
          marginLeft: index % 2 === 0 ? 0 : 10,
          width: tab1ItemSize,
          height: tab1ItemSize,
          backgroundColor: '#aaa',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{index}</Text>
      </View>
    )
  }

  const rednerTab2Item = ({ item, index }: any) => {
    return (
      <View
        style={{
          marginLeft: index % 3 === 0 ? 0 : 10,
          borderRadius: 16,
          width: tab2ItemSize,
          height: tab2ItemSize,
          backgroundColor: '#122322',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{index}</Text>
      </View>
    )
  }

  const renderScene = ({ route }: any) => {
    const focused = route.key === routes[tabIndex].key
    let numCols
    let data
    let renderItem
    switch (route.key) {
      case 'tab1':
        numCols = 2
        data = tab1Data
        renderItem = rednerTab1Item
        break
      case 'tab2':
        numCols = 3
        data = tab2Data
        renderItem = rednerTab2Item
        break
      default:
        return null
    }
    return (
      <Animated.FlatList
        scrollToOverflowEnabled={true}
        scrollEnabled={canScroll}
        //{...listPanResponder.panHandlers}
        numColumns={numCols}
        /*ref={ref => {
          if (ref) {
            const found = listRefArr.current.find(e => e.key === route.key)
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              })
            }
          }
        }}*/
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        //onMomentumScrollBegin={onMomentumScrollBegin}
        //onScrollEndDrag={onScrollEndDrag}
        //onMomentumScrollEnd={onMomentumScrollEnd}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{
          paddingTop: HeaderHeight + TabBarHeight,
          paddingHorizontal: 10,
          minHeight: windowHeight - SafeStatusBar! + HeaderHeight,
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => 'key' + i}
      />
    )
  }

  const renderLabel = ({ route, focused }: any) => {
    return (
      <Text style={[styles.label, { opacity: focused ? 1 : 0.5 }]}>
        {route.title}
      </Text>
    )
  }

  const renderTabBar = (props: any) => {
    const y = interpolate(scrollY.value, [0, HeaderHeight], [HeaderHeight, 0], {
      extrapolateRight: Extrapolation.CLAMP,
      extrapolateLeft: Extrapolation.CLAMP,
    })
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{ translateY: y }],
          width: '100%',
        }}>
        <TabBar
          {...props}
          onTabPress={({ route, preventDefault }) => {
            /*if (isListGliding.current) {
              preventDefault()
            }*/
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    )
  }

  const renderHeader = () => {
    const y = interpolate(
      scrollY.value,
      [0, HeaderHeight],
      [0, -HeaderHeight],
      {
        extrapolateRight: Extrapolation.CLAMP,
        extrapolateLeft: Extrapolation.CLAMP,
      },
    )
    return (
      <Animated.View
        //{...headerPanResponder.panHandlers}
        style={[styles.header, { transform: [{ translateY: y }] }]}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center' }}
          activeOpacity={1}
          onPress={() => console.debug('header Clicked!')}>
          <Text>Pull to Refresh Header</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <View style={styles.container}>
      <TabView
        onSwipeStart={() => setCanScroll(false)}
        onSwipeEnd={() => setCanScroll(true)}
        onIndexChange={id => {
          _tabIndex.current = id
          setIndex(id)
        }}
        navigationState={{ index: tabIndex, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: windowWidth,
        }}
      />
      {renderHeader()}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#FFCC80',
    height: TabBarHeight,
  },
  indicator: { backgroundColor: '#222' },
  label: { fontSize: 16, color: '#222' },
  header: {
    height: HeaderHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#FFA088',
  },
})

export default TestHeader
