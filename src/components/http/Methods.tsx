export default function Methods() {
  const methods = [
    { name: 'GET', color: 'bg-blue-100 text-blue-700 border-blue-300', desc: 'Demander des données (ex: charger une page).', safe: true },
    { name: 'POST', color: 'bg-green-100 text-green-700 border-green-300', desc: 'Envoyer des nouvelles données (ex: formulaire).', safe: false },
    { name: 'PUT', color: 'bg-orange-100 text-orange-700 border-orange-300', desc: 'Mettre à jour une ressource existante (remplacement complet).', safe: false },
    { name: 'PATCH', color: 'bg-yellow-100 text-yellow-700 border-yellow-300', desc: 'Modifier partiellement une ressource.', safe: false },
    { name: 'DELETE', color: 'bg-red-100 text-red-700 border-red-300', desc: 'Supprimer une ressource.', safe: false },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Méthodes HTTP (Verbes)</h2>
        <p className="mb-6 text-slate-600">
          Le verbe indique au serveur quelle action effectuer sur la ressource.
        </p>

        <div className="grid gap-4">
          {methods.map((method) => (
            <div key={method.name} className={`p-4 rounded-lg border-l-4 ${method.color.split(' ')[2].replace('border-', 'border-l-')} bg-white shadow-sm border border-slate-100 flex items-center`}>
              <div className={`w-20 font-bold text-center py-1 rounded ${method.color} mr-4`}>
                {method.name}
              </div>
              <div className="flex-1">
                <p className="text-slate-700">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
