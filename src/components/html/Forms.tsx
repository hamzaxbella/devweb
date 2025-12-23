import { useState } from 'react';

export default function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'student'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Formulaires & Inputs</h2>
        <p className="mb-6 text-slate-600">
          Les formulaires permettent aux utilisateurs d'envoyer des données au serveur.
          L'attribut <code>for</code> du label doit correspondre à l'<code>id</code> de l'input.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Form */}
          <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
            <h3 className="font-semibold mb-4">Rendu Visuel</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="exemple@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Statut</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="student">Étudiant</option>
                  <option value="developer">Développeur</option>
                  <option value="designer">Designer</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                S'inscrire
              </button>
            </form>
          </div>

          {/* Code Preview */}
          <div className="p-6 bg-slate-900 rounded-lg text-slate-300 font-mono text-sm overflow-x-auto">
            <h3 className="font-semibold mb-4 text-slate-100">Code HTML Généré</h3>
            <pre>
{`<form action="/api/signup" method="POST">
  <!-- Groupe Nom -->
  <div class="form-group">
    <label for="name">Nom</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      value="${formData.name}" 
      required 
    />
  </div>

  <!-- Groupe Email -->
  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      value="${formData.email}" 
      required 
    />
  </div>

  <!-- Groupe Password -->
  <div class="form-group">
    <label for="password">Mot de passe</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      required 
    />
  </div>

  <!-- Groupe Select -->
  <div class="form-group">
    <label for="type">Statut</label>
    <select id="type" name="type">
      <option value="student" ${formData.type === 'student' ? 'selected' : ''}>Étudiant</option>
      <option value="developer" ${formData.type === 'developer' ? 'selected' : ''}>Développeur</option>
      <option value="designer" ${formData.type === 'designer' ? 'selected' : ''}>Designer</option>
    </select>
  </div>

  <button type="submit">S'inscrire</button>
</form>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
