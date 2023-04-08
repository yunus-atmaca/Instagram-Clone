import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { FlashList, FlashListProps } from '@shopify/flash-list'

import { HRSScreenPropsC } from '@src/types/navigation'
import { COLORS, STYLES } from '@src/res'
import { SearchBar } from '@src/components'
import { generateSearchData } from '@src/data/generateData'
import { ISearchData } from '@src/types/types'

import Media from './Media'

const Search: FC<HRSScreenPropsC<'SearchTab', 'Search'>> = () => {
  const media = generateSearchData()

  const renderMedia: FlashListProps<ISearchData>['renderItem'] = ({
    item,
    index,
  }) => {
    return <Media m={item} index={index} />
  }

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlashList<ISearchData>
        data={media}
        renderItem={renderMedia}
        keyExtractor={(_, i) => 'm-' + i}
        showsVerticalScrollIndicator={false}
        //estimatedItemSize={STYLES.S_WIDTH / 2}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})
export default Search
