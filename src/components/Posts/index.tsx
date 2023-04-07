import React, { FC } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { generateRandomPosts } from '@src/data/generateData'
import { IPost } from '@src/types/types'

import Post from './Post'

type Props = {}

const Posts: FC<Props> = () => {
  const posts = generateRandomPosts()

  const renderPost: FlatListProps<IPost>['renderItem'] = ({ item }) => {
    return <Post p={item} />
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(_, i) => 'post-' + i}
    />
  )
}

const styles = ScaledSheet.create({})

export default Posts
