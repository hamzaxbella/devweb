import { useState } from 'react';

export default function Tables() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Tableaux</h2>
        <p className="mb-6 text-slate-600">
          Les tableaux servent à afficher des données tabulaires, pas à faire de la mise en page !
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Lignes: {rows}</label>
              <input 
                type="range" min="2" max="6" value={rows} 
                onChange={(e) => setRows(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Colonnes: {cols}</label>
              <input 
                type="range" min="2" max="5" value={cols} 
                onChange={(e) => setCols(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm">
              <h4 className="font-bold mb-2 text-slate-700">Structure</h4>
              <ul className="space-y-1 text-slate-600">
                <li className={hoveredPart === 'table' ? 'text-indigo-600 font-bold' : ''}>&lt;table&gt; : Le conteneur</li>
                <li className={hoveredPart === 'thead' ? 'text-indigo-600 font-bold' : ''}>&lt;thead&gt; : Entête du tableau</li>
                <li className={hoveredPart === 'tbody' ? 'text-indigo-600 font-bold' : ''}>&lt;tbody&gt; : Corps du tableau</li>
                <li className={hoveredPart === 'tr' ? 'text-indigo-600 font-bold' : ''}>&lt;tr&gt; : Ligne (Table Row)</li>
                <li className={hoveredPart === 'th' ? 'text-indigo-600 font-bold' : ''}>&lt;th&gt; : Cellule d'entête (Header)</li>
                <li className={hoveredPart === 'td' ? 'text-indigo-600 font-bold' : ''}>&lt;td&gt; : Cellule de donnée (Data)</li>
              </ul>
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-2 overflow-x-auto">
            <table 
              className="w-full border-collapse border border-slate-300"
              onMouseEnter={() => setHoveredPart('table')}
              onMouseLeave={() => setHoveredPart(null)}
            >
              <thead 
                className="bg-slate-100"
                onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart('thead'); }}
                onMouseLeave={() => setHoveredPart('table')}
              >
                <tr
                  onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart('tr'); }}
                  onMouseLeave={() => setHoveredPart('thead')}
                >
                  {Array.from({ length: cols }).map((_, i) => (
                    <th 
                      key={i} 
                      className="border border-slate-300 p-3 text-left font-bold text-slate-700 hover:bg-indigo-50 transition-colors"
                      onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart('th'); }}
                      onMouseLeave={() => setHoveredPart('tr')}
                    >
                      Entête {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart('tbody'); }}
                onMouseLeave={() => setHoveredPart('table')}
              >
                {Array.from({ length: rows }).map((_, r) => (
                  <tr 
                    key={r}
                    onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart('tr'); }}
                    onMouseLeave={() => setHoveredPart('tbody')}
                  >
                    {Array.from({ length: cols }).map((_, c) => (
                      <td 
                        key={c} 
                        className="border border-slate-300 p-3 text-slate-600 hover:bg-indigo-50 transition-colors"
                        onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart('td'); }}
                        onMouseLeave={() => setHoveredPart('tr')}
                      >
                        Donnée {r + 1}-{c + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 bg-slate-900 p-4 rounded-lg text-slate-300 font-mono text-sm overflow-x-auto">
              &lt;table&gt;<br/>
              &nbsp;&nbsp;&lt;thead&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Entête 1&lt;/th&gt;...<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br/>
              &nbsp;&nbsp;&lt;/thead&gt;<br/>
              &nbsp;&nbsp;&lt;tbody&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Donnée 1-1&lt;/td&gt;...<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br/>
              &nbsp;&nbsp;&lt;/tbody&gt;<br/>
              &lt;/table&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
