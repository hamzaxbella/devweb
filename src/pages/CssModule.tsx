import { useState } from 'react';
import BoxModel from '../components/css/BoxModel';
import Flexbox from '../components/css/Flexbox';
import Grid from '../components/css/Grid';
import Bootstrap from '../components/css/Bootstrap';
import Positioning from '../components/css/Positioning';
import Typography from '../components/css/Typography';

export default function CssModule() {
  const [activeTab, setActiveTab] = useState<'boxmodel' | 'flexbox' | 'grid' | 'positioning' | 'typography' | 'bootstrap'>('boxmodel');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">CSS: Le Style</h1>
        <p className="text-xl text-slate-600">
          Cascading Style Sheets gère l'apparence. 
          Maîtrisez le Box Model, Flexbox, Grid et le Positionnement pour créer des mises en page modernes.
        </p>
      </div>

      <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg mb-8 w-fit">
        <button
          onClick={() => setActiveTab('boxmodel')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'boxmodel' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Box Model
        </button>
        <button
          onClick={() => setActiveTab('flexbox')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'flexbox' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Flexbox
        </button>
        <button
          onClick={() => setActiveTab('grid')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'grid' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => setActiveTab('positioning')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'positioning' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Positionnement
        </button>
        <button
          onClick={() => setActiveTab('typography')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'typography' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Typographie
        </button>
        <button
          onClick={() => setActiveTab('bootstrap')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'bootstrap' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          Frameworks
        </button>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {activeTab === 'boxmodel' && <BoxModel />}
        {activeTab === 'flexbox' && <Flexbox />}
        {activeTab === 'grid' && <Grid />}
        {activeTab === 'positioning' && <Positioning />}
        {activeTab === 'typography' && <Typography />}
        {activeTab === 'bootstrap' && <Bootstrap />}
      </div>
    </div>
  );
}
