import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ArtList, ArtSingle } from './features/art';
import { WorkList, WorkSingle } from './features/work';
import Home from './features/Home';

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/work", 
    children: [
      { index: true, Component: WorkList },
      { path: "/work/:id", Component: WorkSingle },
    ]
  },
  { path: "/art", 
    children: [
      { index: true, Component: ArtList },
      { path: "/art/:id", Component: ArtSingle },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
