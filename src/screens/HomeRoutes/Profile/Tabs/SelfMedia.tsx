import React, { FC } from 'react'
import { ListRenderItem, View } from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'
import { ScaledSheet } from 'react-native-size-matters'

const DATA = [0, 1, 2, 3, 4]

import EmptyPage from './EmptyPage'

const SelfMedia: FC = () => {
  return (
    <Tabs.FlatList
      bounces={false}
      ListHeaderComponent={
        <EmptyPage
          title="Profile"
          description="When you share photos and videos, they'll appear on profile."
          buttonText="Share your first photo or video"
        />
      }
      data={[]}
      renderItem={null}
      keyExtractor={(_, i) => 'k-' + i}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default SelfMedia
