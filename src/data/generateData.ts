import {
  IMedia,
  IPost,
  ISViewType,
  ISearchData,
  IStoy,
  IUser,
  IVideo,
  ISDMedia,
} from '@src/types/types'

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

const videos: IVideo[] = [
  {
    name: 'v1.mp4',
    thumbnail: 't1.jpeg',
  },
  {
    name: 'v2.mp4',
    thumbnail: 't2.jpeg',
  },
  {
    name: 'v3.mp4',
    thumbnail: 't3.jpeg',
  },
  {
    name: 'v4.mp4',
    thumbnail: 't4.jpeg',
  },
  {
    name: 'v5.mp4',
    thumbnail: 't5.jpeg',
  },
  {
    name: 'v6.mp4',
    thumbnail: 't6.jpeg',
  },
  {
    name: 'v7.mp4',
    thumbnail: 't7.jpeg',
  },
  {
    name: 'v8.mp4',
    thumbnail: 't8.jpeg',
  },
  {
    name: 'v9.mp4',
    thumbnail: 't9.jpeg',
  },
  {
    name: 'v10.mp4',
    thumbnail: 't10.jpeg',
  },
]

export const generateRandomPosts = (): IPost[] => {
  const tUsers = [...users]

  let RGPosts: IPost[] = []

  const numberOfPost = generateRandomNumber(36, 24)
  for (let i = 0; i < numberOfPost; ++i) {
    const rIndex = generateRandomNumber(tUsers.length - 1, 0)
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
  const numberOfStory = generateRandomNumber(12, 5)
  for (let i = 0; i < numberOfStory; ++i) {
    const rIndex = generateRandomNumber(tUsers.length - 1, 0)
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
  //const tVideos = [...videos]

  let RGMedia: IMedia[] = []
  const numberOfMedia = generateRandomNumber(6, 1)
  const randomIndexForVideo = generateRandomNumber(numberOfMedia, 0)
  for (let i = 0; i < numberOfMedia; ++i) {
    if (i === randomIndexForVideo) {
      //const rIndex = generateRandomNumber(tVideos.length, 0)
      //RGMedia.push({ type: 'video', data: tVideos.splice(rIndex, 1)[0] })
    } else {
      const rIndex = generateRandomNumber(tImages.length - 1, 0)
      RGMedia.push({ type: 'image', data: tImages.splice(rIndex, 1)[0] })
    }
  }

  return RGMedia
}

export const generateSearchData = () => {
  const sData: ISearchData[] = []

  for (let i = 0; i < 16; ++i) {
    //'t224' | 't422' | 't21' | 't12'
    let rType: ISViewType = 't221'

    if (i % 3 === 0) rType = 't122'
    else if (i % 5 === 0) rType = 't21'
    else if (i % 7 === 0) rType = 't12'

    if (rType === 't122') {
      sData.push({ type: 't122', data: returnSDataMedia(5) })
    } else if (rType === 't221') {
      sData.push({ type: 't221', data: returnSDataMedia(5) })
    } else if (rType === 't12') {
      sData.push({ type: 't12', data: returnSDataMedia(3) })
    } else if (rType === 't21') {
      sData.push({ type: 't21', data: returnSDataMedia(3) })
    }
  }

  return sData
}

const returnSDataMedia = (numberOfMedia: number): ISDMedia[] => {
  let array: ISDMedia[] = []

  for (let i = 1; i <= numberOfMedia; ++i) {
    const rUser = getRandomUser()

    if (i === 1) {
      const rVideo = getRandomVideo()
      array.push({
        user: rUser,
        data: [{ type: 'video', data: rVideo }],
      })
    } else {
      //video or image
      if (Math.random() < 0.5) {
        const rVideo = getRandomVideo()
        array.push({
          user: rUser,
          data: [{ type: 'video', data: rVideo }],
        })
      } else {
        //Images
        const numberOfImages = generateRandomNumber(1, 5)
        let imgArray: IMedia[] = []
        for (let j = 0; j < numberOfImages; ++j) {
          imgArray.push({ type: 'image', data: getRandomImg() })
        }
        array.push({
          user: rUser,
          data: imgArray,
        })
      }
    }
  }

  return array
}

const getRandomVideo = () => {
  return videos[generateRandomNumber(videos.length - 1, 0)]
}

const getRandomImg = () => {
  return images[generateRandomNumber(images.length - 1, 0)]
}

const getRandomUser = () => {
  return users[generateRandomNumber(users.length - 1, 0)]
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

export const getThumbnail = (tName: string) => {
  switch (tName) {
    case 't1.jpeg':
      return require('../../assets/videos/t1.jpeg')
    case 't2.jpeg':
      return require('../../assets/videos/t2.jpeg')
    case 't3.jpeg':
      return require('../../assets/videos/t3.jpeg')
    case 't4.jpeg':
      return require('../../assets/videos/t4.jpeg')
    case 't5.jpeg':
      return require('../../assets/videos/t5.jpeg')
    case 't6.jpeg':
      return require('../../assets/videos/t6.jpeg')
    case 't7.jpeg':
      return require('../../assets/videos/t7.jpeg')
    case 't8.jpeg':
      return require('../../assets/videos/t8.jpeg')
    case 't9.jpeg':
      return require('../../assets/videos/t9.jpeg')
    case 't10.jpeg':
      return require('../../assets/videos/t10.jpeg')

    default:
      return require('../../assets/videos/t1.jpeg')
  }
}

const generateRandomNumber = (max?: number, min?: number) => {
  return Math.floor(Math.random() * ((max || 10) - (min || 0) + 1) + (min || 0))
}
