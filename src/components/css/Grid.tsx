import { useState } from 'react';

export default function Grid() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(4);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">CSS Grid</h2>
        <p className="mb-6 text-slate-600">
          Grid est parfait pour les mises en page en 2 dimensions (lignes et colonnes).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Colonnes: {columns}</label>
              <input 
                type="range" min="1" max="6" value={columns} 
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Gap (Espace): {gap * 0.25}rem</label>
              <input 
                type="range" min="0" max="12" value={gap} 
                onChange={(e) => setGap(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
            
            <div className="bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm">
              .container {'{'}<br/>
              &nbsp;&nbsp;display: grid;<br/>
              &nbsp;&nbsp;grid-template-columns: repeat(<span className="text-blue-400">{columns}</span>, 1fr);<br/>
              &nbsp;&nbsp;gap: <span className="text-green-400">{gap * 0.25}rem</span>;<br/>
              {'}'}
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-lg p-4 min-h-[400px]">
            <div 
              className="grid h-full"
              style={{ 
                gridTemplateColumns: `repeat(${columns}, 1fr)`, 
                gap: `${gap * 0.25}rem` 
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-indigo-200 border-2 border-indigo-300 rounded flex items-center justify-center font-bold text-indigo-700 min-h-[60px]">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
