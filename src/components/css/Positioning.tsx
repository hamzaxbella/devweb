import { useState } from 'react';

export default function Positioning() {
  const [position, setPosition] = useState<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>('static');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Positionnement</h2>
        <p className="mb-6 text-slate-600">
          La propriété <code>position</code> change la façon dont un élément se comporte dans le flux du document.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-2">
              <button
                onClick={() => setPosition('static')}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${position === 'static' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <span className="font-bold block">Static (Défaut)</span>
                <span className="text-xs text-slate-500">Suit le flux normal. Top/Left/Right/Bottom inactifs.</span>
              </button>

              <button
                onClick={() => setPosition('relative')}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${position === 'relative' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <span className="font-bold block">Relative</span>
                <span className="text-xs text-slate-500">Décalé par rapport à sa position normale. Laisse un "trou".</span>
              </button>

              <button
                onClick={() => setPosition('absolute')}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${position === 'absolute' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <span className="font-bold block">Absolute</span>
                <span className="text-xs text-slate-500">Positionné par rapport au parent positionné le plus proche. Sort du flux.</span>
              </button>

              <button
                onClick={() => setPosition('fixed')}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${position === 'fixed' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <span className="font-bold block">Fixed</span>
                <span className="text-xs text-slate-500">Fixé par rapport à la fenêtre du navigateur. Reste visible au scroll.</span>
              </button>

              <button
                onClick={() => setPosition('sticky')}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${position === 'sticky' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <span className="font-bold block">Sticky</span>
                <span className="text-xs text-slate-500">Mélange de relative et fixed. "Colle" quand on scrolle.</span>
              </button>
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-2 relative h-[400px] bg-slate-100 border border-slate-300 rounded-lg overflow-auto p-4">
            <div className="h-[800px] space-y-4 relative">
              <p className="text-slate-400 text-sm mb-4">Scrollez dans cette zone pour tester Fixed et Sticky !</p>
              
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Bloc Normal 1
              </div>

              <div className="bg-white p-4 rounded shadow-sm border border-slate-200 relative">
                Bloc Parent (Relative)
                
                <div 
                  className={`w-32 h-32 bg-indigo-500 text-white flex items-center justify-center font-bold rounded shadow-lg transition-all duration-500 z-10
                    ${position === 'static' ? '' : ''}
                    ${position === 'relative' ? 'top-8 left-8' : ''}
                    ${position === 'absolute' ? 'top-0 right-0' : ''}
                    ${position === 'fixed' ? 'top-20 right-20' : ''}
                    ${position === 'sticky' ? 'top-0' : ''}
                  `}
                  style={{ position: position }}
                >
                  {position}
                </div>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Bloc Normal 2
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Bloc Normal 3
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Bloc Normal 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
