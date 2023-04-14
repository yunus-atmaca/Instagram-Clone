import React, { FC, useRef, useCallback } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import BottomSheet from '@gorhom/bottom-sheet'
import { COLORS, STYLES } from '@src/res'
import { Portal } from '@gorhom/portal'
import { IBSItem, getIconByName } from './items'

type Props = {
  open: boolean
  bs: IBSItem
  onCloseBottomSheet: (v: boolean) => void
}

const BSheet: FC<Props> = ({ open, bs, onCloseBottomSheet }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
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
          snapPoints={bs.snapPoint || ['55%']}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            {bs.title && (
              <View style={styles.cTitle}>
                <Text style={styles.title}>{bs.title}</Text>
              </View>
            )}
            {bs.items.map((item, i) => {
              return <Item has={bs.hasLineSeparator} item={item} i={i} />
            })}
          </View>
        </BottomSheet>
      </View>
    </Portal>
  )
}

const Item: FC<{ item: string; i: number; has?: boolean }> = ({
  item,
  i,
  has,
}) => {
  return (
    <View key={'i-' + i} style={styles.item}>
      {getIconByName(item)}
      <View
        style={[
          styles.cText,
          has
            ? {
                borderBottomWidth: 0.2,
                borderBottomColor: COLORS.grey1,
              }
            : {},
        ]}>
        <Text style={styles.text}>{item}</Text>
      </View>
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
    height: '40@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cText: {
    marginStart: '10@ms',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  cTitle: {
    borderBottomWidth: 0.2,
    borderColor: COLORS.grey1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -moderateScale(16),
    height: '32@ms',
  },
})

export default BSheet
