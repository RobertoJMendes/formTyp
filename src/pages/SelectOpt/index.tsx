//import React from 'reac
import * as C from './styles'
import { ReactNode } from 'react'

type Props = {
  title: string,
  description: string,
  icon: ReactNode,
  selected: boolean
  onclick: () => void
}

const SelectOpt = ( { title, description, icon, selected, onclick }:Props ) => {
  return (
    <C.Container selected={selected} onClick={onclick}>
        <C.Icon>
          {icon}
        </C.Icon>
      <C.Info>
        <C.Title>
          {title}
        </C.Title>

        <C.Description>
          {description}
        </C.Description>

      </C.Info>
    </C.Container> 
  )
}

export default SelectOpt
