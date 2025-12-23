import { useState } from 'react';

export default function StatusCodes() {
  const [selectedCode, setSelectedCode] = useState<number | null>(null);

  const codes = [
    { code: 200, text: 'OK', type: 'success', desc: 'La requête a réussi.' },
    { code: 201, text: 'Created', type: 'success', desc: 'La ressource a été créée avec succès.' },
    { code: 301, text: 'Moved Permanently', type: 'redirect', desc: 'La ressource a changé d\'adresse définitivement.' },
    { code: 400, text: 'Bad Request', type: 'client-error', desc: 'Le serveur ne comprend pas la requête (syntaxe invalide).' },
    { code: 401, text: 'Unauthorized', type: 'client-error', desc: 'Authentification requise (vous n\'êtes pas connecté).' },
    { code: 403, text: 'Forbidden', type: 'client-error', desc: 'Accès interdit (vous n\'avez pas les droits).' },
    { code: 404, text: 'Not Found', type: 'client-error', desc: 'La ressource demandée n\'existe pas.' },
    { code: 500, text: 'Internal Server Error', type: 'server-error', desc: 'Erreur inattendue côté serveur.' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800 border-green-300';
      case 'redirect': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'client-error': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'server-error': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Codes de Statut</h2>
        <p className="mb-6 text-slate-600">
          Le serveur répond toujours avec un code à 3 chiffres indiquant le résultat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {codes.map((item) => (
            <button
              key={item.code}
              onClick={() => setSelectedCode(item.code)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedCode === item.code 
                  ? 'border-indigo-500 shadow-md scale-105' 
                  : 'border-slate-100 hover:border-indigo-200'
              } ${getTypeColor(item.type)}`}
            >
              <div className="text-2xl font-bold mb-1">{item.code}</div>
              <div className="text-xs font-medium truncate">{item.text}</div>
            </button>
          ))}
        </div>

        {selectedCode && (
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 animate-fade-in">
            <div className="flex items-center mb-2">
              <span className={`text-3xl font-bold mr-4 ${getTypeColor(codes.find(c => c.code === selectedCode)?.type || '').split(' ')[1]}`}>
                {selectedCode}
              </span>
              <span className="text-xl font-semibold text-slate-700">
                {codes.find(c => c.code === selectedCode)?.text}
              </span>
            </div>
            <p className="text-slate-600">
              {codes.find(c => c.code === selectedCode)?.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
