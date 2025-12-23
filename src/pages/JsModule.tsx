import { useState } from 'react';
import DomIntro from '../components/js/DomIntro';
import Events from '../components/js/Events';

export default function JsModule() {
  const [activeTab, setActiveTab] = useState<'dom' | 'events'>('dom');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">JavaScript: L'Interactivité</h1>
        <p className="text-xl text-slate-600">
          Le langage de programmation du web. Il permet de rendre les pages dynamiques et interactives.
        </p>
      </div>

      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg mb-8 w-fit">
        <button
          onClick={() => setActiveTab('dom')}
          className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeTab === 'dom' 
              ? 'bg-white text-yellow-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Le DOM
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeTab === 'events' 
              ? 'bg-white text-yellow-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Événements
        </button>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {activeTab === 'dom' && <DomIntro />}
        {activeTab === 'events' && <Events />}
      </div>
    </div>
  );
}
