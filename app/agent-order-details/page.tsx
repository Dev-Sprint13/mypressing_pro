'use client';

import { useRouter } from 'next/navigation';
import { useOrdersStore } from '@/lib/orders-store';
import { formatStorageLocation } from '@/lib/utils';

export default function AgentOrderDetailsPage() {
  const router = useRouter();
  const firstOrder = useOrdersStore((state) => state.orders[0]);

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
          {/* Sidebar Navigation */}
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-40 overflow-y-auto flex flex-col">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md">
                    <i className="ph-bold ph-drop text-lg"></i>
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-900">Pressly</span>
            </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
            <button onClick={() => router.push('/agent-dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-chart-pie-slice text-lg"></i>
                <span>Tableau de bord</span>
            </button>
            
            <button onClick={() => router.push('/agent-new-order')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-plus-circle text-lg"></i>
                <span>Nouvelle commande</span>
            </button>
            
            <button onClick={() => router.push('/agent-orders')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-list-checks text-lg"></i>
                <span>Commandes</span>
            </button>
            
            <button onClick={() => router.push('/agent-clients')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
            </button>
            
            <button onClick={() => router.push('/agent-storage')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-archive-box text-lg"></i>
                <span>Rangement</span>
            </button>
            
            <button onClick={() => router.push('/agent-cash')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-cash text-lg"></i>
                <span>Caisse</span>
            </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
            <button onClick={() => {
              localStorage.removeItem('userRole');
              localStorage.removeItem('userEmail');
              localStorage.removeItem('userName');
              router.push('/login');
            }} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-sign-out text-lg"></i>
                <span>Déconnexion</span>
            </button>
        </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 ml-64 pt-6 pb-12 px-6">
        
        {/* Header with Back Button */}
        <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button onClick={() => router.push('/agent-orders')} className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-all">
                    <i className="ph ph-arrow-left text-lg"></i>
                    <span>Retour</span>
                </button>
            </div>
            <div className="flex gap-2">
                <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600 font-medium transition-all text-sm">
                    <i className="ph ph-printer text-lg"></i>
                    <span>Imprimer</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-all text-sm">
                    <i className="ph ph-dots-three-vertical text-lg"></i>
                </button>
            </div>
        </div>

        {/* Order Header */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Numéro de commande</p>
                    <h1 className="text-3xl font-bold text-gray-900">ORD-2024-160</h1>
                </div>
                <div className="text-right">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Statut</p>
                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-bold text-sm rounded-full">
                        <i className="ph-fill ph-check-circle inline mr-1"></i>Prête
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Date de réception</p>
                    <p className="text-gray-900 font-medium">20 Déc 2024</p>
                    <p className="text-xs text-gray-500 mt-1">14:30</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Date de retrait</p>
                    <p className="text-gray-900 font-medium">22 Déc 2024</p>
                    <p className="text-xs text-gray-500 mt-1">16:00</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Durée de traitement</p>
                    <p className="text-gray-900 font-medium">2 jours</p>
                    <p className="text-xs text-emerald-600 mt-1">À l'heure</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Agent responsable</p>
                    <p className="text-gray-900 font-medium">Sophie Martin</p>
                    <p className="text-xs text-gray-500 mt-1">ID: AGT-045</p>
                </div>
            </div>
        </div>

        {/* Customer & Items Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Customer Info */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 mb-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Informations du client</h2>
                    <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center text-2xl font-bold">
                            MR
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg">Marie Rousseau</h3>
                            <p className="text-gray-500 text-sm mt-1">Client depuis 1 an</p>
                            <div className="flex gap-4 mt-3 text-sm">
                                <a href="#" className="text-brand hover:underline flex items-center gap-1">
                                    <i className="ph ph-phone text-lg"></i>06 12 34 56 78
                                </a>
                                <a href="#" className="text-brand hover:underline flex items-center gap-1">
                                    <i className="ph ph-envelope text-lg"></i>marie@example.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 text-sm">
                        <p className="text-gray-600"><span className="font-semibold">Adresse:</span> 12 Rue des Fleurs, 75001 Paris</p>
                    </div>
                </div>

                {/* Items */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Articles et services</h2>
                    <div className="space-y-4">
                        {/* Item 1 */}
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Costume 2 pièces</p>
                                <p className="text-sm text-gray-500 mt-1">Service: Nettoyage à sec • Spécial haute couture</p>
                                <p className="text-xs text-gray-500 mt-1">Délai standard: 48h</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">8,500 FCFA</p>
                                <p className="text-xs text-gray-500 mt-1">Qty: 1</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Chemise blanche</p>
                                <p className="text-sm text-gray-500 mt-1">Service: Nettoyage à sec + Repassage</p>
                                <p className="text-xs text-gray-500 mt-1">Délai standard: 48h</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">3,500 FCFA</p>
                                <p className="text-xs text-gray-500 mt-1">Qty: 1</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Gilet de laine</p>
                                <p className="text-sm text-gray-500 mt-1">Service: Nettoyage délicat</p>
                                <p className="text-xs text-gray-500 mt-1">Délai prioritaire: 24h</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">3,500 FCFA</p>
                                <p className="text-xs text-gray-500 mt-1">Qty: 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 h-fit">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Résumé de facturation</h2>
                
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Sous-total</span>
                        <span className="font-semibold text-gray-900">15,500 FCFA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Service urgence (+20%)</span>
                        <span className="font-semibold text-gray-900">0 FCFA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">TVA (18%)</span>
                        <span className="font-semibold text-gray-900">2,790 FCFA</span>
                    </div>
                </div>

                <div className="bg-brand-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-brand">Total TTC</span>
                        <span className="text-2xl font-bold text-brand">15,500 FCFA</span>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Mode de paiement</p>
                        <div className="flex items-center gap-2 text-gray-900 font-medium">
                            <i className="ph ph-cash text-brand text-lg"></i>
                            <span>Espèces</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Statut du paiement</p>
                        <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">
                            <i className="ph-fill ph-check-circle inline mr-1"></i>Payé
                        </span>
                    </div>
                </div>

                <button className="w-full py-2.5 px-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-all">
                    <i className="ph ph-download inline mr-2"></i>Télécharger le reçu
                </button>
            </div>
        </div>

        {/* Timeline & Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Timeline */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Suivi de la commande</h2>
                <div className="space-y-4">
                    {/* Timeline Item 1 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                            <div className="w-0.5 h-12 bg-emerald-200 mt-2"></div>
                        </div>
                        <div className="pb-4">
                            <p className="font-semibold text-gray-900">Commande reçue</p>
                            <p className="text-sm text-gray-500 mt-0.5">20 Décembre 2024 • 14:30</p>
                            <p className="text-xs text-gray-600 mt-2">Commande enregistrée et confirmée par Sophie Martin</p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                            <div className="w-0.5 h-12 bg-emerald-200 mt-2"></div>
                        </div>
                        <div className="pb-4">
                            <p className="font-semibold text-gray-900">Commande en traitement</p>
                            <p className="text-sm text-gray-500 mt-0.5">21 Décembre 2024 • 09:00</p>
                            <p className="text-xs text-gray-600 mt-2">Articles triés et en cours de traitement</p>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                            <div className="w-0.5 h-12 bg-gray-200 mt-2"></div>
                        </div>
                        <div className="pb-4">
                            <p className="font-semibold text-gray-900">Commande prête</p>
                            <p className="text-sm text-gray-500 mt-0.5">22 Décembre 2024 • 10:30</p>
                            <p className="text-xs text-gray-600 mt-2">Articles nettoyés, emballés et prêts pour le retrait</p>
                        </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-gray-400">En attente de retrait</p>
                            <p className="text-sm text-gray-500 mt-0.5">Prévu: 22 Décembre 2024 • 16:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes & Special Requests */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Notes spéciales</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-yellow-900">
                        <i className="ph-fill ph-warning inline mr-2 text-lg"></i>
                        <strong>Attention:</strong> Articles délicats - À manipuler avec soin
                    </p>
                </div>

                <textarea placeholder="Ajouter une note..." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5" rows={4}>Client très satisfait de nos services. Préfère retrait personnel.</textarea>
                
                <div className="mt-4 space-y-2">
                    <button className="w-full py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                        Enregistrer la note
                    </button>
                </div>
            </div>

            {/* Storage location summary */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Emplacement de rangement</h2>
                <p className="text-sm text-gray-600 mb-3">
                    Utilisez ce code pour retrouver rapidement les vêtements dans la zone de rangement.
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand border border-brand-100 text-sm font-semibold">
                    <i className="ph ph-map-pin mr-2" />
                    {firstOrder ? formatStorageLocation(firstOrder) : 'Non défini'}
                </div>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
