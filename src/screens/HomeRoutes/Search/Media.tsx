import React, { FC } from 'react'

import { ISearchData } from '@src/types/types'
import { STYLES } from '@src/res'

type Props = {
  m: ISearchData
  index: number
}

const SINGLE_W = STYLES.S_WIDTH / 3
import TypeHas5 from './TypeHas5'

const Media: FC<Props> = ({ m, index }) => {
  //console.debug('ssstype -> ', m.type)

  if (m.type === 't122') return <TypeHas5 m={m} vPosition="prefix" />
  if (m.type === 't221') return <TypeHas5 m={m} vPosition="postfix" />

  return null
}

export default Media
