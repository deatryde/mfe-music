import React from 'react';
import { AppShell } from 'ui';
import PlaylistPage from './pages/PlaylistPage';
import MusicPage from './pages/MusicPage';

const MusicRuntime = React.lazy(() => import('music/Music'));

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <MusicPage />;
    }

    return this.props.children;
  }
}

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
        {
          path: '/',
          element: () => (
            <ErrorBoundary>
              <MusicRuntime />
            </ErrorBoundary>
          ),
        },
        { path: '/playlist', element: () => <PlaylistPage /> },
      ]}
    />
  );
};

export default App;
