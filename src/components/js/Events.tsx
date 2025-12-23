import { useState } from 'react';

export default function Events() {
  const [logs, setLogs] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);

  const addLog = (msg: string) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 5));
  };

  const handleClick = () => {
    setClickCount(c => c + 1);
    addLog('Click détecté ! (onClick)');
  };

  const handleMouseEnter = () => {
    addLog('Souris entrée ! (onMouseEnter)');
  };

  const handleMouseLeave = () => {
    addLog('Souris sortie ! (onMouseLeave)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addLog(`Input changé : "${e.target.value}" (onChange)`);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">Événements (Events)</h2>
        <p className="mb-6 text-slate-600">
          L'interactivité vient des événements : clics, mouvements de souris, saisie clavier, etc.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Area */}
          <div className="space-y-6">
            <div className="p-6 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 flex flex-col items-center gap-4">
              <button
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 transition-all"
              >
                Interagis avec moi !
              </button>
              <p className="text-sm text-slate-500">
                Clics : <span className="font-bold text-indigo-600">{clickCount}</span>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Test d'input (onChange)</label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Tapez quelque chose..."
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Console Log */}
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
              <span className="text-slate-400">Console d'événements</span>
              <button 
                onClick={() => setLogs([])}
                className="text-xs text-slate-500 hover:text-slate-300"
              >
                Effacer
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {logs.length === 0 && (
                <span className="text-slate-600 italic">En attente d'actions...</span>
              )}
              {logs.map((log, i) => (
                <div key={i} className="text-green-400 animate-in fade-in slide-in-from-left-2 duration-300">
                  <span className="text-blue-400">➜</span> {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
