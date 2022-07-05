import React from 'react';
import { AppShell } from 'ui';
import MusicPage from './pages/MusicPage';

import PlaylistPage from './pages/PlaylistPage';

const App = () => {
  return (
    <AppShell
      title='Musics'
      colorScheme='dark'
      navLinks={[
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Playlist',
          path: '/playlist',
        },
      ]}
      routes={[
        { path: '/', element: () => <MusicPage /> },
        { path: '/playlist', element: () => <PlaylistPage /> },
      ]}
    />
  );
};

export default App;
