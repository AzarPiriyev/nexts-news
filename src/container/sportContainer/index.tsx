import SportMain from '@/components/sport'
import React from 'react'

interface IInform {
  id: number,
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface IProps{
  sport:IInform[]
}

const SportContainer = ({sport}:IProps) => {
  return (
    <SportMain sport = {sport}/>
  )
}

export default SportContainer