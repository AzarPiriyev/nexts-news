
import Container from '@/components/mainContainer';
import DetailsContainer from '@/container/detailsContainer';
import React, { useEffect, useState } from 'react';
import { getNewsById } from '../../../../../api/service';
import { useParams } from 'next/navigation';

const DetailsPage = async ({params}:any) => {

  const { id } = params;
  const detailsPromise = await getNewsById(id);

  const [details] = await Promise.all([detailsPromise]);

  return (
    <Container>
      <DetailsContainer details={[details]} />
    </Container>
  );
};

export default DetailsPage;
