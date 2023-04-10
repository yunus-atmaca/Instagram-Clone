import React, { FC } from 'react'
import { View, StyleProp, ViewStyle, Image, ImageStyle } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScaledSheet } from 'react-native-size-matters'

import { STYLES } from '@src/res'
import { IVideo, IMedia } from '@src/types/types'
import { getImg, getThumbnail } from '@src/data/generateData'

type Props = {
  slotNumber?: number
  has: boolean
  media: IMedia[]
}

const SINGLE_W = STYLES.S_WIDTH / 3

const Slot: FC<Props> = ({ media, slotNumber = 1, has }) => {
  const getSlotS = () => {
    let def: StyleProp<ViewStyle> = {
      paddingTop: 2,
      width: (slotNumber === 4 ? 2 : 1) * SINGLE_W,
      height: (slotNumber > 1 ? 2 : 1) * SINGLE_W,
      backgroundColor: 'white',
    }
    let pH: StyleProp<ViewStyle> = { paddingHorizontal: 2 }
    let pS: StyleProp<ViewStyle> = { paddingStart: 2 }

    return [def, has ? pH : pS]
  }

  const getIcon = () => {
    if (media[0].type === 'video')
      return <Entypo name="video" size={18} color={'white'} />
    if (media[0].type === 'image' && media.length > 1)
      return <Ionicons name="images" size={18} color={'white'} />
    return null
  }

  const getImgS = (): StyleProp<ImageStyle> => {
    let w = (slotNumber === 4 ? 2 : 1) * SINGLE_W
    let h = (slotNumber > 1 ? 2 : 1) * SINGLE_W

    h = h - 2
    w = w - (has ? 4 : 2)

    return {
      width: w,
      height: h,
    }
  }

  //console.debug('SlotMedia -> ', media)
  return (
    <View style={getSlotS()}>
      <Image
        source={
          media[0].type === 'video'
            ? getThumbnail((media[0].data as IVideo).thumbnail)
            : getImg(media[0].data as string)
        }
        style={getImgS()}
        resizeMode={'cover'}
      />
      <View style={styles.icon}>{getIcon()}</View>
    </View>
  )
}

const styles = ScaledSheet.create({
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '36@ms',
    height: '36@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Slot
