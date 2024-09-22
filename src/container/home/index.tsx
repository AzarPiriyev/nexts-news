import Container from '@/components/mainContainer'
import React from 'react'
import HeroMain from '@/components/home/hero'
import BreakingMain from '@/components/home/breakingNews'
import LatestMain from '@/components/home/latestStories'

interface IInform {
  id: number,
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface IProps{
  latest:IInform[]
}

const homeContainer = ({latest}:IProps) => {
  return (
    <Container>
        <HeroMain/>
        <BreakingMain/>
        <LatestMain latest = {latest}/>
    </Container>
  )
}

export default homeContainer