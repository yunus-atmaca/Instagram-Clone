import { IMedia, IStoy, IUser } from '@src/types/types'

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
    if ((i === randomIndexForVideo)) {
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
