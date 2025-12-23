import { useState } from 'react';

export default function Bootstrap() {
  const [colSize, setColSize] = useState(4);
  const [activeComponent, setActiveComponent] = useState<'buttons' | 'alerts' | 'cards'>('buttons');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Frameworks CSS : Bootstrap</h2>
        <p className="mb-6 text-slate-600">
          Bootstrap est le framework CSS le plus populaire au monde. Il fournit des composants pré-stylés et un système de grille puissant pour créer des sites responsive rapidement.
        </p>

        {/* Grid Visualizer */}
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">1. Le Système de Grille (12 colonnes)</h3>
          <p className="mb-4 text-slate-600">
            Le cœur de Bootstrap est sa grille flexible. Une ligne (<code>.row</code>) est divisée en 12 colonnes.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-100 p-4 rounded-lg border border-slate-200">
              <div className="grid grid-cols-12 gap-2 mb-4 opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-8 bg-purple-300 rounded text-[10px] flex items-center justify-center text-purple-800">1</div>
                ))}
              </div>

              <div className="flex gap-2 text-white text-center font-bold text-sm">
                <div 
                  className="bg-purple-600 rounded py-4 transition-all duration-300 flex items-center justify-center shadow-md"
                  style={{ width: `${(colSize / 12) * 100}%` }}
                >
                  .col-{colSize}
                </div>
                <div 
                  className="bg-purple-400 rounded py-4 flex-1 flex items-center justify-center shadow-sm"
                >
                  Auto (Remplissage)
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <label className="block text-sm font-medium text-slate-700 mb-2">Ajuster la largeur : {colSize}/12</label>
              <input 
                type="range" min="1" max="11" value={colSize} 
                onChange={(e) => setColSize(Number(e.target.value))}
                className="w-full accent-purple-600 mb-4"
              />
              <div className="text-xs text-slate-500 bg-white p-3 rounded border border-slate-200 font-mono">
                &lt;div class="row"&gt;<br/>
                &nbsp;&nbsp;&lt;div class="col-{colSize}"&gt;...&lt;/div&gt;<br/>
                &nbsp;&nbsp;&lt;div class="col"&gt;...&lt;/div&gt;<br/>
                &lt;/div&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Components Showcase */}
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">2. Composants Prêts à l'Emploi</h3>
          <p className="mb-6 text-slate-600">
            Contrairement à Tailwind qui fournit des utilitaires, Bootstrap fournit des composants complets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <button 
                onClick={() => setActiveComponent('buttons')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${activeComponent === 'buttons' ? 'bg-purple-100 text-purple-700 font-medium' : 'hover:bg-slate-50'}`}
              >
                Boutons (.btn)
              </button>
              <button 
                onClick={() => setActiveComponent('alerts')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${activeComponent === 'alerts' ? 'bg-purple-100 text-purple-700 font-medium' : 'hover:bg-slate-50'}`}
              >
                Alertes (.alert)
              </button>
              <button 
                onClick={() => setActiveComponent('cards')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${activeComponent === 'cards' ? 'bg-purple-100 text-purple-700 font-medium' : 'hover:bg-slate-50'}`}
              >
                Cartes (.card)
              </button>
            </div>

            <div className="md:col-span-3 bg-slate-50 p-6 rounded-lg border border-slate-200 min-h-[300px]">
              {activeComponent === 'buttons' && (
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium">Primary</button>
                    <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors font-medium">Secondary</button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium">Success</button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium">Danger</button>
                    <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition-colors font-medium">Warning</button>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 font-mono text-sm text-slate-600">
                    &lt;button class="btn btn-primary"&gt;Primary&lt;/button&gt;<br/>
                    &lt;button class="btn btn-secondary"&gt;Secondary&lt;/button&gt;<br/>
                    &lt;button class="btn btn-success"&gt;Success&lt;/button&gt;<br/>
                    &lt;button class="btn btn-danger"&gt;Danger&lt;/button&gt;<br/>
                    &lt;button class="btn btn-warning"&gt;Warning&lt;/button&gt;
                  </div>
                </div>
              )}

              {activeComponent === 'alerts' && (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-100 text-blue-800 rounded border border-blue-200" role="alert">
                    Une alerte simple de type primary.
                  </div>
                  <div className="p-4 bg-green-100 text-green-800 rounded border border-green-200" role="alert">
                    Une alerte de succès ! Tout s'est bien passé.
                  </div>
                  <div className="p-4 bg-red-100 text-red-800 rounded border border-red-200" role="alert">
                    Une alerte de danger ! Il y a une erreur.
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 font-mono text-sm text-slate-600 mt-4">
                    &lt;div class="alert alert-primary"&gt;...&lt;/div&gt;<br/>
                    &lt;div class="alert alert-success"&gt;...&lt;/div&gt;<br/>
                    &lt;div class="alert alert-danger"&gt;...&lt;/div&gt;
                  </div>
                </div>
              )}

              {activeComponent === 'cards' && (
                <div className="space-y-6">
                  <div className="max-w-sm bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="h-32 bg-slate-200 flex items-center justify-center text-slate-400">Image Cap</div>
                    <div className="p-5">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-900">Titre de la carte</h5>
                      <p className="mb-3 font-normal text-slate-700">Voici un exemple de contenu rapide pour construire sur le titre de la carte.</p>
                      <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded hover:bg-blue-700">
                        Lire plus
                      </button>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 font-mono text-sm text-slate-600">
                    &lt;div class="card"&gt;<br/>
                    &nbsp;&nbsp;&lt;img class="card-img-top" ...&gt;<br/>
                    &nbsp;&nbsp;&lt;div class="card-body"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 class="card-title"&gt;...&lt;/h5&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="card-text"&gt;...&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#" class="btn btn-primary"&gt;...&lt;/a&gt;<br/>
                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                    &lt;/div&gt;
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Breakpoints */}
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">3. Breakpoints Responsive</h3>
          <p className="mb-4 text-slate-600">
            Bootstrap utilise des suffixes de classe pour cibler différentes tailles d'écran.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-slate-500">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                <tr>
                  <th className="px-6 py-3">Breakpoint</th>
                  <th className="px-6 py-3">Infixe</th>
                  <th className="px-6 py-3">Dimensions</th>
                  <th className="px-6 py-3">Exemple</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-slate-900">X-Small</td>
                  <td className="px-6 py-4 font-mono">None</td>
                  <td className="px-6 py-4">&lt; 576px</td>
                  <td className="px-6 py-4 font-mono">.col-12</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-slate-900">Small</td>
                  <td className="px-6 py-4 font-mono">sm</td>
                  <td className="px-6 py-4">≥ 576px</td>
                  <td className="px-6 py-4 font-mono">.col-sm-6</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-slate-900">Medium</td>
                  <td className="px-6 py-4 font-mono">md</td>
                  <td className="px-6 py-4">≥ 768px</td>
                  <td className="px-6 py-4 font-mono">.col-md-4</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-slate-900">Large</td>
                  <td className="px-6 py-4 font-mono">lg</td>
                  <td className="px-6 py-4">≥ 992px</td>
                  <td className="px-6 py-4 font-mono">.col-lg-3</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-slate-900">X-Large</td>
                  <td className="px-6 py-4 font-mono">xl</td>
                  <td className="px-6 py-4">≥ 1200px</td>
                  <td className="px-6 py-4 font-mono">.col-xl-2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">4. Bootstrap vs Tailwind</h3>
          <div className="overflow-hidden border border-slate-200 rounded-lg">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Concept</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-600 uppercase tracking-wider">Bootstrap</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-cyan-600 uppercase tracking-wider">Tailwind</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200 text-sm">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Approche</td>
                  <td className="px-6 py-4 text-slate-600">Composants (orienté objet)</td>
                  <td className="px-6 py-4 text-slate-600">Utilitaire (atomique)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Conteneur Flex</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.d-flex</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.flex</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Marge (Margin)</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.m-3</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.m-3</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Couleur Texte</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.text-primary</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.text-blue-600</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Bouton</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.btn .btn-primary</td>
                  <td className="px-6 py-4 font-mono text-slate-600">.px-4 .py-2 .bg-blue-600...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic">
            Note: Ce projet utilise Tailwind CSS, mais les concepts de Bootstrap (grille, composants) sont universels.
          </p>
        </div>
      </div>
    </div>
  );
}
