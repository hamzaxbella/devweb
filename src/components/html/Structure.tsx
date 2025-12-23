import { useState } from 'react';

export default function Structure() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const sections = [
    { id: 'header', tag: '<header>', desc: 'Entête du site ou de la section. Contient souvent le logo et la navigation.' },
    { id: 'nav', tag: '<nav>', desc: 'Section de navigation principale.' },
    { id: 'main', tag: '<main>', desc: 'Contenu principal de la page. Unique par page.' },
    { id: 'section', tag: '<section>', desc: 'Groupe thématique de contenu.' },
    { id: 'article', tag: '<article>', desc: 'Contenu autonome (ex: post de blog, news).' },
    { id: 'aside', tag: '<aside>', desc: 'Contenu indirectement lié (sidebar, pubs).' },
    { id: 'footer', tag: '<footer>', desc: 'Pied de page (copyright, liens légaux).' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Structure Sémantique</h2>
        <p className="mb-6 text-slate-600">
          Utilisez les balises sémantiques pour donner du sens à votre contenu. C'est crucial pour l'accessibilité et le SEO.
          Survolez les zones ci-dessous pour voir la balise appropriée.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visualizer */}
          <div className="border-2 border-slate-300 rounded-lg p-4 bg-slate-50 aspect-[3/4] lg:aspect-auto flex flex-col gap-2 relative min-h-[400px]">
            <div 
              className={`p-4 border-2 border-dashed border-orange-300 bg-orange-50 rounded transition-colors ${hoveredTag === 'header' ? 'bg-orange-100 border-orange-500' : ''}`}
              onMouseEnter={() => setHoveredTag('header')}
              onMouseLeave={() => setHoveredTag(null)}
            >
              <span className="font-mono text-sm text-orange-600">&lt;header&gt;</span>
              <div className="mt-2 flex justify-between items-center">
                <div className="h-8 w-8 bg-orange-200 rounded-full"></div>
                <div 
                  className={`h-8 flex-1 mx-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded flex items-center justify-center ${hoveredTag === 'nav' ? 'bg-blue-100 border-blue-500' : ''}`}
                  onMouseEnter={(e) => { e.stopPropagation(); setHoveredTag('nav'); }}
                  onMouseLeave={() => setHoveredTag('header')}
                >
                  <span className="font-mono text-xs text-blue-600">&lt;nav&gt;</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex gap-2">
              <div 
                className={`flex-[3] border-2 border-dashed border-green-300 bg-green-50 rounded p-2 flex flex-col gap-2 ${hoveredTag === 'main' ? 'bg-green-100 border-green-500' : ''}`}
                onMouseEnter={() => setHoveredTag('main')}
                onMouseLeave={() => setHoveredTag(null)}
              >
                <span className="font-mono text-sm text-green-600">&lt;main&gt;</span>
                
                <div 
                  className={`flex-1 border-2 border-dashed border-purple-300 bg-purple-50 rounded p-2 ${hoveredTag === 'section' ? 'bg-purple-100 border-purple-500' : ''}`}
                  onMouseEnter={(e) => { e.stopPropagation(); setHoveredTag('section'); }}
                  onMouseLeave={() => setHoveredTag('main')}
                >
                  <span className="font-mono text-xs text-purple-600">&lt;section&gt;</span>
                  <div 
                    className={`mt-2 p-2 border-2 border-dashed border-pink-300 bg-pink-50 rounded ${hoveredTag === 'article' ? 'bg-pink-100 border-pink-500' : ''}`}
                    onMouseEnter={(e) => { e.stopPropagation(); setHoveredTag('article'); }}
                    onMouseLeave={() => setHoveredTag('section')}
                  >
                    <span className="font-mono text-xs text-pink-600">&lt;article&gt;</span>
                  </div>
                </div>
              </div>

              <div 
                className={`flex-1 border-2 border-dashed border-yellow-300 bg-yellow-50 rounded p-2 ${hoveredTag === 'aside' ? 'bg-yellow-100 border-yellow-500' : ''}`}
                onMouseEnter={() => setHoveredTag('aside')}
                onMouseLeave={() => setHoveredTag(null)}
              >
                <span className="font-mono text-sm text-yellow-600">&lt;aside&gt;</span>
              </div>
            </div>

            <div 
              className={`p-4 border-2 border-dashed border-gray-400 bg-gray-100 rounded ${hoveredTag === 'footer' ? 'bg-gray-200 border-gray-600' : ''}`}
              onMouseEnter={() => setHoveredTag('footer')}
              onMouseLeave={() => setHoveredTag(null)}
            >
              <span className="font-mono text-sm text-gray-600">&lt;footer&gt;</span>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Détails de la balise</h3>
            {sections.map((section) => (
              <div 
                key={section.id}
                className={`p-4 rounded-lg border transition-all ${hoveredTag === section.id ? 'border-indigo-500 bg-indigo-50 shadow-md scale-105' : 'border-slate-100 bg-white'}`}
              >
                <code className="text-indigo-600 font-bold block mb-1">{section.tag}</code>
                <p className="text-sm text-slate-600">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
