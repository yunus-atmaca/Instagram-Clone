import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export interface IBSItem {
  title?: string
  hasLineSeparator?: boolean
  items: string[]
  snapPoint: string[]
}

//Profile Settings
const PSItems: IBSItem = {
  snapPoint: ['50%'],
  items: [
    'Setting',
    'Your activity',
    'Archive',
    'QR code',
    'Saved',
    'Orders and payments',
    'Close Friends',
    'Favorites',
  ],
}

//Profile plus
const PPItems: IBSItem = {
  title: 'Create',
  hasLineSeparator: true,
  snapPoint: ['45%'],
  items: ['Reel', 'Post', 'Story', 'Story Highlight', 'Live', 'Guide'],
}

const getIconByName = (name: string) => {
  switch (name) {
    //Plus Items
    case 'Reel':
      return <Octicons name={'video'} color={'black'} size={20} />
    case 'Post':
      return (
        <MaterialCommunityIcons
          name={'crop-square'}
          color={'black'}
          size={20}
        />
      )
    case 'Story':
      return <Feather name={'plus-circle'} color={'black'} size={20} />
    case 'Story Highlight':
      return (
        <MaterialCommunityIcons
          name={'heart-plus-outline'}
          color={'black'}
          size={20}
        />
      )
    case 'Live':
      return <MaterialIcons name={'live-tv'} color={'black'} size={20} />
    case 'Guide':
      return (
        <MaterialCommunityIcons
          name={'television-guide'}
          color={'black'}
          size={20}
        />
      )

    //Settings Items
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

export { PPItems, PSItems, getIconByName }
