import React, { FC, useEffect } from 'react'
import { Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { getImg } from '@src/data/generateData'
import { STYLES } from '@src/res'

type Props = {
  name: string
}

const LPImage: FC<Props> = ({ name }) => {
  useEffect(() => {
  }, [])

  return (
    <Image
      style={{
        width: STYLES.S_WIDTH - moderateScale(32),
        maxHeight: STYLES.W_HEIGHT - moderateScale(12 + 5 * 48),
      }}
      source={getImg(name)}
    />
  )
}

export default LPImage
