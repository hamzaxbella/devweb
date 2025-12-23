import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RequestResponse() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [step, setStep] = useState<'idle' | 'request' | 'processing' | 'response'>('idle');

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStep('request');
  };

  useEffect(() => {
    if (step === 'request') {
      setTimeout(() => setStep('processing'), 1500);
    } else if (step === 'processing') {
      setTimeout(() => setStep('response'), 1500);
    } else if (step === 'response') {
      setTimeout(() => {
        setStep('idle');
        setIsAnimating(false);
      }, 1500);
    }
  }, [step]);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Cycle Requête / Réponse</h2>
        <p className="mb-6 text-slate-600">
          Le web fonctionne sur un échange constant : le Client (Navigateur) demande, le Serveur répond.
        </p>

        <div className="relative h-[300px] bg-slate-50 border border-slate-200 rounded-lg p-8 flex items-center justify-between overflow-hidden">
          {/* Client */}
          <div className="flex flex-col items-center z-10">
            <div className="w-20 h-20 bg-blue-100 border-2 border-blue-500 rounded-lg flex items-center justify-center text-4xl shadow-sm">
              💻
            </div>
            <span className="mt-2 font-bold text-slate-700">Client</span>
            <span className="text-xs text-slate-500">(Navigateur)</span>
          </div>

          {/* Server */}
          <div className="flex flex-col items-center z-10">
            <div className="w-20 h-20 bg-green-100 border-2 border-green-500 rounded-lg flex items-center justify-center text-4xl shadow-sm">
              🖥️
            </div>
            <span className="mt-2 font-bold text-slate-700">Serveur</span>
            <span className="text-xs text-slate-500">(Base de données)</span>
          </div>

          {/* Animation Packet */}
          {step !== 'idle' && (
            <motion.div
              className="absolute top-1/2 left-28 -translate-y-1/2"
              initial={{ x: 0, opacity: 0 }}
              animate={{ 
                x: step === 'request' ? 300 : step === 'response' ? 0 : 300,
                opacity: 1
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className={`px-4 py-2 rounded-full text-white text-sm font-bold shadow-md ${step === 'response' ? 'bg-green-500' : 'bg-blue-500'}`}>
                {step === 'request' ? 'GET /index.html' : step === 'response' ? '200 OK (HTML)' : 'Traitement...'}
              </div>
            </motion.div>
          )}
          
          {/* Connection Line */}
          <div className="absolute top-1/2 left-28 right-28 h-1 bg-slate-200 -z-0"></div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={startAnimation}
            disabled={isAnimating}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isAnimating ? 'Communication en cours...' : 'Lancer une requête'}
          </button>
        </div>
      </div>
    </div>
  );
}
