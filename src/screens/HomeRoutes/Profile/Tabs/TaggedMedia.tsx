import React, { FC } from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'

import EmptyPage from './EmptyPage'

const TaggedMedia: FC = () => {
  return (
    <Tabs.FlatList
      bounces={false}
      ListHeaderComponent={
        <EmptyPage
          title="Photos and videos of you"
          description="When people tag you in photos and videos, they'll appear here."
        />
      }
      data={[]}
      renderItem={null}
      keyExtractor={(_, i) => 'k-' + i}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default TaggedMedia
