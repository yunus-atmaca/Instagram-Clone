import React, { FC } from 'react'
import { Image, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { ScaledSheet } from 'react-native-size-matters'

import { IMedia, IPost } from '@src/types/types'
import { STYLES } from '@src/res'
import { getImg } from '@src/data/generateData'

type Props = {
  p: IPost
}

const Posts: FC<Props> = ({ p }) => {
  const renderPage = (media: IMedia, index: number) => {
    return (
      <View style={styles.page} key={index}>
        <Image source={getImg(media.data as string)} />
      </View>
    )
  }

  return (
    <PagerView
      orientation={'horizontal'}
      style={styles.pagerView}
      initialPage={0}>
      {p.media.map((m, i) => {
        return renderPage(m, i)
      })}
    </PagerView>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: STYLES.W_WIDTH,
    //minHeight:300,
    backgroundColor: 'red',
    marginVertical: '2@ms',
  },
  pagerView: {
    minHeight: 300,
  },
  page: {
    width: STYLES.W_WIDTH,
    backgroundColor: 'green',
    height: 360,
    resizeMode: 'contain',
  },
})

export default Posts
