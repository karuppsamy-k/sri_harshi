/**
 * Root application component.
 * Mounts the router. All providers wrap this in main.tsx.
 */

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export function App() {
  return <RouterProvider router={router} />;
}
