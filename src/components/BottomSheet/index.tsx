import React, {
  FC,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import BottomSheet from '@gorhom/bottom-sheet'
import { STYLES } from '@src/res'
import { Portal } from '@gorhom/portal'
import { IItem, getIconByName } from './items'

type Props = {
  open: boolean
  items: IItem[]
  onCloseBottomSheet: (v: boolean) => void
}

const BSheet: FC<Props> = ({ open, items, onCloseBottomSheet }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['60%'], [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const _onClose = () => {
    onCloseBottomSheet(false)
  }

  if (!open) return null

  return (
    <Portal>
      <View style={styles.container}>
        <BottomSheet
          onClose={_onClose}
          enablePanDownToClose
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            {items.map((item, i) => {
              return <Item item={item} i={i} />
            })}
          </View>
        </BottomSheet>
      </View>
    </Portal>
  )
}

const Item: FC<{ item: IItem; i: number }> = ({ item, i }) => {
  return (
    <View key={'i-' + i} style={styles.item}>
      {getIconByName(item.name)}
      <Text style={styles.text}>{item.name}</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0, .2)',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: '16@ms',
    paddingBottom: '20@ms',
  },
  item: {
    width: '100%',
    height: '48@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    marginStart: '10@ms',
  },
})

export default BSheet
