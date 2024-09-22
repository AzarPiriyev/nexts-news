import Container from '@/components/mainContainer'
import WorldContainer from '@/container/worldContainer'
import React from 'react'
import { getNews } from '../../../../../api/service'

const world = async () => {

  const getPromise = await getNews();

  const [news] = await Promise.all([getPromise]);

  return (
    <Container>
        <WorldContainer news = {news}/>
    </Container>
  )
}

export default world

