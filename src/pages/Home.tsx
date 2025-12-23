import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Maîtrisez les Fondamentaux du Web
      </h1>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
        Une plateforme interactive pour comprendre la structure (HTML), le style (CSS) et la communication (HTTP) du web moderne.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/html" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">HTML</h2>
          <p className="text-slate-600">La Structure. Sémantique, Formulaires et Accessibilité.</p>
        </Link>
        <Link to="/css" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">CSS</h2>
          <p className="text-slate-600">Le Style. Box Model, Flexbox, Grid et Responsive Design.</p>
        </Link>
        <Link to="/http" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-500 mb-4">HTTP</h2>
          <p className="text-slate-600">La Communication. Requêtes, Réponses et Status Codes.</p>
        </Link>
      </div>
    </div>
  );
}
