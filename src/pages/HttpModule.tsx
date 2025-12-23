import { useState } from 'react';
import RequestResponse from '../components/http/RequestResponse';
import Methods from '../components/http/Methods';
import StatusCodes from '../components/http/StatusCodes';

export default function HttpModule() {
  const [activeTab, setActiveTab] = useState<'cycle' | 'methods' | 'status'>('cycle');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">HTTP: La Communication</h1>
        <p className="text-xl text-slate-600">
          HyperText Transfer Protocol est le langage que votre navigateur utilise pour parler aux serveurs.
        </p>
      </div>

      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg mb-8 w-fit">
        <button
          onClick={() => setActiveTab('cycle')}
          className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeTab === 'cycle' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Cycle Requête/Réponse
        </button>
        <button
          onClick={() => setActiveTab('methods')}
          className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeTab === 'methods' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Méthodes (Verbes)
        </button>
        <button
          onClick={() => setActiveTab('status')}
          className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeTab === 'status' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Codes de Statut
        </button>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {activeTab === 'cycle' && <RequestResponse />}
        {activeTab === 'methods' && <Methods />}
        {activeTab === 'status' && <StatusCodes />}
      </div>
    </div>
  );
}
