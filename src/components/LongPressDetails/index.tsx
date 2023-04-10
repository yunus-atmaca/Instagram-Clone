import React, { FC, useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import Animated from 'react-native-reanimated'
import { useAppSelector } from '@src/types/store'
import { COLORS } from '@src/res'

import LPImage from './LPImage'
import Footer from './Footer'

type Props = {}

const LongPressDetails: FC<Props> = () => {
  const { event, data } = useAppSelector(s => s.touchController)

  useEffect(() => {
    //console.debug(data)
  }, [data])

  //console.debug(data?.data[0].type)
  if (event === 'out' || data === null) return null
  return (
    <View style={styles.container}>
      <Animated.View style={styles.content}>
        <View style={styles.cAvatar}>
          <Image
            source={{ uri: data?.user.picture.medium }}
            style={styles.avatar}
          />
          <Text style={styles.name}>
            {data?.user.name.first + ' ' + data?.user.name.last}
          </Text>
        </View>
        <Image />
        {data?.data[0].type === 'video' ? null : (
          <LPImage name={data?.data[0].data as string} />
        )}
        <Footer />
      </Animated.View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'red',
    paddingHorizontal: '16@ms',
    paddingVertical: '12@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
  },
  cAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    backgroundColor: COLORS.white,
    width: '100%',
    height: '48@ms',
    paddingHorizontal: '16@ms',
  },
  avatar: {
    width: '28@ms',
    height: '28@ms',
    borderRadius: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginStart: '8@ms',
  },
})

export default LongPressDetails
