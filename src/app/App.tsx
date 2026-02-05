import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}