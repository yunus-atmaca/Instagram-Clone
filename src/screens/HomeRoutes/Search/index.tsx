import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { FlashList } from '@shopify/flash-list'

import { HRSScreenPropsC } from '@src/types/navigation'
import { COLORS } from '@src/res'
import { SearchBar } from '@src/components'

const Search: FC<HRSScreenPropsC<'SearchTab', 'Search'>> = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      {/*<FlashList /> */}
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
