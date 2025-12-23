import { useState } from 'react';

export default function BoxModel() {
  const [margin, setMargin] = useState(20);
  const [border, setBorder] = useState(10);
  const [padding, setPadding] = useState(20);
  const [content, setContent] = useState(100);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Le Box Model</h2>
        <p className="mb-6 text-slate-600">
          Tout élément HTML est une boîte. Comprendre la différence entre Margin, Border, Padding et Content est essentiel.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-orange-600 mb-1">Margin (Marge externe) - {margin}px</label>
              <input 
                type="range" min="0" max="50" value={margin} 
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
              <p className="text-xs text-slate-500 mt-1">Espace autour de la boîte. Repousse les autres éléments.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-yellow-600 mb-1">Border (Bordure) - {border}px</label>
              <input 
                type="range" min="0" max="20" value={border} 
                onChange={(e) => setBorder(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <p className="text-xs text-slate-500 mt-1">La bordure visible autour de l'élément.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-600 mb-1">Padding (Marge interne) - {padding}px</label>
              <input 
                type="range" min="0" max="50" value={padding} 
                onChange={(e) => setPadding(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <p className="text-xs text-slate-500 mt-1">Espace entre le contenu et la bordure.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-1">Content (Contenu) - {content}px</label>
              <input 
                type="range" min="50" max="200" value={content} 
                onChange={(e) => setContent(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <p className="text-xs text-slate-500 mt-1">La zone où s'affiche le texte ou l'image.</p>
            </div>
          </div>

          {/* Visualizer */}
          <div className="flex items-center justify-center bg-slate-50 border border-slate-200 rounded-lg p-8 overflow-hidden min-h-[400px]">
            <div 
              className="bg-orange-200 relative flex items-center justify-center transition-all duration-300"
              style={{ padding: `${margin}px` }}
            >
              <span className="absolute top-1 left-2 text-xs font-bold text-orange-700">Margin</span>
              
              <div 
                className="bg-yellow-200 relative flex items-center justify-center transition-all duration-300"
                style={{ padding: `${border}px` }}
              >
                <span className="absolute top-1 left-2 text-xs font-bold text-yellow-700">Border</span>
                
                <div 
                  className="bg-green-200 relative flex items-center justify-center transition-all duration-300"
                  style={{ padding: `${padding}px` }}
                >
                  <span className="absolute top-1 left-2 text-xs font-bold text-green-700">Padding</span>
                  
                  <div 
                    className="bg-blue-200 flex items-center justify-center transition-all duration-300"
                    style={{ width: `${content}px`, height: `${content}px` }}
                  >
                    <span className="text-xs font-bold text-blue-700">Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
