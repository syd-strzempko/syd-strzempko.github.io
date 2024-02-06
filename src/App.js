import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import theme from './theme/theme'
import ArtList from './pages/ArtList';
import ArtSingle from './pages/ArtSingle';
import WorkList from './pages/WorkList';
import WorkSingle from './pages/WorkSingle';
import Home from './pages/Home';

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/work/*", 
    children: [
      { index: true, Component: WorkList },
      { path: "*", Component: WorkSingle },
    ]
  },
  { path: "/art/*", 
    children: [
      { index: true, Component: ArtList },
      { path: "*", Component: ArtSingle },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
