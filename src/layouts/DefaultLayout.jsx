import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function DefaultLayout() {
  return (
    <div className="page-wrapper">
      <header>
        <Navbar>{import.meta.env.VITE_APP_NAME || 'React project'}</Navbar>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="text-bg-dark bg-gradient py-4">
        <div className="container">Footer</div>
      </footer>
    </div>
  );
}
