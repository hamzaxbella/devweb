import { useState, useEffect } from 'react';

export default function Playground() {
  const [html, setHtml] = useState('<div class="box">\n  <h1>Hello World!</h1>\n  <p>Modifie-moi !</p>\n</div>');
  const [css, setCss] = useState('.box {\n  background: #f0f9ff;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n\nh1 {\n  color: #0284c7;\n}');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>
              body { font-family: sans-serif; margin: 0; padding: 1rem; }
              ${css}
            </style>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-slate-900">Playground</h1>
        <p className="text-slate-600">Expérimentez avec HTML et CSS en temps réel.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* Editors */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 flex flex-col">
            <label className="text-sm font-bold text-slate-700 mb-1 bg-slate-100 px-2 py-1 rounded-t-md border border-b-0 border-slate-300 w-fit">HTML</label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              className="flex-1 w-full p-4 font-mono text-sm bg-slate-900 text-slate-100 rounded-b-md rounded-tr-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              spellCheck="false"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-sm font-bold text-slate-700 mb-1 bg-slate-100 px-2 py-1 rounded-t-md border border-b-0 border-slate-300 w-fit">CSS</label>
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              className="flex-1 w-full p-4 font-mono text-sm bg-slate-900 text-slate-100 rounded-b-md rounded-tr-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="flex flex-col h-full">
          <label className="text-sm font-bold text-slate-700 mb-1">Résultat</label>
          <div className="flex-1 bg-white border-2 border-slate-300 rounded-lg overflow-hidden shadow-sm">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
              className="border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
