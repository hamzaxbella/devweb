import { useState } from 'react';

export default function Media() {
  const [altText, setAltText] = useState('Un chat mignon');
  const [linkType, setLinkType] = useState<'absolute' | 'relative'>('absolute');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Médias & Liens</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-800">Images & Accessibilité</h3>
            <p className="text-slate-600">
              L'attribut <code>alt</code> est crucial pour les lecteurs d'écran et le SEO.
              Il décrit l'image si elle ne peut pas être affichée.
            </p>
            
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <div className="aspect-video bg-slate-200 rounded-md flex items-center justify-center mb-4 relative overflow-hidden group">
                <div className="text-slate-400 text-6xl">🖼️</div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium px-4 text-center">
                    Lecteur d'écran lit : "{altText}"
                  </p>
                </div>
              </div>
              
              <label className="block text-sm font-medium text-slate-700 mb-1">Texte Alternatif (alt)</label>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>

            <div className="bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm">
              &lt;img src="chat.jpg" alt="<span className="text-green-400">{altText}</span>" /&gt;
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-800">Liens (Ancres)</h3>
            <p className="text-slate-600">
              Les liens absolus pointent vers un autre site. Les liens relatifs pointent vers une page de votre site.
            </p>

            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setLinkType('absolute')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${linkType === 'absolute' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Absolu
              </button>
              <button
                onClick={() => setLinkType('relative')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${linkType === 'relative' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Relatif
              </button>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 min-h-[160px] flex flex-col justify-center items-center text-center">
              {linkType === 'absolute' ? (
                <>
                  <p className="text-lg font-semibold text-indigo-600 mb-2">Vers Google.com</p>
                  <p className="text-sm text-slate-500">Sort du site actuel. Nécessite le protocole (https://).</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold text-indigo-600 mb-2">Vers /contact</p>
                  <p className="text-sm text-slate-500">Reste dans le site. Chemin par rapport à la page actuelle.</p>
                </>
              )}
            </div>

            <div className="bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm">
              {linkType === 'absolute' ? (
                <>&lt;a href="<span className="text-blue-400">https://google.com</span>" target="_blank"&gt;Google&lt;/a&gt;</>
              ) : (
                <>&lt;a href="<span className="text-blue-400">/contact</span>"&gt;Contact&lt;/a&gt;</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
