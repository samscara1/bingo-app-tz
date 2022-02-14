import React from 'react'

import { Even } from '../../../../../svgComponents/Even'
import { Odd } from '../../../../../svgComponents/Odd'
import { Random } from '../../../../../svgComponents/Random'
import { RandomBottom } from '../../../../../svgComponents/RandomBottom'
import { RandomTop } from '../../../../../svgComponents/RandomTop'
import { RandomiseBtn } from '../../../../../UI/RandomiseBtn/RandomiseBtn'

export const RandomPanel = ({ ticketId} ) => {

  return (
    <div>
      <RandomiseBtn pic={<Random />} ticketId={ticketId} minMums={1} maxNums={20} />
      <RandomiseBtn pic={<Odd />} ticketId={ticketId} minMums={1} maxNums={20} oddEven="odd" />
      <RandomiseBtn pic={<Even />} ticketId={ticketId} minMums={1} maxNums={20} oddEven="even" />
      <RandomiseBtn pic={<RandomTop />} ticketId={ticketId} minMums={1} maxNums={10} />
      <RandomiseBtn pic={<RandomBottom />} ticketId={ticketId} minMums={11} maxNums={20} />
    </div>
  )
}
