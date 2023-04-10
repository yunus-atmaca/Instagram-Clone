import React, { FC } from 'react'

import { ISearchData } from '@src/types/types'
import { STYLES } from '@src/res'

type Props = {
  m: ISearchData
  index: number
}

import TypeHas5 from './TypeHas5'
import TypeHas3 from './TypeHas3'

const Media: FC<Props> = ({ m, index }) => {
  if (m.type === 't122') return <TypeHas5 m={m} vPosition="prefix" />
  if (m.type === 't221') return <TypeHas5 m={m} vPosition="postfix" />
  if (m.type === 't21') return <TypeHas3 vPosition="postfix" m={m} />
  if (m.type === 't12') return <TypeHas3 vPosition="prefix" m={m} />
  return null
}

export default Media
