import { IMedia, IPost, IStoy, IUser } from '@src/types/types'

const users: IUser[] = require('./users.json').results
const images = [
  'sImg1.jpeg',
  'sImg2.jpeg',
  'sImg3.jpeg',
  'sImg4.jpeg',
  'sImg5.jpeg',
  'sImg6.jpeg',
  'sImg7.jpeg',
  'sImg8.jpeg',
  'sImg9.jpeg',
  'sImg10.jpeg',
  'sImg11.jpeg',
  'sImg12.jpeg',
  'sImg13.jpeg',
  'sImg14.jpeg',
  'sImg15.jpeg',
  'sImg16.jpeg',
  'sImg17.jpeg',
  'sImg18.jpeg',
  'sImg19.jpeg',
  'sImg20.jpeg',
  'sImg21.jpeg',
  'sImg22.jpeg',
  'sImg23.jpeg',
  'sImg24.jpeg',
  'sImg25.jpeg',
  'sImg26.jpeg',
  'sImg27.jpeg',
  'sImg28.jpeg',
  'sImg29.jpeg',
  'sImg30.jpeg',
  'sImg31.jpeg',
  'sImg32.jpeg',
  'sImg33.jpeg',
  'sImg34.jpeg',
  'sImg35.jpeg',
  'sImg36.jpeg',
]

const videos = [
  'v1.mp4',
  'v2.mp4',
  'v3.mp4',
  'v4.mp4',
  'v5.mp4',
  'v6.mp4',
  'v7.mp4',
  'v8.mp4',
  'v9.mp4',
  'v10.mp4',
]

export const generateRandomPosts = (): IPost[] => {
  const tUsers = [...users]

  let RGPosts: IPost[] = []

  //min 5 max 12 story
  const numberOfPost = generateRandomNumber(24, 36)
  for (let i = 0; i < numberOfPost; ++i) {
    const rIndex = generateRandomNumber(tUsers.length, 0)
    const rUsers = tUsers.splice(rIndex, 1)

    RGPosts.push({
      user: rUsers[0],
      media: generateRandomMedia(),
    })
  }
  return RGPosts
}

export const generateRandomStories = (): IStoy[] => {
  const tUsers = [...users]

  let RGStories: IStoy[] = []

  //min 5 max 12 story
  const numberOfStory = generateRandomNumber(13, 5)
  for (let i = 0; i < numberOfStory; ++i) {
    const rIndex = generateRandomNumber(tUsers.length, 0)
    const rUsers = tUsers.splice(rIndex, 1)

    RGStories.push({
      user: rUsers[0],
      media: generateRandomMedia(),
    })
  }
  return RGStories
}

export const generateRandomMedia = (): IMedia[] => {
  const tImages = [...images]
  const tVideos = [...videos]

  let RGMedia: IMedia[] = []
  const numberOfMedia = generateRandomNumber(7, 1)
  const randomIndexForVideo = generateRandomNumber(numberOfMedia, 0)
  for (let i = 0; i < numberOfMedia; ++i) {
    if (i === randomIndexForVideo) {
      const rIndex = generateRandomNumber(tVideos.length, 0)
      RGMedia.push({ type: 'video', data: tVideos.splice(rIndex, 1)[0] })
    } else {
      const rIndex = generateRandomNumber(tImages.length, 0)
      RGMedia.push({ type: 'image', data: tImages.splice(rIndex, 1)[0] })
    }
  }

  return RGMedia
}

const generateRandomNumber = (max?: number, min?: number) => {
  return Math.floor(Math.random() * (max || 10)) + (min || 0)
}

export const generateSearchData = () => {
  const tImgs = [...images]
  const tVideos = [...videos]

  const sData = []

  for (let i = 0; i < 10; ++i) {}

  return []
}

export const getImg = (imgName: string) => {
  switch (imgName) {
    case 'sImg1.jpeg':
      return require('../../assets/images/sImg1.jpeg')
    case 'sImg2.jpeg':
      return require('../../assets/images/sImg2.jpeg')
    case 'sImg3.jpeg':
      return require('../../assets/images/sImg3.jpeg')
    case 'sImg4.jpeg':
      return require('../../assets/images/sImg4.jpeg')
    case 'sImg5.jpeg':
      return require('../../assets/images/sImg5.jpeg')
    case 'sImg6.jpeg':
      return require('../../assets/images/sImg6.jpeg')
    case 'sImg7.jpeg':
      return require('../../assets/images/sImg7.jpeg')
    case 'sImg8.jpeg':
      return require('../../assets/images/sImg8.jpeg')
    case 'sImg9.jpeg':
      return require('../../assets/images/sImg9.jpeg')
    case 'sImg10.jpeg':
      return require('../../assets/images/sImg10.jpeg')
    case 'sImg11.jpeg':
      return require('../../assets/images/sImg11.jpeg')
    case 'sImg12.jpeg':
      return require('../../assets/images/sImg12.jpeg')
    case 'sImg13.jpeg':
      return require('../../assets/images/sImg13.jpeg')
    case 'sImg14.jpeg':
      return require('../../assets/images/sImg14.jpeg')
    case 'sImg15.jpeg':
      return require('../../assets/images/sImg15.jpeg')
    case 'sImg16.jpeg':
      return require('../../assets/images/sImg16.jpeg')
    case 'sImg17.jpeg':
      return require('../../assets/images/sImg17.jpeg')
    case 'sImg18.jpeg':
      return require('../../assets/images/sImg18.jpeg')
    case 'sImg19.jpeg':
      return require('../../assets/images/sImg19.jpeg')
    case 'sImg20.jpeg':
      return require('../../assets/images/sImg20.jpeg')
    case 'sImg21.jpeg':
      return require('../../assets/images/sImg21.jpeg')
    case 'sImg22.jpeg':
      return require('../../assets/images/sImg22.jpeg')
    case 'sImg23.jpeg':
      return require('../../assets/images/sImg23.jpeg')
    case 'sImg24.jpeg':
      return require('../../assets/images/sImg24.jpeg')
    case 'sImg25.jpeg':
      return require('../../assets/images/sImg25.jpeg')
    case 'sImg26.jpeg':
      return require('../../assets/images/sImg26.jpeg')
    case 'sImg27.jpeg':
      return require('../../assets/images/sImg27.jpeg')
    case 'sImg28.jpeg':
      return require('../../assets/images/sImg28.jpeg')
    case 'sImg29.jpeg':
      return require('../../assets/images/sImg29.jpeg')
    case 'sImg30.jpeg':
      return require('../../assets/images/sImg30.jpeg')
    case 'sImg31.jpeg':
      return require('../../assets/images/sImg31.jpeg')
    case 'sImg32.jpeg':
      return require('../../assets/images/sImg32.jpeg')
    case 'sImg33.jpeg':
      return require('../../assets/images/sImg33.jpeg')
    case 'sImg34.jpeg':
      return require('../../assets/images/sImg34.jpeg')
    case 'sImg35.jpeg':
      return require('../../assets/images/sImg35.jpeg')
    case 'sImg36.jpeg':
      return require('../../assets/images/sImg36.jpeg')

    default:
      return require('../../assets/images/sImg1.jpeg')
  }
}
