import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export interface IItem {
  name: string
}

const ProfileItems: IItem[] = [
  {
    name: 'Setting',
  },
  {
    name: 'Your activity',
  },
  {
    name: 'Archive',
  },
  {
    name: 'QR code',
  },
  {
    name: 'Saved',
  },
  {
    name: 'Orders and payments',
  },
  {
    name: 'Close Friends',
  },
  {
    name: 'Favorites',
  },
]

const getIconByName = (name: string) => {
  switch (name) {
    case 'Setting':
      return <Ionicons name={'md-settings-outline'} color={'black'} size={20} />
    case 'Your activity':
      return <Feather name={'activity'} color={'black'} size={20} />
    case 'Archive':
      return <Feather name={'archive'} color={'black'} size={20} />
    case 'QR code':
      return <Ionicons name={'qr-code'} color={'black'} size={20} />
    case 'Saved':
      return <Feather name={'bookmark'} color={'black'} size={20} />
    case 'Orders and payments':
      return <Ionicons name={'card-outline'} color={'black'} size={20} />
    case 'Close Friends':
      return <Ionicons name={'ios-menu-outline'} color={'black'} size={20} />
    case 'Favorites':
      return <Feather name={'star'} color={'black'} size={20} />
    default:
      return null
  }
}

export { ProfileItems, getIconByName }
