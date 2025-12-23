import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight">
              WebFundamentals
            </Link>
            <nav className="flex space-x-8">
              <Link to="/html" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                HTML
              </Link>
              <Link to="/css" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                CSS
              </Link>
              <Link to="/js" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                JS
              </Link>
              <Link to="/http" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                HTTP
              </Link>
              <Link to="/playground" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full">
                Playground
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>Apprendre le Web de manière interactive.</p>
        </div>
      </footer>
    </div>
  );
}
