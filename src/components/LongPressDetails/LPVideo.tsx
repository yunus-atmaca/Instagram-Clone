import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import Video, { OnLoadData } from 'react-native-video'

import { getVideo } from '@src/data/generateData'
import { IVideo } from '@src/types/types'
import { COLORS, STYLES } from '@src/res'

type Props = {
  v: IVideo
}

const LPVideo: FC<Props> = ({ v }) => {
  const [vStyles, setVS] = useState({ width: 0, height: 0 })

  const _onLoad = (d: OnLoadData) => {
    const { width, height } = d.naturalSize

    //console.debug('naturalSize -> ', width, height)
    const s16 = moderateScale(16)
    const s12 = moderateScale(12)
    const s48 = moderateScale(48)

    const ratio = width / height

    const maxW = STYLES.W_WIDTH - s16 * 2
    const maxH = STYLES.W_HEIGHT - s12 * 2 - s48 * 5

    const calculatedHeight = (maxW * height) / width
    const calculatedWidth = (maxH * width) / height

    //console.debug('ratio ->', ratio)
    //console.debug('maxW -> ', maxW)
    //console.debug('maxH -> ', maxH)
    //console.debug('calculatedHeight -> ', calculatedHeight)
    //console.debug('calculatedWidth -> ', calculatedWidth)
    //console.debug(width, height)

    if (calculatedHeight > maxH) {
      setVS({ width: calculatedWidth, height: maxH })
    } else {
      setVS({ width: maxW, height: calculatedHeight })
    }
  }

  return (
    <View style={styles.container}>
      <Video
        onLoad={_onLoad}
        source={getVideo(v.name)}
        style={[styles.v, vStyles]}
        resizeMode={'stretch'}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
  },
  v: {},
})

export default LPVideo
