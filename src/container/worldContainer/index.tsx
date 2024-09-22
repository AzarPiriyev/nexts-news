import WorldMain from '@/components/world'
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
  news:IInform[]
}

const WorldContainer = ({news}:IProps) => {
  return (
    <WorldMain news = {news}/>
  )
}

export default WorldContainer

