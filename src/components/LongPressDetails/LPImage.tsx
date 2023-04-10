import React, { FC } from 'react'
import { Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { getImg } from '@src/data/generateData'
import { STYLES } from '@src/res'

type Props = {
  name: string
}

const LPImage: FC<Props> = ({ name }) => {
  return (
    <Image
      style={{
        width: STYLES.S_WIDTH - moderateScale(32),
      }}
      source={getImg(name)}
    />
  )
}

export default LPImage
