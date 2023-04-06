import React, { FC } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImg}
        source={require('../../../../assets/images/instaWIc.png')}
      />
      <View style={styles.icons}>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="hearto" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Feather name="message-circle" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: '48@ms',
    justifyContent: 'space-between',
    paddingHorizontal: '16@ms',
    //backgroundColor:'green'
  },
  logoImg: {
    width: '128@ms',
    height: '48@ms',
    resizeMode: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    height:'100%',
  },
  icon: {
    height: '100%',
    width: '36@ms',
    alignItems: 'flex-end',
    justifyContent:'center'
  },
})

export default Header
