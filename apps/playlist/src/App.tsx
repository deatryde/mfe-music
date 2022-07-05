import React from 'react';
import { AppShell } from 'ui';
import MusicPage from 'music/Music';

import PlaylistPage from './pages/PlaylistPage';

const App = () => {
  return (
    <AppShell
      title='Musics'
      colorScheme='light'
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
