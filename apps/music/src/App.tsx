import React from 'react';
import { AppShell } from 'ui';

import MusicContent from './components/MusicContent';

function App() {
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
        { path: '/', element: () => <MusicContent /> },
        { path: '/playlist', element: () => <div>Playlist</div> },
      ]}
    />
  );
}

export default App;
