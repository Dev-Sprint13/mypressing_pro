'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AgentOrderTicketPage() {
  const router = useRouter();

  useEffect(() => {
    // Create confetti effect
    const createConfetti = () => {
      const colors = ['#5a7880', '#75939b', '#4d646d'];
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
      }
    };

    createConfetti();
  }, []);

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen font-sans selection:bg-brand-light selection:text-white">
          {/* Navigation (No Print) */}
    <div className="no-print fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md">
                <i className="ph-bold ph-drop text-lg"></i>
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">PressingPro</span>
        </div>
        
        <div className="flex items-center gap-4">
            <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all text-sm">
                <i className="ph ph-printer"></i>
                Imprimer le ticket
            </button>
            <button onClick={() => router.push('/agent-dashboard')} className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all text-sm">
                <i className="ph ph-arrow-left"></i>
                Retour
            </button>
        </div>
    </div>

    {/* Main Content */}
    <main className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
        
        {/* Ticket Container */}
        <div className="print-container w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative overflow-hidden">
            
            {/* Success Icon */}
            <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <i className="ph-fill ph-check-circle text-emerald-600 text-4xl"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Commande confirmée !</h1>
                <p className="text-gray-500 text-sm mt-1">Votre commande a été enregistrée avec succès</p>
            </div>

            <div className="ticket-divider"></div>

            {/* Order Details */}
            <div className="space-y-5 my-6">
                
                {/* Order ID */}
                <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Numéro de commande</p>
                    <p className="text-3xl font-bold text-brand mt-2">ORD-2024-161</p>
                    <p className="text-xs text-gray-400 mt-1">Sauvegardez ce numéro pour vos références</p>
                </div>

                <div className="ticket-divider"></div>

                {/* Customer Info */}
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Client</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                        <p className="font-bold text-gray-900">Marie Dubois</p>
                        <p className="text-sm text-gray-600 mt-1">📞 06 45 32 11 22</p>
                    </div>
                </div>

                {/* Items */}
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Articles</p>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Lavage standard</span>
                            <span className="font-semibold text-gray-900">5,000 F</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Lavage & Repassage</span>
                            <span className="font-semibold text-gray-900">8,000 F</span>
                        </div>
                    </div>
                </div>

                {/* Pickup Info */}
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Date de retrait</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                        <p className="font-bold text-gray-900">Mercredi 24 avril 2024</p>
                        <p className="text-sm text-gray-600 mt-1">🕐 14:00 - 16:00</p>
                    </div>
                </div>

                <div className="ticket-divider"></div>

                {/* Pricing */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Sous-total</span>
                        <span className="font-medium text-gray-900">13,000 F</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Taxe (18%)</span>
                        <span className="font-medium text-gray-900">2,340 F</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                        <span className="font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-brand">15,340 F</span>
                    </div>
                </div>

                <div className="ticket-divider"></div>

                {/* Payment Method */}
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Mode de paiement</p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                        <p className="font-bold text-emerald-700 flex items-center gap-2">
                            <i className="ph ph-money"></i>
                            Espèces
                        </p>
                    </div>
                </div>

                <div className="ticket-divider"></div>

                {/* Important Info */}
                <div className="bg-brand-50 border border-brand-100 rounded-lg p-4">
                    <p className="text-xs font-semibold text-brand mb-2 uppercase">Important</p>
                    <ul className="text-xs text-gray-700 space-y-1.5">
                        <li className="flex gap-2">
                            <i className="ph ph-check-circle text-emerald-600 flex-shrink-0"></i>
                            <span>Conservez ce ticket pour le retrait</span>
                        </li>
                        <li className="flex gap-2">
                            <i className="ph ph-check-circle text-emerald-600 flex-shrink-0"></i>
                            <span>Retrait uniquement aux heures indiquées</span>
                        </li>
                        <li className="flex gap-2">
                            <i className="ph ph-check-circle text-emerald-600 flex-shrink-0"></i>
                            <span>En cas de modification, appelez-nous</span>
                        </li>
                    </ul>
                </div>

                {/* Timestamp */}
                <div className="text-center text-xs text-gray-400 mt-4">
                    <p>Enregistré le 20 avril 2024 à 10:45</p>
                </div>

            </div>

            {/* Footer */}
            <div className="ticket-divider"></div>
            <div className="text-center text-xs text-gray-500 mt-6">
                <p className="font-semibold text-gray-900 mb-1">PressingPro</p>
                <p>📍 123 Rue de la Paix, 75000 Paris</p>
                <p>📞 01 23 45 67 89</p>
                <p>⏰ Lun-Sam: 8h-19h | Dim: 9h-12h</p>
            </div>

        </div>

    </main>

    {/* Action Buttons (No Print) */}
    <div className="no-print fixed bottom-6 left-6 right-6 max-w-md mx-auto flex gap-3">
        <button onClick={() => router.push('/agent-new-order')} className="flex-1 py-3 px-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg">
            <i className="ph ph-plus-circle"></i>
            Nouvelle commande
        </button>
        <button onClick={() => router.push('/agent-dashboard')} className="flex-1 py-3 px-4 bg-white border border-brand text-brand font-semibold rounded-xl hover:bg-brand-50 transition-all flex items-center justify-center gap-2 shadow-lg">
            <i className="ph ph-home"></i>
            Tableau de bord
        </button>
    </div>
        </div>
      </>
    );
}
