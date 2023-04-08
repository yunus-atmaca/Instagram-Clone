declare global {}

export interface IVideo {
  data: string
  thumbnail: string
}

export interface IMedia {
  type: 'video' | 'image'
  data: string | IVideo
}

export interface IPost {
  user: IUser
  media: IMedia[]
}

export interface IStoy {
  user: IUser
  media: IMedia[]
}

//search data type
//t221: 'type|2|2|1' - t122: 'type|1|2|2' - t21: 'type|2|1' - t12: 'type|1|2'
export type ISViewType = 't221' | 't122' | 't21' | 't12'
//search data
export type ISDMedia = {
  user: IUser
  data: IMedia[]
}
export interface ISearchData {
  type: ISViewType
  data: ISDMedia[]
}

export interface IUser {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: DobOrRegistered
  registered: DobOrRegistered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}
export interface Name {
  title: string
  first: string
  last: string
}
export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}
export interface Street {
  number: number
  name: string
}
export interface Coordinates {
  latitude: string
  longitude: string
}
export interface Timezone {
  offset: string
  description: string
}
export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}
export interface DobOrRegistered {
  date: string
  age: number
}
export interface Id {
  name: string
  value: string
}
export interface Picture {
  large: string
  medium: string
  thumbnail: string
}
