import React, { FC, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { FlashList, FlashListProps } from '@shopify/flash-list'

import { HRSScreenPropsC } from '@src/types/navigation'
import { COLORS, STYLES } from '@src/res'
import { SearchBar, LongPressDetails } from '@src/components'
import { generateSearchData } from '@src/data/generateData'
import { ISearchData, IMedia } from '@src/types/types'

import Media from './Media'
import { useAppDispatch } from '@src/types/store'
import { setTouch } from '@src/store/controllers/touch'

const MEDIA = generateSearchData()

const Search: FC<HRSScreenPropsC<'SearchTab', 'Search'>> = () => {
  const dispatch = useAppDispatch()
  const [data, setData] = useState<ISearchData[]>([])

  useEffect(() => {
    if (data.length === 0) {
      setData(MEDIA)
    }
  }, [])

  const renderMedia: FlashListProps<ISearchData>['renderItem'] = ({
    item,
    index,
  }) => {
    return <Media m={item} index={index} />
  }

  const _onLongPress = () => {
    console.debug('Main _onLongPress')
    dispatch(setTouch('long'))
  }

  const _onPressOut = () => {
    console.debug('Main _onPressOut')
    dispatch(setTouch('out'))
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressOut={_onPressOut}
      onLongPress={_onLongPress}
      style={styles.container}>
      <FlashList<ISearchData>
        data={data}
        renderItem={renderMedia}
        keyExtractor={(_, i) => 'm-' + i}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<SearchBar contentContainer={styles.search} />}
        estimatedItemSize={(STYLES.S_WIDTH / 3) * 2}
        bounces={false}
      />
      <LongPressDetails />
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  search: {
    marginBottom: '8@ms',
  },
})
export default Search
