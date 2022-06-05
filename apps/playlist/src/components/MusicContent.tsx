import React from 'react';
import { Grid, Title, Loader } from '@mantine/core';
import { MusicCard } from 'ui';
import { useQuery } from 'react-query';
import axios from 'axios';

interface AlbumInterface {
  name: string;
  image: { size: string; ['#text']: string }[];
}

async function fetchMusic() {
  const { data } = await axios.get(`${process.env.REACT_APP_ALBUMS_URI}`);
  return data.albums.album;
}

const MusicContent: React.FC = () => {
  const { data, isError, isLoading } = useQuery('albums', fetchMusic);

  if (isLoading) {
    return <Loader color='blue' size='lg' variant='dots' />;
  }
  if (isError) {
    return <div>Error!!</div>;
  }

  return (
    <React.Fragment>
      <Title> Musics</Title>

      <Grid
        sx={{
          justifyContent: 'center',
          gap: '2rem',
          marginTop: 12,
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

export default MusicContent;
