import { useState } from 'react';

export default function Typography() {
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [fontWeight, setFontWeight] = useState('font-normal');
  const [textAlign, setTextAlign] = useState('text-left');
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Typographie</h2>
        <p className="mb-6 text-slate-600">
          La typographie en CSS gère l'apparence du texte : police, taille, graisse, alignement, etc.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Font Family */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Famille de Police (Font Family)</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setFontFamily('font-sans')}
                  className={`px-3 py-2 text-sm rounded border ${fontFamily === 'font-sans' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                >
                  Sans
                </button>
                <button
                  onClick={() => setFontFamily('font-serif')}
                  className={`px-3 py-2 text-sm rounded border ${fontFamily === 'font-serif' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                >
                  Serif
                </button>
                <button
                  onClick={() => setFontFamily('font-mono')}
                  className={`px-3 py-2 text-sm rounded border ${fontFamily === 'font-mono' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                >
                  Mono
                </button>
              </div>
            </div>

            {/* Font Weight */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Graisse (Font Weight)</label>
              <select 
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                className="w-full p-2 border rounded-md text-sm"
              >
                <option value="font-thin">Thin (100)</option>
                <option value="font-light">Light (300)</option>
                <option value="font-normal">Normal (400)</option>
                <option value="font-medium">Medium (500)</option>
                <option value="font-bold">Bold (700)</option>
                <option value="font-black">Black (900)</option>
              </select>
            </div>

            {/* Text Align */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Alignement (Text Align)</label>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => setTextAlign('text-left')}
                  className={`p-2 rounded border ${textAlign === 'text-left' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                  title="Left"
                >
                  ←
                </button>
                <button
                  onClick={() => setTextAlign('text-center')}
                  className={`p-2 rounded border ${textAlign === 'text-center' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                  title="Center"
                >
                  ↔
                </button>
                <button
                  onClick={() => setTextAlign('text-right')}
                  className={`p-2 rounded border ${textAlign === 'text-right' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                  title="Right"
                >
                  →
                </button>
                <button
                  onClick={() => setTextAlign('text-justify')}
                  className={`p-2 rounded border ${textAlign === 'text-justify' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
                  title="Justify"
                >
                  ≡
                </button>
              </div>
            </div>

            {/* Font Size Slider */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Taille: {fontSize}px</label>
              <input 
                type="range" 
                min="12" 
                max="48" 
                value={fontSize} 
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-slate-500 flex justify-between">
                <span>12px</span>
                <span>48px</span>
              </div>
            </div>

          </div>

          {/* Preview */}
          <div className="lg:col-span-2 bg-slate-50 p-6 rounded-lg border border-slate-200 overflow-hidden">
            <div 
              className={`${fontFamily} ${fontWeight} ${textAlign} transition-all duration-300`}
              style={{ fontSize: `${fontSize}px`, lineHeight: '1.6' }}
            >
              <h3 className="text-2xl mb-4 font-bold text-slate-800">Le Renard Brun Rapide</h3>
              <p className="text-slate-700 mb-4">
                Le vif renard brun saute par-dessus le chien paresseux. La typographie est l'art et la technique d'arranger les caractères pour rendre le langage écrit lisible, clair et attrayant lorsqu'il est affiché.
              </p>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
              <p>font-family: {fontFamily.replace('font-', '')};</p>
              <p>font-weight: {fontWeight.replace('font-', '')};</p>
              <p>text-align: {textAlign.replace('text-', '')};</p>
              <p>font-size: {fontSize}px;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Units Explanation */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-4 text-indigo-600">Unités CSS (px vs rem vs em)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-indigo-600 block mb-2">px (Pixels)</span>
            <p className="text-sm text-slate-600">Unité absolue. Ne change pas en fonction des préférences utilisateur ou du parent.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-indigo-600 block mb-2">rem (Root EM)</span>
            <p className="text-sm text-slate-600">Relatif à la taille de police de la racine (html). Standard moderne pour l'accessibilité.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-indigo-600 block mb-2">em</span>
            <p className="text-sm text-slate-600">Relatif à la taille de police de l'élément parent direct. Utile pour les composants élastiques.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
