import React from 'react';
import { PlaylistContent } from 'ui';
import { useStore } from 'store';

const PlaylistPage = () => {
  const { musics } = useStore();
  return (
    <React.Fragment>
      <PlaylistContent musics={musics} />
    </React.Fragment>
  );
};

export default PlaylistPage;
