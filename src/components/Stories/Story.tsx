import React, { FC } from 'react'
import { Text, Image, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { IStoy } from '@src/types/types'
import { COLORS } from '@src/res'

type Props = {
  s: IStoy
  isCreator?: boolean
  userAvatar?: string
}

const Story: FC<Props> = ({ s, isCreator, userAvatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sContainer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={
            isCreator ? ['white', 'white'] : ['#ff9470', '#e33d94', '#cf2f74']
          }
          style={[
            styles.linearGradient,
            {
              overflow: isCreator ? 'visible' : 'hidden',
            },
          ]}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={{ uri: isCreator ? userAvatar : s.user.picture.medium }}
            />
            {isCreator && (
              <View style={styles.plus}>
                <AntDesign name="plus" color={COLORS.white} />
              </View>
            )}
          </View>
        </LinearGradient>
        <Text style={styles.text}>
          {isCreator ? 'Your story' : s.user.name.first}
        </Text>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    paddingStart: '16@ms',
  },
  sContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    height: '64@ms',
    width: '64@ms',
    borderRadius: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '52@ms',
    height: '52@ms',
    borderRadius: 100,
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: COLORS.grey1,
  },
  imgContainer: {
    height: '60@ms',
    width: '60@ms',
    borderRadius: 128,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: 12,
    color: COLORS.black,
    marginTop: '8@ms',
    fontWeight: '500',
  },
  plus: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '20@ms',
    height: '20@ms',
    backgroundColor: COLORS.blue,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Story
