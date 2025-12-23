import { useState } from 'react';

export default function TextLists() {
  const [listType, setListType] = useState<'ul' | 'ol'>('ul');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Texte & Listes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Formatting */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-slate-800">Formatage de Texte</h3>
            <p className="text-slate-600 text-sm mb-4">
              Utilisez les balises appropriées pour donner du sens, pas juste du style.
            </p>

            <div className="space-y-4">
              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 hover:bg-white transition-colors group">
                <p className="mb-2"><strong className="text-indigo-700">Gras (Importance)</strong></p>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-800 transition-colors">
                  &lt;strong&gt;Texte important&lt;/strong&gt;
                </code>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 hover:bg-white transition-colors group">
                <p className="mb-2"><em className="text-indigo-700">Italique (Emphase)</em></p>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-800 transition-colors">
                  &lt;em&gt;Texte avec emphase&lt;/em&gt;
                </code>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 hover:bg-white transition-colors group">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-600 mb-2">
                  "Ceci est une citation longue ou un bloc de citation."
                </blockquote>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-800 transition-colors">
                  &lt;blockquote&gt;Citation...&lt;/blockquote&gt;
                </code>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 hover:bg-white transition-colors group">
                <p className="mb-2">Code : <code className="bg-slate-200 px-1 rounded">const x = 1;</code></p>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-800 transition-colors">
                  &lt;code&gt;const x = 1;&lt;/code&gt;
                </code>
              </div>
            </div>
          </div>

          {/* Lists */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-slate-800">Listes</h3>
            
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setListType('ul')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${listType === 'ul' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Non ordonnée (&lt;ul&gt;)
              </button>
              <button
                onClick={() => setListType('ol')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${listType === 'ol' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Ordonnée (&lt;ol&gt;)
              </button>
            </div>

            <div className="p-6 border border-slate-200 rounded-lg bg-white min-h-[200px]">
              {listType === 'ul' ? (
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Pommes</li>
                  <li>Bananes</li>
                  <li>Cerises</li>
                </ul>
              ) : (
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Préchauffer le four</li>
                  <li>Mélanger les ingrédients</li>
                  <li>Cuire 30 minutes</li>
                </ol>
              )}
            </div>

            <div className="bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm">
              &lt;{listType}&gt;<br/>
              &nbsp;&nbsp;&lt;li&gt;Élément 1&lt;/li&gt;<br/>
              &nbsp;&nbsp;&lt;li&gt;Élément 2&lt;/li&gt;<br/>
              &nbsp;&nbsp;&lt;li&gt;Élément 3&lt;/li&gt;<br/>
              &lt;/{listType}&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
