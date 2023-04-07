import React, { FC } from 'react'
import { FlatList, FlatListProps, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { generateRandomStories } from '@src/data/generateData'
import { IStoy } from '@src/types/types'
import Story from './Story'
import { COLORS } from '@src/res'
import { useAppSelector } from '@src/types/store'

const Stories: FC = ({}) => {
  const user = useAppSelector(s => s.authController.user)
  const stories = generateRandomStories()

  const renderStory: FlatListProps<IStoy>['renderItem'] = ({ item, index }) => {
    return (
      <>
        {index === 0 && (
          <Story userAvatar={user?.picture.medium} isCreator s={item} />
        )}
        <Story s={item} />
      </>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderStory}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => 'story-' + i}
        contentContainerStyle={styles.flatList}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey1,
    paddingBottom: '12@ms',
  },
  flatList: {},
})

export default Stories
