import React from 'react';
import { AppShell } from 'ui';

function App() {
  return (
    <AppShell
      title='Movies'
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
        { path: '/', element: () => <div>Home</div> },
        { path: '/playlist', element: () => <div>Playlist</div> },
      ]}
    />
  );
}

export default App;
