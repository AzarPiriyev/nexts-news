import Container from '@/components/mainContainer'
import SportContainer from '@/container/sportContainer'
import React from 'react'
import { getSport } from '../../../../../api/service'

const SportPage = async () => {

  const sportPromise = await getSport();

  const [sport] = await Promise.all([sportPromise]);

  return (
    <Container>
        <SportContainer sport = {sport}/>
    </Container>
  )
}

export default SportPage