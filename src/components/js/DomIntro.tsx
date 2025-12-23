import { useState } from 'react';

export default function DomIntro() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">Le DOM (Document Object Model)</h2>
        <p className="mb-6 text-slate-600">
          Le DOM est une représentation en arbre de votre page HTML. JavaScript l'utilise pour modifier le contenu, le style et la structure.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tree Visualization */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center">
            <div 
              className={`p-3 border-2 rounded-lg mb-4 transition-colors ${hoveredNode === 'document' ? 'border-yellow-500 bg-yellow-50' : 'border-slate-300 bg-white'}`}
              onMouseEnter={() => setHoveredNode('document')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span className="font-mono font-bold text-slate-700">document</span>
            </div>
            
            <div className="w-0.5 h-6 bg-slate-300 mb-2"></div>
            
            <div 
              className={`p-3 border-2 rounded-lg mb-4 transition-colors ${hoveredNode === 'html' ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-white'}`}
              onMouseEnter={() => setHoveredNode('html')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span className="font-mono font-bold text-blue-700">&lt;html&gt;</span>
            </div>

            <div className="flex w-full justify-center gap-8 relative">
              {/* Connector Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 border-t-2 border-l-2 border-r-2 border-slate-300 rounded-t-lg -mt-2"></div>

              <div className="flex flex-col items-center mt-4">
                <div 
                  className={`p-2 border-2 rounded-lg mb-2 transition-colors ${hoveredNode === 'head' ? 'border-green-500 bg-green-50' : 'border-slate-300 bg-white'}`}
                  onMouseEnter={() => setHoveredNode('head')}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <span className="font-mono text-sm text-green-700">&lt;head&gt;</span>
                </div>
                <div className="w-0.5 h-4 bg-slate-300"></div>
                <div className="p-2 border border-slate-200 rounded bg-slate-50 text-xs text-slate-500">
                  &lt;title&gt;
                </div>
              </div>

              <div className="flex flex-col items-center mt-4">
                <div 
                  className={`p-2 border-2 rounded-lg mb-2 transition-colors ${hoveredNode === 'body' ? 'border-purple-500 bg-purple-50' : 'border-slate-300 bg-white'}`}
                  onMouseEnter={() => setHoveredNode('body')}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <span className="font-mono text-sm text-purple-700">&lt;body&gt;</span>
                </div>
                <div className="flex gap-2">
                  <div className="p-2 border border-slate-200 rounded bg-slate-50 text-xs text-slate-500">
                    &lt;h1&gt;
                  </div>
                  <div className="p-2 border border-slate-200 rounded bg-slate-50 text-xs text-slate-500">
                    &lt;div&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation Panel */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Manipulation en JS</h3>
            <div className="bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm">
              <p className="text-slate-500">// Sélectionner un élément</p>
              <p>const title = <span className="text-yellow-400">document</span>.<span className="text-blue-400">querySelector</span>('h1');</p>
              <br/>
              <p className="text-slate-500">// Modifier le texte</p>
              <p>title.<span className="text-blue-400">innerText</span> = "Bonjour !";</p>
              <br/>
              <p className="text-slate-500">// Modifier le style</p>
              <p>title.<span className="text-blue-400">style</span>.color = "red";</p>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              <strong>Note :</strong> React manipule le DOM pour vous (Virtual DOM), mais comprendre le vrai DOM est essentiel pour devenir un bon développeur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
