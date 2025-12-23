import { useState } from 'react';
import Structure from '../components/html/Structure';
import Forms from '../components/html/Forms';
import Media from '../components/html/Media';
import TextLists from '../components/html/TextLists';
import Tables from '../components/html/Tables';

export default function HtmlModule() {
  const [activeTab, setActiveTab] = useState<'structure' | 'text' | 'forms' | 'tables' | 'media'>('structure');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">HTML: La Structure</h1>
        <p className="text-xl text-slate-600">
          HyperText Markup Language est le squelette de toute page web.
          Il définit le sens et la structure du contenu.
        </p>
      </div>

      <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg mb-8 w-fit">
        <button
          onClick={() => setActiveTab('structure')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'structure' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Structure
        </button>
        <button
          onClick={() => setActiveTab('text')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'text' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Texte & Listes
        </button>
        <button
          onClick={() => setActiveTab('tables')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'tables' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Tableaux
        </button>
        <button
          onClick={() => setActiveTab('forms')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'forms' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Formulaires
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'media' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Médias
        </button>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {activeTab === 'structure' && <Structure />}
        {activeTab === 'text' && <TextLists />}
        {activeTab === 'tables' && <Tables />}
        {activeTab === 'forms' && <Forms />}
        {activeTab === 'media' && <Media />}
      </div>
    </div>
  );
}
