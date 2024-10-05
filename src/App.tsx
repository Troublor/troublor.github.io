import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicationList } from './data/publications';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './theme';
import { profile } from './data/profile';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Experience } from './pages/Experience';
import { experience } from './data/experience';
import { ScrollToTop } from './components/ScrollToTop';
import { globalDecoration } from './data';
import { miscData } from './data/miscData';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Home
          profile={profile}
          decoration={globalDecoration}
          miscData={miscData}
        />
      </>
    ),
  },
  {
    path: '/publications',
    element: (
      <>
        <ScrollToTop />
        <Publications
          decoration={globalDecoration}
          profile={profile}
          publications={publicationList}
          miscData={miscData}
        />
      </>
    ),
  },
  {
    path: '/experience',
    element: (
      <>
        <ScrollToTop />
        <Experience
          profile={profile}
          experience={experience}
          miscData={miscData}
        />
      </>
    ),
  },
]);

function App() {
  document.body.style.backgroundColor = defaultTheme.palette.background.default;
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
