import { Dimensions } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'

export const W_WIDTH = Dimensions.get('window').width
export const W_HEIGHT = Dimensions.get('window').height
export const S_WIDTH = Dimensions.get('screen').width
export const S_HEIGHT = Dimensions.get('screen').height

export const spacing = {
  m: moderateScale(16),
}

export const radius = {
  xs: 5,
}

export default ScaledSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: 'black',
    paddingStart: '16@ms',
    marginTop: '12@ms',
  },
  description: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: '16@ms',
    marginTop: '8@ms',
  },
})
