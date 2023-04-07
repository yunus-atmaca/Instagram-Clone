import { IUser } from '@src/types/types'

export const mainUser: IUser = {
  gender: 'male',
  name: { title: 'Mr', first: 'Manuel', last: 'Arias' },
  location: {
    street: { number: 7703, name: 'Calle de La Democracia' },
    city: 'Gandía',
    state: 'Castilla la Mancha',
    country: 'Spain',
    postcode: 64395,
    coordinates: { latitude: '-67.0777', longitude: '-149.8757' },
    timezone: {
      offset: '-8:00',
      description: 'Pacific Time (US & Canada)',
    },
  },
  email: 'manuel.arias@example.com',
  login: {
    uuid: '5fd22a5f-2871-4b9e-afda-a8bfc7bd4f08',
    username: 'organicrabbit478',
    password: 'dorian',
    salt: 'NyYYgmjO',
    md5: 'de2d267a3a986b847effd6c60c830ede',
    sha1: '124a9bb115caadd96e3412c101ff8cb199ee20ce',
    sha256: '0045ab7384ec6253e5db485a64b6e10de764ac99c3a7452b6ba54a618b0fddbe',
  },
  dob: { date: '2000-02-28T07:52:48.903Z', age: 23 },
  registered: { date: '2017-07-09T11:45:18.883Z', age: 5 },
  phone: '953-940-977',
  cell: '669-032-154',
  id: { name: 'DNI', value: '02678387-Y' },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/73.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/73.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
  },
  nat: 'ES',
}
