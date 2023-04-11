import React, { FC, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { IUser, IVideo } from '@src/types/types'
import { COLORS, STYLES } from '@src/res'
import { getRandomUser } from '@src/data/generateData'

type Props = {
  v: IVideo
  i: number
}

const Reel: FC<Props> = ({ v, i }) => {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    if (!user) setUser(getRandomUser())
  }, [])

  if (!user) return null

  return (
    <View key={'r' + i} style={styles.container}>
      <Right avatar={user!.picture.medium} />
      <UserSection user={user!} />
    </View>
  )
}

const UserSection: FC<{ user: IUser }> = ({ user }) => {
  return (
    <View style={styles.bottomC}>
      <View style={styles.cUser}>
        <Image style={styles.user} source={{ uri: user.picture.medium }} />
        <Text style={styles.uName}>{user.name.first}</Text>
        <View style={styles.cFollow}>
          <Text style={styles.tFollow}>Follow</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.description}>
        A tall and willowy, pink skinned woman with blue eyes, a big nose, very
        thin lips and neat eyebrows. She has thick, orange-gold hair, has a
        thick torso with modest breasts, wide shoulders, and long legs, and she
        has a large burn mark on her right foot.
      </Text>
    </View>
  )
}

const Right: FC<{ avatar: string }> = ({ avatar }) => {
  return (
    <View style={styles.rightC}>
      <Feather size={28} name="camera" color={'white'} />
      <View>
        <AntDesign size={28} name={'hearto'} color={'white'} />
        <Feather
          style={styles.icon}
          size={28}
          name="message-circle"
          color={'white'}
        />
        <Feather size={28} name="send" color={'white'} />
        <MaterialCommunityIcons
          style={styles.icon}
          size={28}
          color={'white'}
          name="dots-vertical"
        />
        <Image style={styles.s} source={{ uri: avatar }} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightC: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '44@ms',
    //backgroundColor: 'green',
    paddingVertical: '16@ms',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  s: {
    width: '28@ms',
    height: '28@ms',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  icon: {
    marginVertical: '16@ms',
  },
  bottomC: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    width: STYLES.S_WIDTH - moderateScale(44),
    //backgroundColor: 'blue',
    padding: '16@ms',
    justifyContent: 'flex-end',
  },
  cUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    width: '28@ms',
    height: '28@ms',
    borderRadius: 100,
  },
  uName: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    marginStart: '10@ms',
  },
  cFollow: {
    width: '64@ms',
    height: '24@ms',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginStart: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tFollow: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginTop: '6@ms',
  },
})

export default Reel
