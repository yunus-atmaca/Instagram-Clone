import { COLORS } from '@src/res'
import React, { FC } from 'react'
import { Text, Image, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {
  avatar: string
}

const UserInfo: FC<Props> = ({ avatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarC}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View style={styles.mCText}>
          <View style={styles.cText}>
            <Text style={styles.t1}>0</Text>
            <Text style={styles.t2}>Post</Text>
          </View>
          <View style={styles.cText}>
            <Text style={styles.t1}>38</Text>
            <Text style={styles.t2}>Followers</Text>
          </View>
          <View style={styles.cText}>
            <Text style={styles.t1}>65</Text>
            <Text style={styles.t2}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.cDescription}>
        <Text numberOfLines={4} style={styles.description}>
          tall, black skinned woman with brown eyes, large ears, a lean face and
          tapered eyebrows. She has slightly curly, black hair, has an unique
          tattoo across her entire right arm, seems attentive, has long legs,
          and a lean torso with no chest muscle tone and a typical waist, and
          she wears unwashed, sporty clothes.
        </Text>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    marginTop: '4@ms',
  },
  avatarC: {
    width: '100%',
    paddingHorizontal: '16@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: '84@ms',
    height: '84@ms',
    borderRadius: 200,
    borderWidth: 0.25,
    borderColor: COLORS.grey,
  },
  mCText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80@ms',
  },
  t1: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  t2: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  cDescription: {
    height: '72@ms',
    width: '100%',
    paddingHorizontal: '16@ms',
    marginTop: '4@ms',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
})

export default UserInfo
