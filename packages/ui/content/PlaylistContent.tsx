import React, { FC } from 'react';
import { Box, Title, Grid } from '@mantine/core';
import { MusicCard } from '../components/Card';
import { Music } from 'store';

interface PlaylistContent {
  musics: Music[];
}

export const PlaylistContent: FC<PlaylistContent> = ({ musics }) => {
  return (
    <>
      <Box>
        <Title>Viewing List</Title>
      </Box>
      <Grid
        mt={20}
        sx={{
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {musics.map((music) => (
          <MusicCard {...music} key={music.title} />
        ))}
      </Grid>
    </>
  );
};
