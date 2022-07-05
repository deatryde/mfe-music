import React, { type FC } from 'react';
import { Grid, Title, Loader } from '@mantine/core';
import { MusicCard } from '../components/Card';

interface AlbumInterface {
  name: string;
  image: { size: string; ['#text']: string }[];
}

interface MusicContentProps {
  data: AlbumInterface[];
  isError: boolean;
  isLoading: boolean;
}

export const MusicContent: FC<MusicContentProps> = ({
  data,
  isError,
  isLoading,
}) => {
  if (isLoading) {
    return <Loader color='blue' size='lg' variant='dots' />;
  }
  if (isError) {
    return <div>Error!!</div>;
  }

  return (
    <React.Fragment>
      <Title> Music </Title>

      <Grid
        mt={20}
        sx={{
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {data.map((album: AlbumInterface) => (
          <MusicCard
            {...album}
            key={album.name}
            title={album.name}
            image={album.image[3]['#text']}
            showAddButton
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};
