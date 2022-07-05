import React from 'react';
import { MusicContent } from 'ui';
import { useQuery } from 'react-query';
import axios from 'axios';

const MusicPage = () => {
  async function fetchMusic() {
    const { data } = await axios.get(`${process.env.REACT_APP_ALBUMS_URI}`);
    return data.albums.album;
  }

  const { data, isError, isLoading } = useQuery('albums', fetchMusic);

  return (
    <React.Fragment>
      <MusicContent data={data} isLoading={isLoading} isError={isError} />
    </React.Fragment>
  );
};

export default MusicPage;
