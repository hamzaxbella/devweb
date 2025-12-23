import { useState } from 'react';

export default function Flexbox() {
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('stretch');
  const [direction, setDirection] = useState('row');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Flexbox</h2>
        <p className="mb-6 text-slate-600">
          Flexbox est conçu pour l'alignement unidimensionnel (ligne ou colonne).
          Maîtrisez <code>justify-content</code> (axe principal) et <code>align-items</code> (axe croisé).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">flex-direction (Axe principal)</label>
              <select 
                value={direction} 
                onChange={(e) => setDirection(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              >
                <option value="row">row (→)</option>
                <option value="row-reverse">row-reverse (←)</option>
                <option value="column">column (↓)</option>
                <option value="column-reverse">column-reverse (↑)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">justify-content (Alignement axe principal)</label>
              <select 
                value={justify} 
                onChange={(e) => setJustify(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">align-items (Alignement axe croisé)</label>
              <select 
                value={align} 
                onChange={(e) => setAlign(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              >
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="baseline">baseline</option>
              </select>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm">
              .container {'{'}<br/>
              &nbsp;&nbsp;display: flex;<br/>
              &nbsp;&nbsp;flex-direction: <span className="text-blue-400">{direction}</span>;<br/>
              &nbsp;&nbsp;justify-content: <span className="text-green-400">{justify}</span>;<br/>
              &nbsp;&nbsp;align-items: <span className="text-purple-400">{align}</span>;<br/>
              {'}'}
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-lg p-4 min-h-[400px] flex"
               style={{ 
                 flexDirection: direction as any, 
                 justifyContent: justify, 
                 alignItems: align 
               }}
          >
            <div className="w-16 h-16 bg-indigo-500 text-white flex items-center justify-center rounded shadow-md m-2 font-bold text-xl">1</div>
            <div className="w-16 h-24 bg-pink-500 text-white flex items-center justify-center rounded shadow-md m-2 font-bold text-xl">2</div>
            <div className="w-16 h-12 bg-teal-500 text-white flex items-center justify-center rounded shadow-md m-2 font-bold text-xl">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
